import DefaultTheme from "vitepress/theme";
import ZombieUI from "../../../src/entry";
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(ZombieUI);
  },
};
