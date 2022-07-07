module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 3,
    'selector-class-pattern': null,
    'selector-no-vendor-prefix': null,
    'color-function-notation': null,
    'function-no-unknown': null,
    'value-keyword-case': null,
    'string-quotes': 'single',
  },
};
