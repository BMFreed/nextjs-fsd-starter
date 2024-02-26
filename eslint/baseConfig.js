const prettierConfig = require('../.prettierrc')
const typeScriptRules = require('./rulesets/typeScriptRules')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['nested-if'],
  extends: [
    'hardcore',
    'hardcore/ts',
    'hardcore/react',
    'hardcore/react-performance',
    'next',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*rc.js', 'eslint/**'],
  rules: {
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'putout/putout': 'off',
    'ext/lines-between-object-properties': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: prettierConfig.printWidth,
        comments: prettierConfig.printWidth + 40,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'nested-if/nested-if-statements': ['error', 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
    ],
    'perfectionist/sort-objects': 'off',
    ...typeScriptRules,
  },
}
