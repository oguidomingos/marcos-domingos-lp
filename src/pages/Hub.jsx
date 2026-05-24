import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const products = [
  {
    id: 'pimel',
    name: 'PIMEL',
    tag: 'Mel com Certificação SISBI',
    description: 'Do Cerrado para todo o Brasil. O mel que já está em 8 redes nacionais. Certificação SISBI — venda em qualquer estado.',
    icon: '🍯',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
    ctaColor: '#fbbf24',
    tags: ['SISBI · Venda Nacional', '8 Linhas de Produto', 'Mel Orgânico'],
    slug: 'pimel',
  },
  {
    id: 'linguica',
    name: 'Linguiça Exata',
    tag: 'Artesanal Premium desde 2000',
    description: 'Tradição de Anápolis-GO. Linguiça feita como antigamente — sabor que fideliza cliente. Supermercados, restaurantes, churrascarias.',
    icon: '🥩',
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.08)',
    ctaColor: '#ef4444',
    tags: ['25 Anos de Tradição', '6 Linhas', 'Degustação Grátis'],
    slug: 'linguica-exata',
  },
  {
    id: 'condel',
    name: 'Condel Condutores Elétricos',
    tag: 'Distribuição com Preço Justo',
    description: 'Depósito próprio em Brasília. 150+ lojas atendidas. Castelo Forte, Casa Forte e as principais marcas do mercado elétrico.',
    icon: '⚡',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.08)',
    ctaColor: '#60a5fa',
    tags: ['150+ Lojas Atendidas', 'Entrega Rápida DF', 'INMETRO'],
    slug: 'condel',
  },
]

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

export default function Hub() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-mark" style={{ background: 'linear-gradient(135deg, #f59e0b, #b45309)' }}>M</span>
            Marcos Domingos
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Fale Comigo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hub-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">✦ Representação Comercial desde 2000</div>
          <h1>
            Três Operações.<br />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#8a8f98', fontSize: '0.8em' }}>
              Um Padrão de Qualidade.
            </span>
          </h1>
          <p>
            PIMEL · Linguiça Exata · Condel — três negócios, um compromisso: 
            produto que vende, preço que fecha e entrega que cumpre.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#produtos" className="btn btn-primary btn-lg">
              Ver Produtos
            </a>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20saber%20mais" className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <div className="metrics-strip">
        <div className="metric-item">
          <div className="metric-value">3</div>
          <div className="metric-label">Operações</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">150+</div>
          <div className="metric-label">Lojas Atendidas</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">25</div>
          <div className="metric-label">Anos de Estrada</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">SISBI</div>
          <div className="metric-label">Certificação Nacional</div>
        </div>
      </div>

      {/* Produtos */}
      <section className="product-section" id="produtos">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#fbbf24' }}>Portfólio</span>
            <h2 className="section-title" style={{ color: '#f7f8f8' }}>
              Nossas Operações
            </h2>
            <p className="section-sub" style={{ margin: '0 auto 0' }}>
              Três frentes de atuação. Cada uma com o melhor custo-benefício 
              para o seu negócio.
            </p>
          </div>
          <div className="hub-product-grid">
            {products.map(p => (
              <div key={p.id} className={`hub-card hub-card-${p.id}`}>
                <div className="hub-card-icon" style={{ background: p.bgColor }}>{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="card-sub">{p.tag}</div>
                <p>{p.description}</p>
                <div className="hub-card-tags">
                  {p.tags.map(t => <span key={t} className="hub-tag">{t}</span>)}
                </div>
                <Link to={`/${p.slug}`} className="hub-card-cta" style={{ color: '#8a8f98' }}>
                  Ver detalhes → 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="product-section product-section-alt" id="sobre">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#fbbf24' }}>Quem é</span>
            <h2 className="section-title" style={{ color: '#f7f8f8' }}>
              Marcos Domingos
            </h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Mais de 20 anos conectando produtores de excelência ao mercado varejista 
              do Centro-Oeste — e agora de todo Brasil.
            </p>
          </div>
          <div className="grid-2">
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#b0b6c0', marginBottom: '1rem' }}>
                Três operações complementares — alimentos e materiais elétricos — com uma filosofia: 
                levar o melhor custo-benefício para cada cliente. Do pequeno comércio à grande rede.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#8a8f98' }}>
                Presença consolidada no Distrito Federal, Goiás e expansão nacional via PIMEL 
                com certificação SISBI. Cada operação tem seu próprio plano de crescimento, 
                mas todas compartilham o mesmo DNA de qualidade e confiança.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20saber%20mais%20sobre%20seus%20produtos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </div>
            </div>
            <div id="contato" className="contact-card" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f7f8f8', marginBottom: '0.75rem' }}>
                  📱 Fale Direto
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#8a8f98', marginBottom: '1rem', lineHeight: 1.6 }}>
                  Clique e chame no WhatsApp. Resposta rápida, proposta na hora.
                </p>
                <a href="https://wa.me/5561936180578" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center', background: '#22c55e', color: '#fff' }}
                >
                  📱 (61) 93618-0578
                </a>
                <p style={{ fontSize: '0.75rem', color: '#62666d', marginTop: '0.75rem', textAlign: 'center' }}>
                  Disponível para proposta e orçamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Marcos Domingos — Representação Comercial</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: '#62666d' }}>
            PIMEL · Linguiça Exata · Condel Condutores Elétricos
          </p>
        </div>
      </footer>
    </div>
  )
}
