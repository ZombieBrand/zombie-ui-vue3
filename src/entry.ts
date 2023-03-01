import { App } from "vue";
import JSXButton from "./components/JSXButton";
import './style.css'
// 导出单独组件
export { JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(JSXButton.name, JSXButton);
  },
};