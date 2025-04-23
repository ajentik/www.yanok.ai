const fs = require('fs');
const path = require('path');

const integrationsDir = path.join(__dirname, '../src/pages/integrations');

fs.readdirSync(integrationsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(integrationsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content
      .replace(/description="([\\s\\S]*?)"/g, (match, inner) => {
        const escaped = inner.replace(/`/g, '\\`');
        return 'description={' + '`' + escaped + '`' + '}';
      })
      .replace(/content="([\\s\\S]*?)"/g, (match, inner) => {
        const escaped = inner.replace(/`/g, '\\`');
        return 'content={' + '`' + escaped + '`' + '}';
      });

    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Descriptions and content props fixed');
