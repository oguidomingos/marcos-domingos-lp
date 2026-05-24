import { Link } from 'react-router-dom'

const products = [
  {
    id: 'pimel',
    name: 'PIMEL',
    tag: '🍯 Mel com Certificação SISBI',
    description: 'O mel que roda o Brasil. Certificação nacional, 8 linhas de produto, estoque pronto. Supermercados, atacados e indústrias.',
    icon: '🍯',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.12)',
    tags: ['SISBI', 'Venda Nacional', 'Mel Orgânico'],
    slug: 'pimel',
  },
  {
    id: 'linguica',
    name: 'Linguiça Exata',
    tag: '🥩 Artesanal Premium desde 2000',
    description: 'Linguiça artesanal de Anápolis-GO. Pacotes 5kg, bandejas 500g. Para supermercados, restaurantes e churrascarias.',
    icon: '🥩',
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.12)',
    tags: ['Artesanal', 'Food Service', 'Atacado'],
    slug: 'linguica-exata',
  },
  {
    id: 'condel',
    name: 'Condel Condutores Elétricos',
    tag: '⚡ Materiais Elétricos com Preço Justo',
    description: 'Distribuição com depósito próprio em Brasília. 150+ lojas atendidas. Preço competitivo, entrega rápida.',
    icon: '⚡',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.12)',
    tags: ['Castelo Forte', 'INMETRO', 'Entrega Rápida'],
    slug: 'condel',
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
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 13 }}>Fale Comigo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Representação Comercial<br />de Ponta a Ponta</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 600, margin: '0 auto 40px' }}>
            Três operações. Um compromisso: qualidade que vende, preço que fecha e entrega que cumpre.
          </p>
          <div className="hero-actions">
            <a href="#produtos" className="btn btn-primary btn-lg">Ver Produtos</a>
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
          <h2>Nossos Produtos</h2>
          <p>Três frentes de atuação. Cada uma com qualidade e preço que fazem a diferença no seu negócio.</p>
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
                  Ver detalhes →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section" id="sobre" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <div className="section-label">Quem é</div>
          <h2>Marcos Domingos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.7 }}>
                Representante comercial com mais de 20 anos de estrada. 
                Marcos Domingos conecta produtores de excelência ao mercado 
                varejista do Centro-Oeste — e agora de todo Brasil.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-tertiary)', lineHeight: 1.7, marginTop: 16 }}>
                Três operações complementares (alimentos + materiais elétricos), 
                uma filosofia: levar o melhor custo-benefício para cada cliente.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
                <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20saber%20mais%20sobre%20seus%20produtos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </div>
            </div>
            <div id="contato" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)', padding: 32,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>Fale Direto</h3>
              <p style={{ fontSize: 14, color: 'var(--text-tertiary)', marginBottom: 16 }}>
                Clique e chame no WhatsApp. Resposta rápida, proposta na hora.
              </p>
              <a href="https://wa.me/5561936180578" target="_blank" rel="noopener noreferrer"
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
          <p>© 2026 Marcos Domingos — Representação Comercial</p>
          <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-quaternary)' }}>
            PIMEL · Linguiça Exata · Condel Condutores Elétricos
          </p>
        </div>
      </footer>
    </div>
  )
}
