import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const organizationName = "StijnTB";
const projectName = "PWS-2526-WordFeudBot";
/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'WordFeud Bot',
  tagline: 'Play Wordfeud against me',
  url: 'https://'+organizationName+'.github.io',
  baseUrl: '/'+projectName+'/',
  onBrokenLinks: "throw",
  // onBrokenMarkdownLinks: "throw",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StijnTB', // Usually your GitHub org/user name.


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import(‘@docusaurus/preset-classic’).Options} */
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/'+organizationName+'/WordFeudBot-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'WordFeud Bot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Get Started',
        },
        {
          href: '/docs/main_project_info/introduction_page', 
          label: 'Main Project',
          position: 'left'
        },
        {
          href: '/docs/additional_project_info', 
          label: 'Codebase', 
          position: 'left'
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/'+organizationName+'/'+projectName,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
