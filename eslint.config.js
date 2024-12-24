import eslint from '@eslint/js';
import globals from 'globals';

import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

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

    settings: { react: { version: '18.3' } },

    // Used plugins
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },

    // ESLint rules configuration
    rules: {
      ...eslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      ...prettier.configs.recommended.rules,
    },
  },
];
