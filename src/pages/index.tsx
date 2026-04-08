import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const features: FeatureItem[] = [
  {
    icon: '🔗',
    title: 'Conexão Rápida',
    description: 'Conecte seu WhatsApp via QR Code ou Pair Code em poucos minutos.',
    link: '/conexao-com-nitzap',
  },
  {
    icon: '💬',
    title: 'Envio de Mensagens',
    description: 'Envie textos, imagens, vídeos, áudios e documentos via API.',
    link: '/envio-de-mensagem',
  },
  {
    icon: '📊',
    title: 'Dados de Conversas',
    description: 'Acesse metadados, histórico de mensagens e fotos de perfil.',
    link: '/obter-dados-de-conversas',
  },
  {
    icon: '🌎',
    title: 'Webhooks',
    description: 'Receba eventos em tempo real como mensagens e atualizações de conexão.',
    link: '/gerenciamento-de-webhooks',
  },
  {
    icon: '🔡',
    title: 'Contatos e Grupos',
    description: 'Liste contatos salvos e grupos do WhatsApp conectado.',
    link: '/obter-contatos-e-grupos',
  },
  {
    icon: '🔐',
    title: 'Autenticação Master',
    description: 'Acesse funções avançadas com credenciais de administrador.',
    link: '/autenticacao-master',
  },
];

function FeatureCard({icon, title, description, link}: FeatureItem) {
  return (
    <div className="col col--4" style={{marginBottom: '1.5rem'}}>
      <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="feature-card">
          <span className="feature-icon">{icon}</span>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentação da API"
      description="Documentação oficial da API do Nitzap para integração com WhatsApp">
      <header className="hero--nitzap">
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <Heading as="h1">Nitzap API Docs</Heading>
          <p>
            Integre o WhatsApp ao seu sistema com a API oficial do Nitzap.
          </p>
          <div className="hero-buttons">
            <Link
              className="button button--primary button--lg"
              to="/documentacao-da-api">
              Começar agora
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/postman-collection-e-configuracao">
              Configurar Postman
            </Link>
          </div>
        </div>
      </header>

      <main style={{padding: '3rem 0'}}>
        <div className="container">
          <div className="row">
            {features.map((props, idx) => (
              <FeatureCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
