import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const products = [
  { name: 'Linguiça Toscana', desc: 'Clássica artesanal. A receita que começou tudo em 2000.', weight: 'Embalagem 1kg' },
  { name: 'Linguiça Calabresa', desc: 'Defumada no ponto certo. A preferida das churrascarias.', weight: 'Embalagem 1kg' },
  { name: 'Linguiça de Frango', desc: 'Leve, suculenta, temperada. Ideal para o dia a dia.', weight: 'Embalagem 1kg' },
  { name: 'Linguiça Mista', desc: 'O equilíbrio perfeito de carnes. Sabor que agrada todo mundo.', weight: 'Embalagem 1kg' },
  { name: 'Linguiça com Queijo', desc: 'Recheada com queijo derretido. A queridinha do açougue.', weight: 'Embalagem 1kg' },
  { name: 'Linguiça Apimentada', desc: 'Pimenta na medida certa. Pra quem gosta de emoção.', weight: 'Embalagem 1kg' },
]

export default function LinguicaExata() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <span className="logo-mark" style={{
              background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
              borderRadius: 6, fontSize: '1rem',
            }}>L</span>
            <span className="logo" style={{ fontSize: '1.125rem', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
              LINGUIÇA EXATA
            </span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20comprar%20Lingui%C3%A7a%20Exata%20para%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                Comprar Agora
              </a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="product-hero" style={{
        background: 'linear-gradient(180deg, rgba(239,68,68,0.04) 0%, transparent 100%)',
        borderBottom: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative "butcher" pattern lines */}
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%',
          background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(239,68,68,0.02) 2px, rgba(239,68,68,0.02) 4px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />
        <div className="product-hero-glow" style={{
          background: 'radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 60%)',
        }} />
        <section className="container" style={{
          position: 'relative', zIndex: 1,
          paddingTop: '6rem', paddingBottom: '4rem',
        }}>
          <div className="hero-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1rem', borderRadius: 100,
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
            color: '#f87171', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '1.5rem',
          }}>
            🥩 Tradição desde 2000 — Anápolis-GO
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#f7f8f8',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}>
            Carne de Verdade.<br />
            <span style={{ color: '#ef4444' }}>Gosto de Tradição.</span>
          </h1>
          <p style={{ color: '#8a8f98', maxWidth: '560px', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Há 25 anos fazendo linguiça como antigamente — carne selecionada, tempero na mão, 
            defumação no ponto certo. Sem aditivos desnecessários. Só o que presta.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20comprar%20Lingui%C3%A7a%20Exata%20para%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', borderRadius: 0,
              background: '#ef4444',
              color: '#fff', fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Peça Seu Pedido →
            </a>
            <a href="#diferenciais" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', borderRadius: 0,
              border: '2px solid #ef4444',
              color: '#ef4444', fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Diferenciais
            </a>
          </div>
        </section>
      </div>

      {/* Numbers Strip */}
      <div style={{
        background: '#111113',
        borderTop: '1px solid rgba(239,68,68,0.15)',
        borderBottom: '1px solid rgba(239,68,68,0.15)',
        padding: '2.5rem 0',
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {[
            { value: '25', label: 'Anos de Tradição', sub: 'Desde 2000' },
            { value: '6', label: 'Linhas', sub: 'Sabores únicos' },
            { value: '180km', label: 'Por Dia', sub: 'Entregas contínuas' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1,
                color: '#ef4444', marginBottom: '0.25rem',
              }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f7f8f8', marginBottom: '0.125rem' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#62666d' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais */}
      <section className="product-section product-section-alt" id="diferenciais">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#ef4444' }}>Por Que Somos a Exata</span>
            <h2 className="section-title" style={{ color: '#f7f8f8' }}>
              O Diferencial Está no Processo
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Não é receita de internet. São 25 anos de açougue, de fornecedor 
              que não corta custo, de cliente que volta.
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🥩', title: 'Carne Selecionada', desc: 'Cortes nobres, sem aproveitamentos. A matéria-prima faz 80% do resultado.' },
              { icon: '🧂', title: 'Tempero Artesanal', desc: 'Na mão, do jeito que aprenderam os mestres açougueiros. Sem misturas industriais.' },
              { icon: '🔥', title: 'Defumação no Ponto', desc: 'Lenha certa, tempo certo. A calabresa que todo churrasqueiro reconhece.' },
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="product-section" id="produtos">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#ef4444' }}>Cardápio</span>
            <h2 className="section-title" style={{ color: '#f7f8f8' }}>
              6 Linhas, Um Padrão
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Toscana, Calabresa, Frango, Mista, com Queijo, Apimentada — 
              cada uma com seu perfil, todas com o mesmo padrão de qualidade.
            </p>
          </div>
          <div className="grid-3">
            {products.map((p, i) => (
              <div key={i} className="feature-card" style={{
                padding: '1.5rem',
                borderLeft: '3px solid #ef4444',
              }}>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.35rem', letterSpacing: '0.03em', marginBottom: '0.5rem' }}>
                  {p.name}
                </h4>
                <p style={{ color: '#8a8f98', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  {p.desc}
                </p>
                <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 600 }}>{p.weight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem compra */}
      <section className="product-section product-section-alt">
        <div className="container">
          <div className="grid-2">
            <div style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.08), transparent)',
              borderRadius: 12,
              border: '1px solid rgba(239,68,68,0.15)',
              padding: '2.5rem',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏪</div>
              <h4 style={{ color: '#f7f8f8', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Supermercados
              </h4>
              <p style={{ color: '#8a8f98', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                Produto com giro alto e fidelidade de cliente. A linguiça que o consumidor 
                reconhece na gôndola e compra de novo.
              </p>
              <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Embalagem padrão 1kg', 'Preço competitivo', 'Entrega programada'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#b0b6c0' }}>
                    <span style={{ color: '#ef4444' }}>✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.08), transparent)',
              borderRadius: 12,
              border: '1px solid rgba(239,68,68,0.15)',
              padding: '2.5rem',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🥩</div>
              <h4 style={{ color: '#f7f8f8', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Restaurantes & Churrascarias
              </h4>
              <p style={{ color: '#8a8f98', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                A calabresa defumada que dá diferença no prato. Fornecedor que não falta 
                e não varia qualidade.
              </p>
              <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Embalagem food service', 'Entrega em Anápolis e região', 'Degustação gratuita'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#b0b6c0' }}>
                    <span style={{ color: '#ef4444' }}>✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="product-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{
            color: '#f7f8f8',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '0.03em',
            marginBottom: '0.75rem',
          }}>
            QUER EXPERIMENTAR?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>
            Degustação grátis para estabelecimentos comerciais em Anápolis e região. 
            Chama no WhatsApp que a gente leva.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20comprar%20Lingui%C3%A7a%20Exata%20para%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2.5rem', borderRadius: 0,
            background: '#22c55e',
            color: '#fff', fontSize: '1.05rem', fontWeight: 600,
            textDecoration: 'none', textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            📱 Chama no WhatsApp
          </a>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/" className="back-link">← Voltar ao portfólio</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Linguiça Exata — Artesanal Premium · Anápolis-GO · Desde 2000</p>
        </div>
      </footer>
    </div>
  )
}
