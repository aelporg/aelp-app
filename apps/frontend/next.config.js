// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.tsx',
    'api.ts',
    'api.jsx',
    'api.js',
  ],

  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/feed',
        permanent: true,
      },
    ];
  },
};

module.exports = withNx(nextConfig);
