{
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
