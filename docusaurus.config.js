const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CloudQuery Docs',
  tagline: 'the open-source cloud asset inventory powered by SQL',
  url: 'https://docs.cloudquery.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudquery', // Usually your GitHub org/user name.
  projectName: 'cq-docs', // Usually your repo name.
  themeConfig: {
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-48CC3FJ195',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
    },
    navbar: {
      title: 'CloudQuery Docs',
      logo: {
        alt: 'CloudQuery Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {to: 'https://cloudquery.io', label: 'Home', position: 'right'},
        {to: 'https://cloudquery.io', label: 'Hub', position: 'right'},
        {to: 'https://cloudquery.io/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/cloudquery/cloudquery',
          label: 'GitHub',
          position: 'right',
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
              label: 'Discord',
              href: 'https://cloudquery.io/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudquery',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/cloudqueryio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://cloudquery.io/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloudquery/cloudquery',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudQuery, Inc.`,
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
      additionalLanguages: ['hcl', 'powershell'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cloudquery/docs/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/cloudquery/docs/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
