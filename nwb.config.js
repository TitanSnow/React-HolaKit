module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  babel: {
    plugins: 'babel-plugin-emotion',
    env: {
      targets: {
        browsers: 'firefox >= 57, chrome >= 63, opera >= 50, safari >= 11.1',
      },
    },
    stage: 3,
  },
}
