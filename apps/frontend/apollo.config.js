require('dotenv').config({ path:'../../.env' });

console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);

module.exports = {
  client: {
    service: {
      name: "nestjs-graphql",
      url: 'http://localhost:3333/graphql',
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
