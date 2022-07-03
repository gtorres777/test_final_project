module.exports = {
  env: {
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-use-before-define': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
