module.exports = {
  siteMetadata: {
    title: `Wontae Jeong`,
    name: `Wontae Jeong`,
    siteUrl: `https://wontaezia.github.io`,
    description: `프론트엔드 개발자 정원태 블로그입니다.`,
    hero: {
      heading: `안녕하세요,<br>
      정원태입니다.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/wontaezia`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/wontaezia`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UC6xNhtj5VHgxvAnp0x8tmOw?view_as=subscriber`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
