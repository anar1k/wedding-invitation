/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb-with-typescript'
  ],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 1 },
      multiline: { max: 1 }
    }]
  },
};
