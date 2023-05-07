module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    'react/react-in-jsx-scope': 0,
    indent: ['error', 2],
    semi: [2, 'always'],
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'object-curly-spacing': 2,
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/naming-convention': 0,
    'i18next/no-literal-string': [1, { markupOnly: true }]
  }
};
