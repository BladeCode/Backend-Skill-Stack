const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Backend-Skill-Stack',
  tagline: 'backend skill stack are cool',
  url: 'https://backend.incoder.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BladeCode',
  projectName: 'Backend-Skill-Stack',
  noIndex: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // i18n: {
  //   defaultLocale: 'zh-cn',
  //   locales: ['en', 'zh-cn'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //     },
  //     'zh-cn': {
  //       label: '中文（中国）',
  //       direction: 'ltr',
  //     },
  //   },
  // },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'Backend-Skill-Stack',
        logo: {
          alt: 'Logo',
          src: 'img/backend-dark.svg',
          srcDark: 'img/backend.svg',
        },
        // hideOnScroll: true,
        // style: 'primary',
        items: [
          { to: '/about/index', label: 'About', position: 'left' },
          { type: 'doc', label: 'Java', docId: 'java/intro', position: 'left' },
          {
            type: 'dropdown',
            label: 'Spring',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'SpringFramework',
                docId: 'spring/framework/index',
              },
              {
                type: 'doc',
                label: 'SpringMVC',
                docId: 'spring/mvc/index',
              },
              {
                type: 'doc',
                label: 'SpringBoot',
                docId: 'spring/boot/index',
              },
              {
                type: 'doc',
                label: 'SpringCloud',
                docId: 'spring/cloud/index',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'DataBase',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'MySQL',
                docId: 'database/mysql/index',
              },
              {
                type: 'doc',
                label: 'Redis',
                docId: 'database/redis/index',
              },
              {
                type: 'doc',
                label: 'TIDB',
                docId: 'database/tidb/index',
              },
              {
                type: 'doc',
                label: 'Cassandra',
                docId: 'database/cassandra/index',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Middleware',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'ES',
                docId: 'middleware/es/index',
              },
              {
                type: 'doc',
                label: 'MQ',
                docId: 'middleware/mq/index',
              },
              {
                type: 'doc',
                label: 'Kafka',
                docId: 'middleware/kafka/index',
              },
              {
                type: 'doc',
                label: 'Netty',
                docId: 'middleware/netty/index',
              },
              {
                type: 'doc',
                label: 'Dubbo',
                docId: 'middleware/dubbo/index',
              },
              {
                type: 'doc',
                label: 'Nacos',
                docId: 'middleware/nacos/index',
              },
              {
                type: 'doc',
                label: 'Apllo',
                docId: 'middleware/apllo/index',
              },
              {
                type: 'doc',
                label: 'Sentinel',
                docId: 'middleware/sentinel/index',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'DevOps',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Linux',
                docId: 'devops/linux/index',
              },
              {
                type: 'doc',
                label: 'Docker',
                docId: 'devops/docker/index',
              },
              {
                type: 'doc',
                label: 'CI/CD',
                docId: 'devops/ci/index',
              },
              {
                type: 'doc',
                label: 'K8s',
                docId: 'devops/k8s/index',
              },
              {
                type: 'doc',
                label: 'Test',
                docId: 'devops/test/index',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'General',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Algorithm',
                docId: 'general/algorithm/index',
              },
              {
                type: 'doc',
                label: 'Data Structure',
                docId: 'general/data-structure/index',
              },
              {
                type: 'doc',
                label: 'Network',
                docId: 'general/network/index',
              },
              {
                type: 'doc',
                label: 'DDD',
                docId: 'general/ddd/index',
              },
              {
                type: 'doc',
                label: 'UML',
                docId: 'general/uml/index',
              },
              {
                type: 'doc',
                label: 'Git',
                docId: 'general/git/index',
              },
              {
                type: 'doc',
                label: 'Design Pattern',
                docId: 'general/design-pattern/index',
              },
            ],
          },
          { to: '/blog', label: 'Milestones', position: 'left' },

          {
            type: 'search',
            position: 'right',
          },

          // language change
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://my-site.com/help-us-translate',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       to: '/versions',
          //       label: 'All versions',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/BladeCode/Backend-Skill-Stack',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Isseus',
                href: 'https://github.com/BladeCode/Backend-Skill-Stack/issues',
              },
              {
                label: 'Slack',
                href: 'https://incoder.slack.com',
              },
            ],
          },
          {
            title: 'Thanks',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Github-Pages',
                href: 'https://docs.github.com/en/pages',
              },
              {
                label: 'Gitee-Pages',
                href: 'https://gitee.com/help/articles/4136',
              },
              {
                label: 'Github Actions',
                href: 'https://docs.github.com/en/actions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://incoder.org',
              },
              {
                label: 'IncoderApp',
                href: 'https://incoder.app',
              },
              {
                label: 'Mobile-Skill-Stack',
                href: 'https://mobile.incoder.org',
              },
            ],
          },
        ],
        logo: {
          alt: 'Backend Logo',
          src: 'img/backend.svg',
          href: 'https://backend.incoder.org',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Jerry xu, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    ['@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebarsAbout.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    ['@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ]
});
