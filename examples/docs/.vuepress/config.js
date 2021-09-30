module.exports = {
    title: 'Vito-Ui',
    description: 'ui库',
    dest: './build',
    port: 8888,
    themeConfig: {
        nav: [{
            text:'主页',
            link: '/'
        }],
        sidebar: {
            '/components/': [{
                collapsable: true,
                children: [
                    'button'
                ]
            }]
        }
    }
  }