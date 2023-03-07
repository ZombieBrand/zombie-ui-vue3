# Installation

## Requirements

`vue` version >=`3.2.0`

## Installation


:::code-group
```bash [Npm]
npm install --save zombie-ui-vue3
```

```bash [Yarn]
yarn add zombie-ui-vue3
```
:::

## Global config

see: demo --> `main.js`

## demo

```vue App.vue
<template>
  <div>{{ hello }}</div>
</template>

<script setup>
import { ref } from 'vue';

const hello = ref('Hello World!');
</script>
```

```js /src/main.js [active]
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```
:::
