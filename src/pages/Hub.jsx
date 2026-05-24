import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 'pimel',
    name: 'PIMEL',
    tag: 'Mel com Certificação SISBI',
    description: 'Do Cerrado para todo o Brasil. Certificação SISBI — venda em qualquer estado. 8 linhas de produto, 8 redes nacionais já atendidas.',
    icon: '🍯',
    accent: '#f59e0b',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bgAccent: 'rgba(245,158,11,0.06)',
    btnColor: 'linear-gradient(135deg, #f59e0b, #d97706)',
    tags: ['SISBI · Venda Nacional', '8 Linhas', 'Mel Orgânico'],
    slug: 'pimel',
    bgIcon: '🐝',
  },
  {
    id: 'linguica',
    name: 'Linguiça Exata',
    tag: 'Artesanal Premium desde 2000',
    description: '25 anos de tradição em Anápolis-GO. Linguiça feita como antigamente — sabor que fideliza cliente. Supermercados, restaurantes e muito mais.',
    icon: '🥩',
    accent: '#ef4444',
    color: 'linear-gradient(135deg, #ef4444, #b91c1c)',
    bgAccent: 'rgba(239,68,68,0.06)',
    btnColor: 'linear-gradient(135deg, #ef4444, #dc2626)',
    tags: ['25 Anos', '6 Linhas', 'Degustação Grátis'],
    slug: 'linguica-exata',
    bgIcon: '🥩',
  },
  {
    id: 'condel',
    name: 'Condel Condutores',
    tag: 'Distribuição com Preço Justo',
    description: 'Depósito próprio em Taguatinga-DF. 150+ lojas atendidas. Castelo Forte, Casa Forte e as principais marcas, sempre em estoque.',
    icon: '⚡',
    accent: '#3b82f6',
    color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    bgAccent: 'rgba(59,130,246,0.06)',
    btnColor: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    tags: ['150+ Lojas', 'Entrega Rápida DF', 'INMETRO'],
    slug: 'condel',
    bgIcon: '⚡',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hub() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #b45309)' }}>M</span>
            Marcos Domingos
          </Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Fale Comigo</a></li>
            </ul>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" style={{
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-badge" style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              color: '#fbbf24',
            }}>
              ✦ Representação Comercial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Três Operações.
            <br />
            <span style={{ fontWeight: 300, color: 'var(--text-secondary)', fontSize: '0.7em' }}>
              Qualidade que Vende.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            PIMEL · Linguiça Exata · Condel — três negócios que compartilham um padrão: 
            produto que vende na gôndola, preço que fecha negócio e entrega que não falha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#produtos" className="btn btn-primary btn-lg">
              Ver Produtos
            </a>
            <a
              href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20saber%20mais"
              className="btn btn-ghost btn-lg"
              target="_blank" rel="noopener noreferrer"
            >
              Fale no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <motion.div
        className="stats-strip"
        style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="stat-item">
          <div className="stat-value" style={{ fontFamily: "'Fraunces', serif" }}>3</div>
          <div className="stat-label">Operações</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ fontFamily: "'Fraunces', serif" }}>150+</div>
          <div className="stat-label">Lojas Atendidas</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ fontFamily: "'Fraunces', serif" }}>25</div>
          <div className="stat-label">Anos de Estrada</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>SISBI</div>
          <div className="stat-label">Certificação Nacional</div>
        </div>
      </motion.div>

      {/* Products */}
      <section className="section-base" id="produtos">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label" style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>Portfólio</span>
            <h2 className="section-title">Nossas Operações</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Três frentes de atuação. Cada uma com o melhor custo-benefício para o seu negócio.
            </p>
          </motion.div>

          <div className="product-grid">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                className="product-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="accent-bar" style={{ background: p.color }} />
                <div className="card-bg-icon">{p.bgIcon}</div>
                <div className="card-emoji" style={{ background: p.bgAccent }}>{p.icon}</div>
                <h3>{p.name}</h3>
                <div className="card-tag">{p.tag}</div>
                <p>{p.description}</p>
                <div className="tags-row">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <Link to={`/${p.slug}`} className="card-cta" style={{ color: p.accent }}>
                  Ver detalhes →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-alt" id="sobre">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label" style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>Quem é</span>
            <h2 className="section-title">Marcos Domingos</h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Mais de 20 anos conectando produtores de excelência ao mercado varejista 
              do Centro-Oeste — e agora de todo Brasil.
            </p>
          </motion.div>

          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Três operações complementares — alimentos e materiais elétricos — com uma filosofia: 
                levar o melhor custo-benefício para cada cliente. Do pequeno comércio à grande rede nacional.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-tertiary)' }}>
                Presença consolidada no Distrito Federal e Goiás, com expansão nacional via PIMEL 
                e certificação SISBI. Cada operação tem seu plano de crescimento, 
                mas todas compartilham o mesmo DNA de qualidade e confiança.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/5561936180578?text=Ol%C3%A1%20Marcos!%20Quero%20saber%20mais%20sobre%20seus%20produtos"
                  className="btn btn-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  Entrar em Contato
                </a>
              </div>
            </motion.div>

            <motion.div
              id="contato"
              className="highlight-box"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(59,130,246,0.04))',
                borderColor: 'rgba(255,255,255,0.08)',
                padding: '2rem',
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                📱 Fale Direto
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Chama no WhatsApp. Resposta rápida, proposta na hora.
              </p>
              <a
                href="https://wa.me/5561936180578"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-lg"
                style={{ width: '100%', justifyContent: 'center', background: '#22c55e', color: '#fff' }}
              >
                📱 (61) 93618-0578
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.75rem', textAlign: 'center' }}>
                Disponível para proposta e orçamento
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Marcos Domingos — Representação Comercial</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            PIMEL · Linguiça Exata · Condel Condutores Elétricos
          </p>
        </div>
      </footer>
    </div>
  )
}
