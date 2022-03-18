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
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/getting-started-with-aws',
        'getting-started/getting-started-with-gcp',
        'getting-started/getting-started-with-azure',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Writing Your Own Policies',
          items: [
            'tutorials/policies/policies-overview',
            'tutorials/policies/writing-your-first-policy',
            'tutorials/policies/views',
            'tutorials/policies/subpolicies',
          ],
        },
        {
          type: 'doc',
          label: 'Fetching From Multiple AWS Accounts With AssumeRole',
          id: 'tutorials/assume_role',
        },
        
      ],
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
          'cli/policy/sources',
          'cli/policy/testing',
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
       },
       {
        type: 'doc',
        label: 'Rate Limiting',
        id: 'cli/rate_limiting'
      }
      ],
    },
      {
          type: 'category',
          label: 'Configuration',
          items: [
              'configuration/overview',
              'configuration/environment-variable-substitution',
              'configuration/file-backed-variable-values',
              'configuration/providers'
          ]
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
        {
          type: 'doc',
          label: 'Debugging a Provider',
          id: 'developers/debugging'
        },
        'developers/developing-new-provider',
        {
            type: 'category',
            label: 'SDK',
            items: [
                'developers/sdk/overview',
                {
                    type: 'category',
                    label: 'Provider',
                    items: [
                        'developers/sdk/provider/overview',
                        'developers/sdk/provider/configuration',
                        'developers/sdk/provider/error-classifier',
                    ],
                },
                {
                    type: 'category',
                    label: 'Table',
                    items: [
                        'developers/sdk/table/overview',
                        'developers/sdk/table/column-types',
                        'developers/sdk/table/primary-key',
                        'developers/sdk/table/multiplexer-and-deletefilter',
                        'developers/sdk/table/fetch-resolvers',
                        'developers/sdk/table/column-resolvers',
                    ],
                },
                {
                    type: 'category',
                    label: 'Migrations',
                    items: [
                        'developers/sdk/migrations/overview',
                        'developers/sdk/migrations/migration-tool',
                        'developers/sdk/migrations/generating-migrations',
                        'developers/sdk/migrations/testing',
                    ],
                },
                'developers/sdk/testing',
            ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'developers/tutorials/creating-new-provider'
          ]
        },
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
      label: 'FAQ',
      id: 'faq'
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
