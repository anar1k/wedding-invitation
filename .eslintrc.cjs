require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  plugins: [
    '@stylistic'
  ],

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreHTMLAttributeValues: true
    }],

    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'caughtErrors': 'none',
      'ignoreRestSiblings': false
    }],

    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/type-generic-spacing': ['error'],
    '@stylistic/type-named-tuple-spacing': ['error'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/type-annotation-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/key-spacing': ['error', { 'afterColon': true }],
    '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
    '@stylistic/semi': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/indent': ['error', 2]
  },
};
