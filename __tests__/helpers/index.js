import { faker } from '@faker-js/faker'

faker.seed(59)

export const getSerializer = (
  getSerializerTypeFunc,
  serializeFunc,
  parseFunc,
) => ({
  getSerializerType: getSerializerTypeFunc,
  serialize: serializeFunc,
  parse: parseFunc,
})

export { faker }
