module.exports = {
  default: {
    require: [
      'e2e/support/**/*.ts',
      'e2e/features/step-definitions/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['e2e/features/**/*.feature']
  }
};