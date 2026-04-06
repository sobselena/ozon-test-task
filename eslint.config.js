import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.test.*', '**/*.spec.*'],

    files: ['**/*.{ts,tsx,mts,cts}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    plugins: { unicorn, prettier },

    rules: {
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        { allowList: { acc: true, env: true, i: true, j: true, props: true, Props: true } },
      ],

      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  tseslint.configs.recommendedTypeChecked,
]);
