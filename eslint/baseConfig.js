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
    'nested-if/nested-if-statements': ['error', 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
    'import/exports-last': 'off',
    'perfectionist/sort-objects': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/no-use-before-define': ["error", {
      "functions": true,
      "classes": true,
      "variables": false,
      "allowNamedExports": false
    }],
    ...typeScriptRules,
  },
}
