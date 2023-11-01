import { JsonSerializerFactory } from '@cljimenez/json-serializer-core'
import { baseSerializersInstaller } from '@cljimenez/json-serializer-base-serializers'
import { JsonSerializerAdapter } from './jsonSerializerAdapter/JsonSerializerAdapter'

/**
 * Creates a new instance of JsonSerializerAdapter.
 *
 * @param {object} options The options used to configure the installer created
 *   by json-serializer-base-serializers
 * @param {boolean} [options.includeFunctionSerializer] An Boolean that
 *   indicates if the FunctionSerializer must be included. By default is false.
 * @returns {JsonSerializerAdapter} A new JsonSerializerAdapter object.
 */
export function createJsonSerializerAdapter(options = {}) {
  const jsonSerializerCore = JsonSerializerFactory.createJsonSerializer()

  jsonSerializerCore.installSerializersAndRefreshJsonSerializer(
    baseSerializersInstaller,
    options,
  )

  return new JsonSerializerAdapter(jsonSerializerCore)
}
