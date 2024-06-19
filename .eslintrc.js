module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["vue", "@typescript-eslint"],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "no-undef": "off",
    "no-unused-expressions": "off",
    "vue/valid-template-root": "off",
    "vue/no-multiple-template-root": "off",
    "vue/attribute-hyphenation": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/custom-event-name-casing": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-template-shadow": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "vue/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],
  },
};
