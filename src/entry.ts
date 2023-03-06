import { App } from "vue";
import ZButton from "./button";
import "./style.css";

// 导出单独组件
export { ZButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(ZButton.name, ZButton);
  },
};
