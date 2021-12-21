/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
       {
        type: 'category',
        label: 'Fetch',
        items: [
          'cli/fetch/overview',
          'cli/fetch/configuration'
        ],
       },
       {
        type: 'category',
        label: 'History',
        items: [
          'cli/history/overview',
          'cli/history/configuration',
        ],
       },
       {
        type: 'category',
        label: 'Policy',
        items: [
          'cli/policy/overview',
          'cli/policy/language',
          'cli/policy/configuration'
        ],
       }, 
       {
        type: 'category',
        label: 'Drift',
        items: [
          'cli/drift/overview',
          'cli/drift/configuration'
        ],
       },
       {
        type: 'category',
        label: 'Configuration',
        items: [
          'cli/configuration/overview',
          'cli/configuration/providers'
        ]
       },
       {
        type: 'category',
        label: 'Migrations',
        items: [
          'cli/migrations/overview',
        ],
       },
       {
        type: 'category',
        label: 'Commands',
        items: [
          'cli/commands/completion',
          'cli/commands/drift',
          'cli/commands/drift-scan',
          'cli/commands/fetch',
          'cli/commands/init',
          'cli/commands/options',
          'cli/commands/policy',
          'cli/commands/policy-download',
          'cli/commands/policy-run',
          'cli/commands/provider',
          'cli/commands/provider-download',
          'cli/commands/provider-build-schema',
          'cli/commands/provider-upgrade',
          'cli/commands/provider-downgrade',
          'cli/commands/provider-drop',
        ]
       },
       {
         type: 'doc',
         label: 'Docker',
         id: 'cli/docker'
       },
       {
         type: 'doc',
         label: 'Telemetry',
         id: 'cli/telemetry'
       }
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: ['deployment/helm-chart'],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/architecture',
        'developers/debugging',
        'developers/developing-new-provider',
        'developers/migrations',
        'developers/sdk/overview',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/creating-new-provider'
      ],
    },
    {
      type: 'doc',
      label: 'Best Practices',
      id: 'best-practices',
    },
    {
      type: 'doc',
      label: 'Security',
      id: 'security',
    },
    {
      type: 'doc',
      label: 'Troubleshooting',
      id: 'troubleshooting',
    },
    {
      type: 'category',
      label: 'CloudQuery vs Others',
      items: [
        'cq_vs_others/overview',
        'cq_vs_others/aws_config',
        'cq_vs_others/google_cloud_asset_inventory'
      ],
    },
    {
      type: 'doc',
      label: 'Videos & Blogs',
      id: 'videos-and-blogs',
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'glossary',
    },
  ],
  
};
