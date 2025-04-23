module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Transform description attributes
  root.find(j.JSXAttribute, { name: { name: 'description' } }).forEach(path => {
    const attr = path.node;
    if (attr.value && attr.value.type === 'Literal') {
      const text = attr.value.value;
      const escaped = text.replace(/`/g, '\\`');
      attr.value = j.jsxExpressionContainer(
        j.templateLiteral(
          [j.templateElement({ raw: escaped, cooked: escaped }, true)],
          []
        )
      );
    }
  });

  // Transform content attributes
  root.find(j.JSXAttribute, { name: { name: 'content' } }).forEach(path => {
    const attr = path.node;
    if (attr.value && attr.value.type === 'Literal') {
      const text = attr.value.value;
      const escaped = text.replace(/`/g, '\\`');
      attr.value = j.jsxExpressionContainer(
        j.templateLiteral(
          [j.templateElement({ raw: escaped, cooked: escaped }, true)],
          []
        )
      );
    }
  });

  return root.toSource({ quote: 'single' });
};
