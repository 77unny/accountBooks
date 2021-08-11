const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  babel: {
    plugins: [
      [
        '@emotion',
        {
          sourceMap: true,
          autoLabel: 'dev-only',
          labelFormat: 'baekco__[local]',
          cssPropOptimization: true,
        },
      ],
    ],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
      },
    },
  },
};