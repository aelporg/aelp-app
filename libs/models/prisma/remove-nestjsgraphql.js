const fs = require('fs/promises');
const path = require('path')

async function main() {
  const schemaPath = path.join(__dirname, 'schema.prisma')
  const schema = (await fs.readFile(schemaPath)).toString()
  const regex = /generator\snestgraphql\s{\n.*\n.*\n.*\n}/g
  const newSchema = schema.replace(regex, '')
  await fs.writeFile(schemaPath, newSchema)
}

main()
