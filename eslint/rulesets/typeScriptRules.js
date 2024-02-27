module.exports = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  // Дальше переопределяем правила из config-hardcore
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as' },
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase'],
    },
    {
      selector: 'function',
      format: ['strictCamelCase', 'StrictPascalCase'],
    },
    {
      selector: ['typeLike', 'enumMember'],
      format: ['StrictPascalCase'],
    },
    {
      selector: ['objectLiteralProperty'],
      format: null,
      modifiers: ['requiresQuotes'],
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'no-type-imports' },
  ],
}
