const headerStartCapital = ({ raw }) => {
  return [
    /^[A-Z]/.test(raw),
    'Commit message must start with a capital letter',
  ];
};

const headerEndPeriod = ({ header }) => {
  return [/\.$/.test(header), 'Commit message must end with a period'];
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always'],
    'header-end-period': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': headerStartCapital,
        'header-end-period': headerEndPeriod,
      },
    },
  ],
};
