module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', 'node_modules', 'vit-env.d.ts', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'plugin:react/jsx-runtime', 'jest'],
  overrides: [
    {
			// enable eslint-plugin-testing-library rules or preset only for matching testing files 
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'max-lines-per-function': ['error', 40],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, -1, 2],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/prefer-default-export': 'off', // Otherwise, it will conflict with feature-sliced-design
    'jest/no-focused-tests': 'off',

    // 'testing-library/await-async-queries': 'error',
    // 'testing-library/no-await-sync-queries': 'error',
    // 'testing-library/no-debugging-utils': 'warn',
    // 'testing-library/no-dom-import': 'off',
  },
};
