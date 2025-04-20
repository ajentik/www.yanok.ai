const fs = require('fs');
const path = require('path');

const integrationsDir = path.join(__dirname, '../src/pages/integrations');
const files = fs.readdirSync(integrationsDir).filter(f => f.endsWith('.js'));

files.forEach((file) => {
  const filePath = path.join(integrationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Wrap description prop in JSX backticks
  content = content.replace(/description=\s*(['"`])([\s\S]*?)\\1/g, (match, quote, inner) => {
    const escaped = inner.replace(/`/g, '\\`');
    return 'description={`' + escaped + '`}';
  });

  // Wrap meta description content in JSX backticks
  content = content.replace(/<meta\\s+name="description"\\s+content=\\s*(['"`])([\\s\\S]*?)\\1/g, (match, quote, inner) => {
    const escaped = inner.replace(/`/g, '\\`');
    return '<meta name="description" content={`' + escaped + '`}';
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Integration descriptions and meta content wrapped in backticks.');