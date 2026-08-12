module.exports = {
  extends: ['@commitlint/config-conventional'],
  commentChar: '#',
  ignores: [(commit) => commit.trim() === ''],
  parserPreset: {
    parserOpts: {
      commentChar: '#',
    },
  },
};