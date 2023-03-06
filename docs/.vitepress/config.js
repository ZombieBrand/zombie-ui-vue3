import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

const sidebar =  [
  { text: "快速开始", link: "/guide/" },
  {
    text: "通用",
    items: [{ text: "Button 按钮", link: "/components/button/" }],
  },
  { text: "导航" },
  { text: "反馈" },
  { text: "数据录入" },
  { text: "数据展示" },
  { text: "布局" },
]

export default defineConfig({
  lang: "en-US",
  title: "Zombie UI",
  description: "基于Vite + Vue3 的UI组件库",

  lastUpdated: true,
  cleanUrls: true,

  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  themeConfig: {
    nav: nav(),

    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ZombieBrand/zombie-ui-vue3/tree/main",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Zombie Brand",
    },
  },
});

function nav() {
  return [
    { text: "文档", link: "/guide/index", activeMatch: "/guide/" },
    {
      text: "Config Reference",
      link: "/config/introduction",
      activeMatch: "/config/",
    },
  ];
}
