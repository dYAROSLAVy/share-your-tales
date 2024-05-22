module.exports = {
  outDir: 'src/shared/assets/icons/components',
  filenameCase: 'kebab',
  template: require('./svgr-template.cjs'),
  prettierConfig: {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 110,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
  },
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeXMLNS',
        active: true,
      },
    ],
  },
};
