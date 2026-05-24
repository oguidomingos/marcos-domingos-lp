import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const products = [
  { name: 'Mel Natural', sizes: '1kg · 500g · 470g · 25kg', tag: 'B2B e Indústria', emoji: '🍯' },
  { name: 'Mel Orgânico', sizes: 'Vidro · Plástico · Food Service', tag: 'Lojas Naturais', emoji: '🌿' },
  { name: 'Linha Premium', sizes: '3 Floradas Selecionadas', tag: 'Mercado Nobre', emoji: '👑' },
  { name: 'Própolis', sizes: 'Frasco 20ml · 30ml', tag: 'Farmácias', emoji: '💊' },
  { name: 'Pólen Apícola', sizes: 'Pote 100g · 200g', tag: 'Lojas Naturais', emoji: '🌸' },
  { name: 'Compostos', sizes: 'Mel + Própolis · Mel + Gengibre', tag: 'Supermercados', emoji: '🧪' },
  { name: 'Sachês', sizes: '10g · 12g Individual', tag: 'Padarias · Hotéis', emoji: '📦' },
  { name: 'Cera de Abelha', sizes: 'Bloco · Granulado', tag: 'Indústria', emoji: '🕯️' },
]

const clients = [
  'Atacadão Dia a Dia', 'Tático', 'Super Adega', 'Costa Atacado',
  'Superbom', 'Atacadão', 'Caique', 'Armazém do Queijo'
]

const highlights = [
  { icon: '🏆', title: 'SISBI', desc: 'Certificação que libera venda nacional. Sem burocracia interestadual.' },
  { icon: '📋', title: 'Rastreabilidade Total', desc: 'Cada lote tem origem, data e análise. Qualidade que o mercado exige.' },
  { icon: '🚛', title: 'Escala Nacional', desc: 'Mel a granel, sachês, vidros. Qualquer formato para seu ponto de venda.' },
]

function A({ children, ...props }) {
  return <div {...props} style={{ opacity: 0 }}>{children}</div>
}

