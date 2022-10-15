module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=0',
    () => 'tsc-files --noEmit',
  ],
};
