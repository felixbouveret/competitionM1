module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-standard", 'stylelint-config-rational-order'],
  rules: {
    "at-rule-no-unknown": null,
    'declaration-empty-line-before': [null],
    'order/properties-order': [[], { severity: 'warning' }],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true,
        severity: 'warning',
      },
    ],
  },
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],

}