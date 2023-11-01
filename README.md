<h1 align="center">Welcome to @cljimenez/json-serializer-vue-localstorage-reactive 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/cristopher1/json-serializer-vue-localstorage-reactive#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/cristopher1/json-serializer-vue-localstorage-reactive/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/cristopher1/json-serializer-vue-localstorage-reactive/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/cristopher1/json-serializer-vue-localstorage-reactive" />
  </a>
</p>

> Wrapper to use @cljimenez/json-serializer-core and @cljimenez/json-serializer-base-serializers with @cljimenez/vue-localstorage-reactive

### 🏠 [Homepage](https://github.com/cristopher1/json-serializer-vue-localstorage-reactive#readme)

### [Index](#index)

- [Install](#install)
- [How to use?](#how-to-use?)
  - [Obtain the JsonSerializerAdapter object](#obtain-json-serializer-adapter-object)
  - [About the JsonSerializerAdapter methods](#json-serializer-adapter-interface)
  - [json-serializer-adapter-with-reactive-local-storage](#How to use @cljimenez/json-serializer-vue-localstorage-reactive with @cljimenez/vue-localstorage-reactive)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)

## Install

```sh
@cljimenez/json-serializer-vue-localstorage-reactive
```

## <a id="how-to-use?"></a> How to use?

- ### <a id="obtain-json-serializer-adapter-object"></a> Obtain the JsonSerializerAdapter object

  The JsonSerializerAdapter is an object used to wrap the @cljimenez/json-serializer-core to be used directly by @cljimenez/vue-localstorage-reactive, also it adds the serializers provided by @cljimenez/json-serializer-base-serializers. You can use this package with @cljimenez/vue-localstorage-reactive or with other elements that requires the parse and serialize methods described in [About the JsonSerializerAdapter methods](#json-serializer-adapter-interface). You must use the `createJsonSerializerAdapter` function to create a JsonSerializerAdapter object.

  Example:

  ```js
  import { createJsonSerializerAdapter } from '@cljimenez/json-serializer-vue-localstorage-reactive'

  // If you want to use the function serializer.
  const JsonSerializerAdapterWithFunctionSerializer = createJsonSerializerAdapter({ includeFunctionSerializer: true })

  // If you do not want to use the function serializer
  const JsonSerializerAdapterWithoutFunctionSerializer = createJsonSerializerAdapter()
  ```
- ### <a id="json-serializer-adapter-interface"></a> About the JsonSerializerAdapter methods

  The JsonSerializerAdapter object provides the following methods:

  - `(method)` getSerializers(void): Returns an object that contains the serializers added to JsonSerializer object. The keys are obtained from serializer.getSerializerType method and the values are the Serializer objects.
    
  - `(method)` installSerializersAndRefreshJsonSerializer(serializersInstaller: SerializerInstaller, installOptions = {}): Adds serializers through the serializersInstaller and to update the JsonSerializer object.
    
  - `(method)` addSerializerAndRefreshJsonSerializer(serializer): Adds a Serializer and to update the JsonSerializer object.
    
  - `(method)` serialize(value, options = {}): Serializes the data. The optional options parameter contains some configuration used by the serialize algorithm.
    
  - `(method)` parse(value, options = {}): Unserializes the data serialized by serialize method. The optional options parameter contains some configuration used by the parse algorithm.

- ### <a id="json-serializer-adapter-with-reactive-local-storage"></a> How to use @cljimenez/json-serializer-vue-localstorage-reactive with @cljimenez/vue-localstorage-reactive

  First you must install [@cljimenez/vue-localstorage-reactive](https://www.npmjs.com/package/@cljimenez/vue-localstorage-reactive) using:

  ```sh
  npm install @cljimenez/vue-localstorage-reactive
  ```

  Then, you can use it through the provide and inject functions.

  Example:

  ```js
  // main.js
  import { createJsonSerializerAdapter } from '@cljimenez/json-serializer-vue-localstorage-reactive'
  import { createReactiveLocalStorageInstaller } from '@cljimenez/vue-localstorage-reactive'
  import { createApp } from 'vue'
  import App from './App.vue'

  const app = createApp(App)

  const serializer = createJsonSerializerAdapter({ includeFunctionSerializer: true })

  app.use(createReactiveLocalStorageInstaller(), { serializer })

  app.provide('reactiveLocalStorage', app.config.globalProperties.$reactiveLocalStorage)

  app.mount('#app')

  // App.vue
  <script setup>
  import { inject } from 'vue';

  const reactiveLocalStorage = inject('reactiveLocalStorage')

  const helloWord = reactiveLocalStorage.getItem('helloWord')

  if (helloWord) {
    console.log('from localStorage')
    helloWord()
  }

  reactiveLocalStorage.setItem('helloWord', () => {
    console.log('hello word')
    console.log('using reactiveLocalStorage and jsonSerializerAdapter')
  })

  </script>

  <template>
    <h1></h1>
  </template>
  ```

## <a id="author"></a> Author

👤 **Cristopher Jiménez**

* Github: [@cristopher1](https://github.com/cristopher1)

## <a id="contributing"></a> 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/cristopher1/json-serializer-vue-localstorage-reactive/issues).

## <a id="license"></a> 📝 License

Copyright © 2023 [Cristopher Jiménez](https://github.com/cristopher1).<br />
This project is [MIT](https://github.com/cristopher1/json-serializer-vue-localstorage-reactive/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
