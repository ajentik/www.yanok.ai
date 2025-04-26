const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindPlugin = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('../tailwind.config.js');

describe('CSS build pipeline', () => {
  const cssPath = path.resolve(__dirname, '../src/styles/globals.css');
  const plugin = tailwindPlugin(tailwindConfig);

  it('processes globals.css without throwing errors', async () => {
    const input = fs.readFileSync(cssPath, 'utf-8');
    const processor = postcss([plugin, autoprefixer]);
    await expect(
      processor.process(input, { from: cssPath })
    ).resolves.toHaveProperty('css');
  });

  it('includes base utility classes in the output', async () => {
    const input = fs.readFileSync(cssPath, 'utf-8');
    const result = await postcss([plugin, autoprefixer]).process(input, { from: cssPath });
    const output = result.css;
    expect(output).toMatch(/\.site-gutter\s*{\s*padding-left:\s*1rem/);
    expect(output).toMatch(/@media\s*\(min-width:\s*768px\)\s*{\s*\.site-gutter\s*{\s*padding-left:\s*2rem/);
  });
});