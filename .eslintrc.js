module.exports = {
  extends: ['proste/reactTS', 'proste/vitest'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['xyhxx'],
  rules: {
    'xyhxx/if-line': 1,
    'xyhxx/object-pattern-newline': 1,
  },
};
