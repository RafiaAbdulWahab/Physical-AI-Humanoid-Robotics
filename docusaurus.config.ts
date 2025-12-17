import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'An AI-Native Textbook with an Integrated RAG Chatbot',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://APNA_USERNAME_LIKHEIN.github.io', 
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Physical-AI-Humanoid-Robotics/',

  // GitHub pages deployment config.
  organizationName: 'APNA_USERNAME_LIKHEIN', // Apna GitHub Username
  projectName: 'Physical-AI-Humanoid-Robotics', // Aapki Repo ka naam

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          // YAHAN HUMNE AUTHOR FILE KA RASTA BATAYA HAI
          authorsMapPath: '../authors.yml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // NAVBAR YAHAN SE SHURU HOTA HAI
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        // YE RAHI NAYI "BLOG" WALI LINE JO HUMNE ADD KI HAI
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
      ],
    },
    // NAVBAR YAHAN KHATAM HOTA HAI
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Textbook',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RafiaAbdulWahab/Physical-AI-Humanoid-Robotics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;