import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		rules: {
			'space-before-blocks': [2, 'always'],
			'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
			'object-shorthand': [2, 'always'],
			'no-const-assign': 2,
			'no-unused-vars': 2,
			'no-class-assign': 2,
			'no-this-before-super': 2,
			'no-var': 2,
			'one-var': [2, 'never'],
			'prefer-arrow-callback': 2,
			'prefer-const': 2,
			'no-cond-assign': 0,
			'no-constant-condition': 0,
			'no-console': [2, { allow: ['warn', 'error'] }],
		},
		languageOptions: {
			globals: {
				DEBUG: true,
				process: true,
				Buffer: true,
				globalThis: true,
				console: true,
			},
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
		},
	},
];
b"I transformed a bug into a feature. Once you learn how, youll never forget it"b"I understand that its an antipattern, but its convenient."fix that damn sign!!!Programming the flux capacitorHandled a particular error.Whatever.Ugh. Bad rebase.try our sister game minceraft!Never gonna say goodbyeI just evaluated random code in my consoleinclude shitVersion control is awfullast minute fixes.Never before had a small typo like this one caused so much damage.LAST time, opatut, /dev/urandom IS NOT a variable name generator...COMMIT ALL THE FILES!that coulda been badMOAR BIFURCATIONfooDerp. Fix missing constant post renameUgh. Bad rebase.Landed.ffswhooooooooooooooooooooooooooob"Chuck Norris Emailed Me This Patch... Im Not Going To Question It"Friday 5pmb"Ill explain when youre older!"