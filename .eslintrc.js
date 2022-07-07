module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/vue',
    'prettier',
  ],
  plugins: ['jest', 'jest-dom', 'testing-library'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default'],
      },
    ],
  },
};
