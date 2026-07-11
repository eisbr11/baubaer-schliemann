import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: 'import-rules',
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            [
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
              'unknown',
            ],
          ],

          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],

      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-duplicates': 'off',

      'import/no-cycle': [
        'error',
        {
          maxDepth: 10,
        },
      ],

      'import/no-named-as-default': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    name: 'typescript/rules',
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
          prefix: ['E'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'camelCase'],
        },
      ],
    },
  },
  {
    name: 'function-style',
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'prefer-arrow': preferArrowPlugin,
    },
    rules: {
      'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
    },
  },
  {
    name: 'prettier/recommended',
    ...eslintPluginPrettierRecommended,
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
