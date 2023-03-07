import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { version } from '../../../package.json';
import path from 'path';

export default defineConfig({
  lang: 'en-US',
  title: 'zombie-ui-vue3',
  description: 'zombie-ui-vue3 docs',
  lastUpdated: true,


  themeConfig: {
    nav: nav(),

    sidebar: sidebarConfig(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZombieBrand/zombie-ui-vue3' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present jerrywu001'
    },
  },

  vite: {
    resolve: {
      alias: {
        'zombie-ui-vue3': `${path.resolve(__dirname, '../../../src')}`,
      },
    },
    plugins: [
      vueJsx(),
    ],
  },
})

function nav() {
  return [
    { text: 'Get Started', link: '/get-started/introduction', activeMatch: '/get-started/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/ZombieBrand/zombie-ui-vue3/releases'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Get Started',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/get-started/introduction' },
      ]
    },
  ];
}
