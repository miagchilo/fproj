// eslint-disable-next-line no-undef
module.exports = {
  $schema: 'http://json.schemastore.org/eslintrc',
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint-parser',
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/recommended': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        trailingComma: 'es5',
        semi: true,
        doubleQuote: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
      },
    ],
  },
};
