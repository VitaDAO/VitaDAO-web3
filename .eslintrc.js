module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'off',
    'vue/no-v-html': 'off', // Disabled this for the proposal markdown parsing
    'vue/array-bracket-spacing': 'warn',
    'vue/arrow-spacing': 'warn',
    'vue/block-spacing': 'warn',
    'vue/brace-style': 'warn',
    'vue/camelcase': 'warn',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/key-spacing': 'warn',
    'vue/keyword-spacing': 'warn',
    'vue/match-component-file-name': 'warn',
    'vue/max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        tabWidth: 2,
        ignorePattern: '',
        ignoreComments: false,
        ignoreUrls: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
      },
    ],
    'vue/no-empty-pattern': 'warn',
    'vue/no-irregular-whitespace': 'warn',
    'vue/no-reserved-component-names': 'off',
    'vue/no-restricted-syntax': 'warn',
    'vue/no-unused-components': ['warn'],
    'vue/no-restricted-syntax': 'warn',
    'vue/no-unsupported-features': 'warn',
    'vue/object-curly-spacing': 'off',
    'vue/padding-line-between-blocks': 'warn',
    'vue/v-slot-style': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-slot': 'error',
    'vue/no-mutating-props': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
