
module.exports = {
    title: 'awnsdn_blog', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    themeConfig: {
      logo: 'https://user-images.githubusercontent.com/72076114/188773756-4ee33b98-f235-4a08-b003-0090d75eeeca.jpg', // 로고 이미지
      nav: [
          { text: 'home', link: '/' },
          { text: 'more', link: '/more' },
          { text: 'Contents1', link: '/contents1' },
          { text: 'Contensts2', link: '/contensts2'}
        ],
      sidebar: [
          {
            title: 'Group 1',   // required
            // path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              ['/2022/01', '2022년 01월'],
              ['/more', 'More'],
            ]
          },
          
      ],
    }
  } 
