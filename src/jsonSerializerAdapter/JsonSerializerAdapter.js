/** @typedef SerializerHandler */

export class JsonSerializerAdapter {
  #jsonSerializerCore

  constructor(jsonSerializerCore) {
    this.#jsonSerializerCore = jsonSerializerCore
  }

  /**
   * Returns an object that contains the serializers added to JsonSerializer
   * object. The keys are obtained from serializer.getSerializerType method and
   * the values are the Serializer objects.
   *
   * @returns {object} Object that contains the serializers added to
   *   JsonSerializer object.
   */
  getSerializers() {
    return this.#jsonSerializerCore.getSerializers()
  }

  /**
   * Adds serializers through the serializersInstaller and to update the
   * JsonSerializer object.
   *
   * @param {object} serializersInstaller An object that adds serializers using
   *   the install method.
   * @param {(
   *   serializerHandler: {
   *     getSerializers: () => object
   *     addSerializer: (serializer: object) => void
   *   },
   *   installOptions: object,
   * ) => void} serializersInstaller.install
   *   The method used to add serializers to JsonSerializer object.
   * @param {object} [installOptions] An object that contains the install
   *   options.
   */
  installSerializersAndRefreshJsonSerializer(
    serializersInstaller,
    installOptions = {},
  ) {
    this.#jsonSerializerCore.installSerializersAndRefreshJsonSerializer(
      serializersInstaller,
      installOptions,
    )
  }

  /**
   * Adds a Serializer and to update the JsonSerializer object.
   *
   * @param {object} serializer An object used to serialize and unserialize
   *   data.
   * @param {() => string} serializer.getSerializerType An function that returns
   *   the type of serializer.
   * @param {(unserializedData: any) => object} serializer.serialize An function
   *   that serializes data.
   * @param {(serializedData: string) => any} serializer.parse An function that
   *   unserializes data.
   */
  addSerializerAndRefreshJsonSerializer(serializer) {
    this.#jsonSerializerCore.addSerializerAndRefreshJsonSerializer(serializer)
  }

  /**
   * Serializes the data.
   *
   * @param {any} value The data to serialize.
   * @param {object} options The serialize options used by the
   *   jsonSerializer.serialize method.
   * @param {string | number} [options.space] Adds indentation, white space, and
   *   line break characters to the return-value JSON text to make it easier to
   *   read.
   * @returns {string} JSON string that contains the serialized data.
   */
  serialize(value, options = {}) {
    const { space } = options
    return this.#jsonSerializerCore.serialize(value, space)
  }

  /**
   * Unserializes the data,
   *
   * @param {string} value The data to unserialize.
   * @param {object} options The parse options used by the jsonSerializer.parse
   *   method.
   * @returns {any} The unserialized data.
   */
  parse(value, options = {}) {
    return this.#jsonSerializerCore.parse(value)
  }
}
