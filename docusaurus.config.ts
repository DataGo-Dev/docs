import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nitzap API Docs',
  tagline: 'Documentação oficial da API do Nitzap para integração com WhatsApp',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://nitzap-docs.datago.com.br',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nitzap API Docs',
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Começar',
              to: '/docs/documentacao-da-api',
            },
            {
              label: 'Conexão',
              to: '/docs/conexao-com-nitzap',
            },
            {
              label: 'Envio de Mensagem',
              to: '/docs/envio-de-mensagem',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Webhooks',
              to: '/docs/gerenciamento-de-webhooks',
            },
            {
              label: 'Contatos e Grupos',
              to: '/docs/obter-contatos-e-grupos',
            },
            {
              label: 'Autenticação Master',
              to: '/docs/autenticacao-master',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'Datago - Suporte Nitzap',
              href: 'https://wa.me/5527996015929',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datago · Nitzap`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
