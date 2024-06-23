// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // 除外設定
  {
    ignores: ["types/database.types.ts"],
  },

  // vueとtsファイルに掛かる設定
  {
    files: ["**/*.vue", "**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
    rules: {
      "no-undef": "off",
      "no-unused-expressions": "off",
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
  },

  // vueファイルにのみ掛かる設定
  {
    files: ["**/*.vue"],
    rules: {
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
    },
  },
);
