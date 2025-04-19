const fs = require('fs');
const path = require('path');

const integrationsDir = path.join(__dirname, '../src/pages/integrations');

fs.readdirSync(integrationsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(integrationsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(
      /description="([\\s\\S]*?)"/g,
      (match, inner) => {
        const escaped = inner.replace(/`/g, '\\`');
        // Wrap in JSX template literal without nested backticks in this script
        return 'description={`' + escaped + '`}';
      }
    );

    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Descriptions fixed');