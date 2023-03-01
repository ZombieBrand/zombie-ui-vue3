import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'Zombie UI',
  description: '基于Vite + Vue3 的UI组件库',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZombieBrand/zombie-ui-vue3/tree/main' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Zombie Brand'
    },
  }
})

function nav() {
  return [
    { text: '文档', link: '/guide/index', activeMatch: '/guide/' },
    {
      text: 'Config Reference',
      link: '/config/introduction',
      activeMatch: '/config/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍', 
      link: '/guide/',
    },
    {
      text: 'components',
      collapsed: false,
      items: [
        { text: 'Switch', link: '/guide/components/switch' },
        { text: 'Button', link: '/guide/components/button' },
        { text: 'Dialog', link: '/guide/components/dialog' },
        { text: 'Tabs', link: '/guide/components/tabs' },
      ]
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config Reference',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Config', link: '/config/app-config' },
        { text: 'Default Theme Config', link: '/config/theme-config' },
        { text: 'Frontmatter Config', link: '/config/frontmatter-config' }
      ]
    }
  ]
}