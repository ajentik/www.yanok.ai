const fs = require('fs');
const path = require('path');

const integrationsDir = path.join(__dirname, '../src/pages/integrations');
const files = fs.readdirSync(integrationsDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(integrationsDir, file);
  let text = fs.readFileSync(filePath, 'utf8');

  // Target meta name="description" tags in metaTags prop
  const metaRegex = /<meta\\s+name="description"\\s+content=(['"\`])([\\s\\S]*?)\\1\\s*\\/?>/g;
  text = text.replace(metaRegex, (_, quote, inner) => {
    // Escape backticks inside the content
    const escaped = inner.replace(/`/g, '\\`');
    return `<meta name="description" content={\`${escaped}\`} />`;
  });

  fs.writeFileSync(filePath, text, 'utf8');
});

console.log('Static integration meta descriptions fixed.');