/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript'
  ],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 1 },
      multiline: { max: 1 }
    }]
  },
};
