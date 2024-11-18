/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prefer-arrow-callback': ['error'],
    'prefer-template': ['error'],
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
