import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: ['simple-import-sort', 'prettier', 'jsx-a11y'],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^\\u0000',
              '^react$',
              '^@?\\w',
              '^@',
              '^',
              '^\\./',
              '^.+\\.(module.css|module.scss|css)$',
              '^.+\\.(gif|png|svg|jpg)$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      'import/first': 'off',
      'import/newline-after-import': 'off',
      'import/no-duplicates': 'off',
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: true,
          tabWidth: 2,
          singleQuote: true,
          endOfLine: 'auto',
          arrowParens: 'always',
          plugins: ['prettier-plugin-tailwindcss'],
        },
        {
          usePrettierrc: false,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  }),
];

export default eslintConfig;
