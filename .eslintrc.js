module.exports = {
  extends: ['proste/reactTS', 'proste/vitest', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['xyhxx'],
  rules: {
    'xyhxx/if-line': 1,
    'xyhxx/object-pattern-newline': 1,
    'react/jsx-one-expression-per-line': 0,
  },
};
