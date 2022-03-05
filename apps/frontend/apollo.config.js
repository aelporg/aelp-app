require('dotenv').config({ path: '../../.env' });


module.exports = {
  client: {
    service: {
      name: "nestjs-graphql",
      url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
    },
    tagName: 'gql',
    includes: [
      'components/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'graphql/**/*.{ts,tsx}',
      'utils/**/*.{ts,tsx}',
      'modules/**/*.{ts,tsx}',
    ],
    target: 'typescript',
  },
};
