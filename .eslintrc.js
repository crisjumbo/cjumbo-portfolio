module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features

    sourceType: 'module', // Allows for the use of imports

    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'quotes': ['error','single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'curly': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    'src/serviceWorker.ts',
    'template/src/serviceWorker.ts',
    'src/assets/statics/'
  ],
};
