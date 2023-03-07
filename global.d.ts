import '@vue/runtime-core';
import {
  Demo,
  JsxDemo,
} from 'zombie-ui-vue3';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Demo: typeof Demo;
    JsxDemo: typeof JsxDemo;
  }
}

export {};
