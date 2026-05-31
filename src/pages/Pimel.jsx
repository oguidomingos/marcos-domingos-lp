import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Pimel() {
  const [menuOpen, setMenuOpen] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }),
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>P</span>
            PIMEL
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Início</Link></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#certificacao">Certificação</a></li>
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Comprar</a></li>
            </ul>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
        <a href="#certificacao" onClick={() => setMenuOpen(false)}>Certificação</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Comprar</a>
      </div>

      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <span className="hero-badge" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#fbbf24' }}>
              🐝 Certificação SISBI
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.5 }}>
            PIMEL
            <br />
            <span style={{ fontWeight: 300, fontSize: '0.5em', display: 'block', marginTop: '0.25rem' }}>
              Mel do Cerrado com SISBI
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}>
            Mel esporádico (safral). Entreposto em DF elimina 180km/dia de deslocamento. 
            <span style={{ color: 'var(--text-primary)' }}> Comissão 5%, prazo à vista / 7d (redes 14-30d). Catálogo digital enviado antes da prospecção.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#contato" className="btn btn-primary btn-lg">
              🛒 Quero Comprar
            </a>
            <a href="https://wa.me/5561992237397?text=Ol%C3%A1!%20Vi%20o%20site%20da%20PIMEL%20e%20quero%20saber%20mais" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.div className="stats-strip" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#f59e0b' }}>5%</div><div className="stat-label">Comissão</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#f59e0b' }}>SISBI</div><div className="stat-label">Certificação Nacional</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#f59e0b' }}>DF</div><div className="stat-label">Entreposto Local</div></div>
      </motion.div>

      {/* Products section */}
      <section className="section-base" id="produtos">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>Nossas Linhas</span>
            <h2 className="section-title">8 Produtos, Um Padrão de Qualidade</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Do mel silvestre puro às versões com sabor — cada pote carrega o selo de aprovação do SISBI.
            </p>
          </motion.div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Descrição</th>
                  <th>Embalagem</th>
                  <th>SISBI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Mel Puro Tradicional', desc: 'Silvestre, colheita seleta', pack: '350g / 500g / 1kg', ok: '✓' },
                  { name: 'Mel com Própolis', desc: 'Com extrato de própolis verde', pack: '350g / 500g', ok: '✓' },
                  { name: 'Mel com Gengibre', desc: 'Infusão natural de gengibre', pack: '350g / 500g', ok: '✓' },
                  { name: 'Mel com Limão', desc: 'Mel puro + limão siciliano', pack: '350g / 500g', ok: '✓' },
                  { name: 'Mel com Guaraná', desc: 'Mel + guaraná em pó natural', pack: '350g / 500g', ok: '✓' },
                  { name: 'Mel Multipropriedade (MIP)', desc: 'Caixa 50 unidades sortidas', pack: 'Kit display', ok: '✓' },
                  { name: 'Mel Orgânico', desc: 'Certificação orgânica em andamento', pack: '350g / 500g', ok: '✓' },
                  { name: 'Geleia Real', desc: 'Pura, liofilizada', pack: '10g / 30g', ok: '✓' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{row.name}</td>
                    <td>{row.desc}</td>
                    <td>{row.pack}</td>
                    <td style={{ color: '#22c55e' }}>{row.ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-alt" id="certificacao">
        <div className="container">
          <div className="grid-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="section-label" style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>Diferencial</span>
              <h2 className="section-title">SISBI — Venda em Todo o Brasil</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                O Sistema Brasileiro de Inspeção de Produtos de Origem Animal (SISBI) 
                permite que o mel PIMEL seja comercializado em <strong style={{ color: 'var(--text-primary)' }}>qualquer estado brasileiro</strong> — 
                sem necessidade de novas licenças ou certificações municipais.
              </p>
              <ul className="checklist">
                {[
                  'Liberação nacional automática',
                  'Inspeção sanitária unificada SIM/SIE/SIF',
                  'Produto rastreável lote a lote',
                  'Válido para todos os canais (atacado e varejo)',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))', borderColor: 'rgba(245,158,11,0.15)' }}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                🏆 Por que PIMEL?
              </h4>
              <ul className="checklist">
                {[
                  'Mel puro, sem aditivos — sabor que fideliza',
                  'Margem competitiva para o varejo',
                  'Entrega programada sem quebra de estoque',
                  'Suporte direto com o produtor (sem intermediário)',
                  'Display MIP — pronto pra prateleira',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operação */}
      <section className="section-base" id="operacao">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>Operação</span>
            <h2 className="section-title">Como Trabalhamos no DF</h2>
          </motion.div>

          <div className="grid-2">
            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))', borderColor: 'rgba(245,158,11,0.15)' }}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                📊 Dados da Operação
              </h4>
              <ul className="checklist">
                {[
                  'Mel esporádico (safral)',
                  'Comissão: 5%',
                  'Prazo: à vista / 7 dias (redes 14-30 dias)',
                  'Entreposto em DF elimina 180km/dia de deslocamento',
                  'Catálogo digital enviado antes da prospecção',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))', borderColor: 'rgba(245,158,11,0.15)' }}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                📍 Área Prioritária DF
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Samambaia, Taguatinga, Ceilândia, Vicente Pires, Águas Claras, Riacho Fundo I/II, Recanto das Emas, Guará e Cidade Estrutural.
              </p>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>
                🏢 Clientes Atuais
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                Dia a Dia, Costa Atacado, Super Adega, Itatico, Castelo Forte, Casa Forte, Rei do Pão, Delícia Mineira, Pão e Flocos.
              </p>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>
                🔍 Estratégia de Prospecção
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                Varredura por avenida: farmácia, mercado, material de construção, açougue + leads WhatsApp.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-base">
        <div className="container" style={{ maxWidth: '700px' }}>
          <motion.div className="testimonial" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))', border: '1px solid rgba(245,158,11,0.1)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p style={{ fontSize: '1.125rem' }}>
              "O mel PIMEL é o que mais vende na minha seção de orgânicos. Cliente volta pedindo o pote amarelo. 
              E o SISBI resolveu a papelada que antes me impedia de vender mel de fora do estado."
            </p>
            <cite style={{ marginTop: '1.5rem', color: 'var(--text-primary)' }}>— Comprador de Rede Supermercadista, DF</cite>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contato">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2>Quer PIMEL na Sua Loja?</h2>
            <p>Fala com a gente. Proposta comercial, tabela de preços e degustação — resolve tudo no WhatsApp.</p>
            <div className="btn-row">
              <a href="https://wa.me/5561992237397?text=Ol%C3%A1!%20Quero%20comprar%20mel%20PIMEL%20para%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                🛒 Quero Comprar
              </a>
              <Link to="/" className="btn btn-ghost btn-lg">
                ← Voltar ao Início
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 PIMEL — Mel do Cerrado</p>
          <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            Certificação SISBI · WhatsApp: (61) 99223-7397
          </p>
        </div>
      </footer>
    </div>
  )
}
