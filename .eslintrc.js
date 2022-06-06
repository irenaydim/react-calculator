/* eslint-disable sort-keys */
module.exports = {
  env: {
    es2020: true,
    browser: true,
    node: true,
    jasmine: true
  },
  extends: [
    'eslint:all',
    'plugin:react/all'
  ],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  root: true,
  rules: {
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    indent: ['error', 2, { ignoredNodes: ['JSXElement', 'JSXElement *'] }],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'react/jsx-indent': 'off',
    semi: ['error', 'never'],
    'max-len': [
      'error', {
        code: 150,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'react/jsx-max-depth': ['error', { max: 10 }],
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 5, multi: 3 } }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'function-call-argument-newline': ['error', 'consistent'],
    'multiline-ternary': ['error', 'always-multiline'],
    'react/jsx-indent-props': ['error', 2],

    'linebreak-style': 'off',
    'no-magic-numbers': 'off',
    'id-length': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-lines-per-function': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-literals': 'off',
    'func-style': 'off',
    'react/no-danger': 'off',
    'require-await': 'off',
    'no-extra-parens': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-ternary': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-newline': 'off',
    'sort-imports': 'off',
    'no-empty-function': 'off',
    'max-statements': 'off',
    'no-use-before-define': 'off',
    'require-unicode-regexp': 'off',
    'sort-keys': 'off',
    radix: 'off',
    'no-bitwise': 'off',
    'react/jsx-sort-props': 'off',
    'no-nested-ternary': 'off',
    'max-params': 'off',
    'no-negated-condition': 'off'
  }
}
