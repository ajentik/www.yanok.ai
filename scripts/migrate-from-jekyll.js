#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const yaml = require('js-yaml');

// Configuration
const sourceDir = process.cwd(); // Root of the Jekyll project
const targetDir = path.join(process.cwd(), 'src/pages');
const assetsSourceDir = path.join(sourceDir, 'assets');
const assetsTargetDir = path.join(process.cwd(), 'public');

// Create necessary directories
console.log('Creating necessary directories...');
[
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'src/pages'),
  path.join(process.cwd(), 'src/components'),
  path.join(process.cwd(), 'src/data'),
].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy assets
console.log('Copying assets...');
if (fs.existsSync(assetsSourceDir)) {
  if (!fs.existsSync(assetsTargetDir)) {
    fs.mkdirSync(assetsTargetDir, { recursive: true });
  }
  
  try {
    execSync(`cp -R ${assetsSourceDir}/* ${assetsTargetDir}/`);
    console.log('Assets copied successfully!');
  } catch (error) {
    console.error('Error copying assets:', error);
  }
}

// Process YAML data files
console.log('Processing data files...');
const dataDir = path.join(sourceDir, 'data');
const targetDataDir = path.join(process.cwd(), 'src/data');

if (fs.existsSync(dataDir)) {
  if (!fs.existsSync(targetDataDir)) {
    fs.mkdirSync(targetDataDir, { recursive: true });
  }
  
  fs.readdirSync(dataDir).forEach(file => {
    if (file.endsWith('.yml') || file.endsWith('.yaml')) {
      const filePath = path.join(dataDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      try {
        const data = yaml.load(fileContents);
        const jsFileName = file.replace(/\.ya?ml$/, '.js');
        const targetPath = path.join(targetDataDir, jsFileName);
        
        const jsContent = `// Auto-generated from ${file}
export const data = ${JSON.stringify(data, null, 2)};
export default data;
`;
        
        fs.writeFileSync(targetPath, jsContent);
        console.log(`Converted ${file} to ${jsFileName}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  });
}

// Process Jekyll pages
console.log('\nProcessing Jekyll pages...');

function processJekyllFile(filePath, targetFilePath, isRootFile = false) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Check for front matter
    const frontMatterPattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const matches = fileContents.match(frontMatterPattern);
    
    if (!matches) {
      console.log(`Skipping ${filePath} (no front matter found)`);
      return;
    }
    
    const frontMatter = yaml.load(matches[1]);
    const content = matches[2].trim();
    
    // Determine layout component
    const layout = frontMatter.layout || 'default';
    let layoutComponent;
    
    switch (layout) {
      case 'default':
        layoutComponent = 'Layout';
        break;
      case 'page':
        layoutComponent = 'PageLayout';
        break;
      case 'integration':
        layoutComponent = 'IntegrationLayout';
        break;
      case 'solutions':
        layoutComponent = 'SolutionsLayout';
        break;
      case 'markdown':
        layoutComponent = 'MarkdownLayout';
        break;
      default:
        layoutComponent = 'Layout';
    }
    
    // Process the content to make it JSX compatible
    const processedContent = content
      .replace(/'/g, "\\'")
      .replace(/`/g, "\\`")
      .replace(/\$/g, "\\$");
    
    // Generate Next.js page component
    const nextJsContent = `import ${layoutComponent} from '@/components/${layoutComponent}';

export default function Page() {
  return (
    <${layoutComponent} 
      title="${frontMatter.title || ''}"
      description="${frontMatter.description || ''}"
    >
      <div dangerouslySetInnerHTML={{ __html: \`${processedContent}\` }} />
    </${layoutComponent}>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>${frontMatter.title || ''}</title>
          <meta name="description" content="${frontMatter.description || ''}" />
        </>
      ),
    },
  };
}
`;
    
    // Ensure parent directories exist
    const targetDir = path.dirname(targetFilePath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Write the Next.js file
    fs.writeFileSync(targetFilePath, nextJsContent);
    console.log(`Converted: ${filePath} -> ${targetFilePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function processPagesDirectory(dir, targetDir, isRoot = false) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      if (file !== '_layouts' && file !== '_includes' && file !== 'assets' && !file.startsWith('.')) {
        const newTargetDir = path.join(targetDir, file);
        if (!fs.existsSync(newTargetDir)) {
          fs.mkdirSync(newTargetDir, { recursive: true });
        }
        processPagesDirectory(filePath, newTargetDir);
      }
    } else if (file.endsWith('.html') || file.endsWith('.md')) {
      // Skip specific Jekyll system files
      if (file === '404.html' || file === 'robots.txt') {
        return;
      }
      
      // Special handling for index files
      let targetFileName;
      if (file === 'index.html' || file === 'index.md') {
        targetFileName = 'index.js';
      } else {
        // For other files, convert to the Next.js dynamic route format
        targetFileName = file.replace(/\.(html|md)$/, '.js');
      }
      
      const targetFilePath = path.join(targetDir, targetFileName);
      processJekyllFile(filePath, targetFilePath, isRoot);
    }
  });
}

// Start processing from the Jekyll root
processPagesDirectory(sourceDir, targetDir, true);

console.log('\nMigration complete! Next steps:');
console.log('1. Review and refine the generated Next.js components');
console.log('2. Check for any missing assets or data files');
console.log('3. Run "npm run dev" to test your Next.js site');
