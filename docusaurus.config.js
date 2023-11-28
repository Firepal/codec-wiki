// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Codec Wiki',
  tagline: 'Your Guide to All Things Encoding',
  favicon: 'img/favicon.svg',
  // analytics
  scripts: [{src: 'https://analytics.x266.mov/js/script.js', defer: true, 'data-domain': 'wiki.x266.mov'}],

  // preload fonts
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter.var.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Mona-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Monaspace-Neon.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  // Set the production url of your site here
  url: 'https://wiki.x266.mov',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'codec-wiki', // Usually your repo name.
  organizationName: 'av1-community-contributors', // Usually your GitHub org/user name.
  // deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/av1-community-contributors/codec-wiki/tree/main',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/codec-wiki-social-card.webp',
      navbar: {
      items: [
        // ...
        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
      ],
        title: 'Codec Wiki',
        logo: {
          alt: 'AV1 "Stonks" logo',
          src: 'img/favicon.svg',
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              {
                label: 'Prologue',
                to: '/docs/introduction/prologue',
              },
              {
                label: 'AV1',
                to: '/docs/video/AV1',
              },
            ],
          },
          {
            title: 'Filtering',
            items: [
              {
                label: 'Vapoursynth',
                href: '/docs/filtering/Vapoursynth',
              },
              {
                label: 'Deband',
                href: '/docs/filtering/deband',
              },
              {
                label: 'Denoise',
                href: '/docs/filtering/denoise',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contribute',
                href: 'https://github.com/av1-community-contributors/codec-wiki/tree/main',
              },
              {
                label: 'Terms of Use',
                href: '/docs/terms-of-use',
              },
              {
                label: 'Privacy Policy',
                href: 'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gianni Rosato & contributors. Content licensed under CC BY-SA 4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

export default {
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    },
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
  },
};

module.exports = config;
