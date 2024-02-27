module.exports = {
  rules: {
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true,
        ignoreExports: ['./next.config.*', 'src/app/**'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'function',
            format: ['StrictPascalCase'],
          },
        ],
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' },
        ],
        'total-functions/no-unsafe-readonly-mutable-assignment': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
      },
    },
  ],
}
