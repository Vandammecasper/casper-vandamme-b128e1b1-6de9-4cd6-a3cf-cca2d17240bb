import { eslintConfig } from 'eslint-config-ballistix';

export default [
  ...eslintConfig,
  {
    rules: {
      'local/no-string-classname': 'off',
    },
  },
  {
    ignores: ['node_modules', 'build', '.next', '.vercel', '.vscode', '.yarn', '.storybook', 'storybook-static'],
  },
];
