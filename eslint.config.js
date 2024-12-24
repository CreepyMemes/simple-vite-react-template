import eslint from '@eslint/js';
import globals from 'globals';

import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist/*'],
  },

  {
    files: ['**/*.{js,mjs,cjs,jsx}'],

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  eslint.configs.recommended,
  react.configs.flat.recommended,

  prettier,
];
