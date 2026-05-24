import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const brands = [
  { name: 'Castelo Forte', desc: 'Standard e resistentes' },
  { name: 'Casa Forte', desc: 'Linha premium' },
  { name: 'Hidromar', desc: 'Eletro-hidráulicos' },
  { name: 'Stoptone', desc: 'Interruptores e tomadas' },
  { name: 'Sicame', desc: 'Conectores e acessórios' },
  { name: 'Ficap', desc: 'Fios e cabos' },
  { name: 'Pratec', desc: 'Eletrodutos e acessórios' },
  { name: 'Pial Legrand', desc: 'Material de alta linha' },
]

const steps = [
  { icon: '1', title: 'Peça', desc: 'Orçamento por WhatsApp ou visita.' },
  { icon: '2', title: 'Cotação', desc: 'Melhor preço do mercado em minutos.' },
  { icon: '3', title: 'Separação', desc: 'Estoque próprio em Taguatinga.' },
  { icon: '4', title: 'Entrega', desc: 'Rápida em Brasília e entorno.' },
]

export default function Condel() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 6,
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.875rem', fontWeight: 700, color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
            }}>C</div>
            <span style={{
              fontSize: '1.125rem', fontWeight: 600,
              color: '#f7f8f8', letterSpacing: '0em',
            }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>CONDEL</span>
            </span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#marcas">Marcas</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20cotar%20material%20el%C3%A9trico%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                Cotar Preço
              </a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="product-hero" style={{
        background: 'linear-gradient(180deg, rgba(59,130,246,0.03) 0%, transparent 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          opacity: 0.5,
        }} />
        <div className="product-hero-glow" style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 60%)',
        }} />
        <section className="container" style={{
          position: 'relative', zIndex: 1,
          paddingTop: '6rem', paddingBottom: '4rem',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1rem', borderRadius: 6,
            background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
            color: '#60a5fa', fontSize: '0.8125rem', fontWeight: 500,
            marginBottom: '1.5rem',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            $ Estoque Próprio · Taguatinga-DF
          </div>
          <h1 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: '#f7f8f8',
            marginBottom: '1rem',
          }}>
            <span style={{ color: '#3b82f6', fontWeight: 500 }}>Condel</span>_<br />
            condutores_elétricos
          </h1>
          <p style={{
            color: '#8a8f98', maxWidth: '560px', marginBottom: '2rem',
            fontSize: '1rem', lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Depósito próprio em Taguatinga com as principais marcas do mercado elétrico. 
            Preço justo, entrega rápida e estoque que não deixa sua obra parada.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20cotar%20material%20el%C3%A9trico%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', borderRadius: 6,
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#fff', fontSize: '0.9375rem', fontWeight: 500,
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Cotar_Preço()
            </a>
            <a href="#marcas" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', borderRadius: 6,
              border: '2px solid #3b82f6',
              color: '#60a5fa', fontSize: '0.9375rem', fontWeight: 500,
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Ver_Marcas()
            </a>
          </div>
        </section>
      </div>

      {/* Stats */}
      <div style={{
        borderTop: '1px solid rgba(59,130,246,0.12)',
        borderBottom: '1px solid rgba(59,130,246,0.12)',
        padding: '2rem 0',
        background: 'rgba(59,130,246,0.02)',
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {[
            { value: '150+', label: 'Lojas Atendidas' },
            { value: '8+', label: 'Marcas Principais' },
            { value: '24h', label: 'Cotação Rápida' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: '#3b82f6', marginBottom: '0.25rem',
              }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#8a8f98' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <section className="product-section" id="marcas">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#60a5fa' }}>Marcas</span>
            <h2 className="section-title" style={{ color: '#f7f8f8' }}>
              Portfólio Técnico
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              As marcas que o mercado confia. Todas com estoque em Taguatinga.
            </p>
          </div>
          <div className="grid-4">
            {brands.map((b, i) => (
              <div key={i} className="feature-card" style={{
                padding: '1.25rem',
                borderTop: '2px solid rgba(59,130,246,0.3)',
              }}>
                <h4 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: '#f7f8f8',
                  marginBottom: '0.375rem',
                }}>
                  {b.name}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#62666d' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="product-section product-section-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label" style={{ color: '#60a5fa' }}>Diferencial</span>
              <h2 className="section-title" style={{ color: '#f7f8f8' }}>
                Por Que a Condel
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#8a8f98', marginBottom: '1.5rem' }}>
                Mais de 150 lojas na base. O segredo não é milagre — é estoque próprio 
                e preço justo. Enquanto outros estão comprando, a Condel já está entregando.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Depósito abastecido com as marcas que vendem',
                  'Preço competitivo — cotação em minutos',
                  'Entrega rápida em Brasília e Entorno',
                  'Atendimento personalizado para lojistas',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700 }}>→</span>
                    <span style={{ fontSize: '0.9375rem', color: '#b0b6c0' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="processo" style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.06), transparent)',
              borderRadius: 12,
              border: '1px solid rgba(59,130,246,0.12)',
              padding: '2.5rem',
            }}>
              <h4 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem', fontWeight: 500,
                color: '#3b82f6', marginBottom: '1.5rem',
              }}>
                + Como Funciona
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 6,
                      background: 'rgba(59,130,246,0.1)',
                      border: '1px solid rgba(59,130,246,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8125rem', fontWeight: 500,
                      color: '#60a5fa', flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f7f8f8', marginBottom: '0.125rem' }}>
                        {s.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#62666d' }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20cotar%20material%20el%C3%A9trico%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                marginTop: '1.5rem',
                padding: '0.875rem', borderRadius: 6,
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: '#fff', fontSize: '0.875rem', fontWeight: 500,
                textDecoration: 'none',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                Solicitar_Cotação()
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="product-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#f7f8f8', marginBottom: '0.75rem' }}>
            Vamos Conversar?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
            Lojistas de material de construção e elétrico — cotação rápida, 
            entrega programada, preço que fecha.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20cotar%20material%20el%C3%A9trico%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2.5rem', borderRadius: 6,
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            color: '#fff', fontSize: '0.9375rem', fontWeight: 500,
            textDecoration: 'none',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            Iniciar_Chat()
          </a>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/" className="back-link">← Voltar ao portfólio</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Condel Condutores Elétricos — Depósito em Taguatinga-DF · 150+ Lojas Atendidas</p>
        </div>
      </footer>
    </div>
  )
}
