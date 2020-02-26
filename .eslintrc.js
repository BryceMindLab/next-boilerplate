module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [ 'react', '@typescript-eslint', 'react-hooks' ],
	rules: {
		'@typescript-eslint/no-explicit-any': 'on',
		'@typescript-eslint/no-parameter-properties': 'on',
		'@typescript-eslint/no-unused-vars': [
			'on',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^ignored?$' },
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
