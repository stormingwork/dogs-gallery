module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    // "airbnb-base",
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    // allow paren-less arrow functions
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // "quotes": ["error", "single"],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-extra-semi': ['error'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/no-v-html': 0
  },
}
