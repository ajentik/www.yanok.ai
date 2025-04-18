import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Helper function to read and parse Jekyll YAML data files
 * @param {string} filePath - Path to the YAML file
 * @returns {Object} Parsed YAML data
 */
export function readYamlData(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (error) {
    console.error(`Error reading YAML file ${filePath}:`, error);
    return null;
  }
}

/**
 * Helper function to parse Jekyll front matter from Markdown or HTML files
 * @param {string} filePath - Path to the file
 * @returns {Object} Object containing front matter and content
 */
export function parseFrontMatter(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Jekyll front matter is delimited by "---" lines
    const frontMatterPattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const matches = fileContents.match(frontMatterPattern);
    
    if (!matches) {
      return {
        frontMatter: {},
        content: fileContents
      };
    }
    
    const frontMatter = yaml.load(matches[1]);
    const content = matches[2];
    
    return {
      frontMatter,
      content
    };
  } catch (error) {
    console.error(`Error parsing front matter from ${filePath}:`, error);
    return {
      frontMatter: {},
      content: ''
    };
  }
}

/**
 * Helper function to convert Jekyll layout to Next.js component
 * @param {string} layout - Jekyll layout name
 * @returns {string} Corresponding Next.js layout component
 */
export function mapJekyllLayoutToNextComponent(layout) {
  const layoutMap = {
    'default': 'Layout',
    'page': 'PageLayout',
    'post': 'PostLayout',
    'integration': 'IntegrationLayout',
    'solutions': 'SolutionsLayout',
    'markdown': 'MarkdownLayout'
  };
  
  return layoutMap[layout] || 'Layout';
}

/**
 * Process a directory of Jekyll files and convert them to Next.js format
 * @param {string} sourceDir - Directory containing Jekyll files
 * @param {string} targetDir - Directory to write Next.js files
 * @param {string} extension - File extension to convert (md or html)
 */
export function migrateJekyllFiles(sourceDir, targetDir, extension = 'md') {
  try {
    const files = fs.readdirSync(sourceDir);
    
    files.forEach(file => {
      const filePath = path.join(sourceDir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        const newTargetDir = path.join(targetDir, file);
        if (!fs.existsSync(newTargetDir)) {
          fs.mkdirSync(newTargetDir, { recursive: true });
        }
        migrateJekyllFiles(filePath, newTargetDir, extension);
      } else if (file.endsWith(`.${extension}`)) {
        const { frontMatter, content } = parseFrontMatter(filePath);
        
        // Skip files without front matter
        if (!frontMatter) return;
        
        // Generate Next.js file content
        const nextJsContent = generateNextJsFileContent(frontMatter, content);
        
        // Write to the target directory with .js extension for Next.js pages
        const targetFileName = file.replace(`.${extension}`, '.js');
        const targetFilePath = path.join(targetDir, targetFileName);
        
        fs.writeFileSync(targetFilePath, nextJsContent);
        console.log(`Migrated: ${filePath} -> ${targetFilePath}`);
      }
    });
  } catch (error) {
    console.error('Error migrating Jekyll files:', error);
  }
}

/**
 * Generate Next.js file content from Jekyll front matter and content
 * @param {Object} frontMatter - Jekyll front matter object
 * @param {string} content - Content from Jekyll file
 * @returns {string} Next.js formatted file content
 */
function generateNextJsFileContent(frontMatter, content) {
  const layout = frontMatter.layout || 'default';
  const layoutComponent = mapJekyllLayoutToNextComponent(layout);
  
  // Convert content to JSX-safe format
  const processedContent = content
    .trim()
    .replace(/'/g, "\\'")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
  
  return `import ${layoutComponent} from '@/components/${layoutComponent}';

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
}
