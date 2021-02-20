const path = require('path')

module.exports = {
  lang: 'en-US',
  title: 'Vue Theme',
  description: 'The design system for Vue.js.',

  alias: {
    'vue-theme': path.join(__dirname, '../../src')
  },

  themeConfig: {
    logo: '/img/logo-vue.svg',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    }
  }
}
