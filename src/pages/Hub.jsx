import { Link } from 'react-router-dom'

const products = [
  {
    id: 'pimel',
    name: 'PIMEL',
    tag: 'Entreposto de Mel e Cera de Abelha',
    description: 'Mel natural, orgânico e premium com certificação SISBI — venda nacional para supermercados, atacados e indústrias.',
    icon: '🍯',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.12)',
    tags: ['SISBI', 'Mel Orgânico', 'Própolis', 'Pólen'],
    slug: 'pimel',
    stats: [
      { value: 'SISBI', label: 'Certificação Nacional' },
      { value: '6+', label: 'Linhas de Produto' },
      { value: 'Nacional', label: 'Atuação' },
    ]
  },
  {
    id: 'linguica',
    name: 'Linguiça Exata',
    tag: 'Fábrica de Linguiças Artesanais',
    description: 'Linguiças artesanais premium desde 2000. De Anápolis-GO para todo o Centro-Oeste. Supermercados, restaurantes e churrascarias.',
    icon: '🥩',
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.12)',
    tags: ['Artesanal', 'Food Service', 'Atacado'],
    slug: 'linguica-exata',
    stats: [
      { value: 'Desde 2000', label: 'Tradição' },
      { value: '300kg/sem', label: 'Produção Atual' },
      { value: '2.000kg/sem', label: 'Meta de Escala' },
    ]
  },
  {
    id: 'condel',
    name: 'Condel Condutores Elétricos',
    tag: 'Distribuidor de Materiais Elétricos',
    description: 'Castelo Forte, Casa Forte e mais. Preço competitivo, entrega rápida. Depósito próprio em Brasília. 150+ lojas atendidas.',
    icon: '⚡',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.12)',
    tags: ['Castelo Forte', 'Distribuição', 'Brasília'],
    slug: 'condel',
    stats: [
      { value: '150+', label: 'Lojas Atendidas' },
      { value: 'Brasília', label: 'Depósito Próprio' },
      { value: 'R$25k', label: 'Meta/Mês Inicial' },
    ]
  }
]

export default function Hub() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">M</span>
            Marcos Domingos
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato" className="btn btn-primary">Fale Comigo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Representação Comercial<br />de Excelência</h1>
          <p>
            Três operações, um padrão de qualidade. 
            Mel certificado, linguiças artesanais e materiais elétricos — 
            soluções completas para seu negócio no Centro-Oeste e em todo Brasil.
          </p>
          <div className="hero-actions">
            <a href="#produtos" className="btn btn-primary btn-lg">Conhecer Produtos</a>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20saber%20mais" className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="section" id="produtos">
        <div className="container">
          <div className="section-label">Portfólio</div>
          <h2>Produtos e Serviços</h2>
          <p>Três frentes de atuação com qualidade comprovada e atendimento personalizado para cada segmento.</p>
          <div className="card-grid">
            {products.map(p => (
              <div key={p.id} className={`card-product ${p.id}`}>
                <div className="card-icon" style={{ background: p.bgColor }}>{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="subtitle">{p.tag}</div>
                <p>{p.description}</p>
                <div className="card-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <Link to={`/${p.slug}`} className="card-cta">
                  Ver plano completo →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label">Presença</div>
          <h2>Números que Falam</h2>
          <p>Resultados reais de operações que crescem com estratégia e dedicação.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">150+</div>
              <div className="stat-label">Lojas Parceiras</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">Operações Ativas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24+</div>
              <div className="stat-label">Anos de Mercado</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Centro-Oeste</div>
              <div className="stat-label">Base de Atuação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section" id="sobre" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <div className="section-label">Quem é</div>
          <h2>Marcos Domingos</h2>
          <div className="split-layout">
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.7 }}>
                Representante comercial com mais de duas décadas de experiência, 
                Marcos Domingos atua como ponte entre produtores de excelência e 
                o mercado varejista do Centro-Oeste brasileiro.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-tertiary)', lineHeight: 1.7, marginTop: 16 }}>
                Hoje representa três operações complementares — alimentos e materiais elétricos — 
                levando qualidade, preço justo e confiabilidade para supermercados, 
                padarias, restaurantes e lojas de construção em todo o Distrito Federal e Goiás.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
                <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20saber%20mais%20sobre%20seus%20produtos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </div>
            </div>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>WhatsApp Direto</h3>
              <p style={{ fontSize: 14, color: 'var(--text-tertiary)', marginBottom: 12 }}>
                Clique no botão abaixo para falar diretamente com Marcos pelo WhatsApp. 
                Atendimento rápido e personalizado para cada necessidade.
              </p>
              <a
                href="https://wa.me/5561936180578"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                📱 (61) 93618-0578
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Marcos Domingos — Representação Comercial. Todos os direitos reservados.</p>
          <p style={{ marginTop: 8, fontSize: 13 }}>
            PIMEL · Linguiça Exata · Condel Condutores Elétricos
          </p>
        </div>
      </footer>
    </div>
  )
}
