module.exports = {
  client: {
    service: {
      localSchemaFile: '../../dist/apps/api/schema.gql',
    },
    tagName: 'gql',
    includes: [
      'components/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'utils/**/*.{ts,tsx}',
      'modules/**/*.{ts,tsx}',
    ],
    target: 'typescript',
  },
};