export default function Pimel() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <span className="logo-mark" style={{ background: 'linear-gradient(135deg, #f59e0b, #b45309)' }}>P</span>
            <span className="logo" style={{ fontSize: '1.125rem' }}>PIMEL</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
                Quero Revender
              </a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="product-page">
        <div className="product-hero" style={{
          background: 'linear-gradient(180deg, rgba(245,158,11,0.03) 0%, transparent 100%)',
        }}>
          <div className="product-hero-glow" style={{
            background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 65%)',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.375rem 1rem', borderRadius: 100,
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
              color: '#fbbf24', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '1.5rem',
            }}>
              🐝 Certificação SISBI — Venda Nacional
            </div>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: '#f7f8f8',
              marginBottom: '1rem',
              fontVariationSettings: "'SOFT' 60, 'WONK' 0.5",
            }}>
              O Mel Que Roda<br /><span style={{ color: '#fbbf24' }}>O Brasil</span>
            </h1>
            <p style={{ color: '#8a8f98' }}>
              Do Cerrado para todo o país. O PIMEL tem certificação SISBI — 
              o selo que libera venda nacional. Supermercados, atacados e indústrias 
              de qualquer estado já compram.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2.25rem', borderRadius: 10,
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#fff', fontSize: '1rem', fontWeight: 600,
                textDecoration: 'none',
              }}>
                Quero Revender →
              </a>
              <a href="#diferenciais" className="btn btn-ghost btn-lg">
                Diferenciais
              </a>
            </div>
          </div>
        </div>

        {/* Client strip */}
        <div style={{
          padding: '2rem 0',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(245,158,11,0.02)',
        }}>
          <div className="container">
            <p style={{
              fontSize: '0.75rem', color: '#62666d',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textAlign: 'center', marginBottom: '1rem', fontWeight: 600,
            }}>
              Já Atende Redes como
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {clients.map(c => (
                <span key={c} style={{
                  padding: '0.375rem 0.875rem', borderRadius: 100,
                  background: 'rgba(245,158,11,0.04)',
                  color: '#b0b6c0', fontSize: '0.8125rem',
                  border: '1px solid rgba(245,158,11,0.1)',
                }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem / Solution */}
        <section className="product-section">
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="section-label" style={{ color: '#fbbf24' }}>O Problema</span>
                <h2 className="section-title" style={{ color: '#f7f8f8' }}>
                  Prospecção 100% presencial<br />custa caro e escala pouco
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#8a8f98' }}>
                  Hoje o Marcos roda 180 km por dia de visita. Cada km é tempo e 
                  dinheiro que poderiam estar crescendo o negócio. Clientes ótimos onde já chegou, 
                  mas um Brasil inteiro esperando.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#8a8f98', marginTop: '1rem' }}>
                  A solução é simples: manter o presencial onde já funciona e 
                  somar uma frente digital que abre portas sem precisar de gasolina.
                </p>
              </div>
              <div className="highlight-box" style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(217,119,6,0.03))',
                border: '1px solid rgba(245,158,11,0.15)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🍯</div>
                <h4 style={{ color: '#fbbf24', fontSize: '1.25rem' }}>A Solução PIMEL</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  {[
                    'Estratégia híbrida: presencial + digital',
                    'Prospecção guiada por dados',
                    'Follow-up automatizado via WhatsApp',
                    'Estoque pronto — entrega em todo Brasil',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#fbbf24', fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: '0.9375rem', color: '#d0d6e0' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SISBI Highlights */}
        <section className="product-section product-section-alt" id="diferenciais">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label" style={{ color: '#fbbf24' }}>Diferencial</span>
              <h2 className="section-title" style={{ color: '#f7f8f8' }}>
                SISBI: O Selo Que Abre Fronteiras
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Poucos entrepostos têm essa certificação. Com ela, sua rede vende 
                para qualquer estado — sem burocracia interestadual.
              </p>
            </div>
            <div className="grid-3">
              {highlights.map((h, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-card-icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="product-section" id="produtos">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label" style={{ color: '#fbbf24' }}>Portfólio</span>
              <h2 className="section-title" style={{ color: '#f7f8f8' }}>
                8 Linhas de Produto
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Do mel natural ao pólen apícola. Cada linha com embalagem e precificação para o seu canal.
              </p>
            </div>
            <div className="grid-4">
              {products.map((p, i) => (
                <div key={i} className="feature-card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{p.emoji}</div>
                  <h4 style={{ fontSize: '1rem' }}>{p.name}</h4>
                  <p style={{ color: '#fbbf24', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.375rem' }}>{p.tag}</p>
                  <p style={{ fontSize: '0.8125rem', color: '#62666d' }}>{p.sizes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section className="product-section product-section-alt" id="clientes">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: '#fbbf24' }}>Prova Social</span>
                <h2 className="section-title" style={{ color: '#f7f8f8' }}>
                  Quem Já Compra<br />Confia e Revende
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#8a8f98', marginBottom: '1.5rem' }}>
                  Oito grandes redes do Centro-Oeste já estão no portfólio PIMEL. 
                  E todas continuam comprando.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {clients.map(c => (
                    <span key={c} style={{
                      padding: '0.5rem 1rem', borderRadius: 8,
                      background: 'rgba(245,158,11,0.04)',
                      color: '#d0d6e0', fontSize: '0.9375rem',
                      border: '1px solid rgba(245,158,11,0.1)',
                    }}>{c}</span>
                  ))}
                </div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.05), transparent)',
                borderRadius: 20,
                border: '1px solid rgba(245,158,11,0.12)',
                padding: '3rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐝</div>
                <p style={{ fontSize: '0.9375rem', color: '#8a8f98', fontStyle: 'italic' }}>
                  "O mel PIMEL tem qualidade que o nosso cliente reconhece. 
                  É um produto que vende sozinho na gôndola."
                </p>
                <p style={{ fontSize: '0.8125rem', color: '#fbbf24', marginTop: '1rem', fontWeight: 500 }}>
                  — Rede Superbom
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="product-section" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: '#f7f8f8', marginBottom: '0.75rem' }}>
              Quer Revender Mel PIMEL?
            </h2>
            <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
              Supermercados, atacados, farmácias e indústrias — 
              entre em contato e receba a tabela de preços para revendedor.
            </p>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.5rem', borderRadius: 10,
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: '#fff', fontSize: '1.05rem', fontWeight: 600,
              textDecoration: 'none',
            }}>
              📱 Fale com Marcos no WhatsApp
            </a>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/" className="back-link">← Voltar ao portfólio</Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>PIMEL — Entreposto de Mel e Cera de Abelha · Certificação SISBI · Venda Nacional</p>
          </div>
        </footer>
      </section>
    </div>
  )
}
