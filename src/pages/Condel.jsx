import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Condel() {
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
            <span className="logo-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>C</span>
            Condel
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Início</Link></li>
              <li><a href="#marcas">Marcas</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', background: '#3b82f6', color: '#fff' }}>Cotar</a></li>
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
        <a href="#marcas" onClick={() => setMenuOpen(false)}>Marcas</a>
        <a href="#diferenciais" onClick={() => setMenuOpen(false)}>Diferenciais</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Cotar</a>
      </div>

      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="hero-badge" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#60a5fa' }}>
              ⚡ Distribuição Elétrica
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.5 }}>
            Condel Condutores
            <br />
            <span style={{ fontWeight: 300, fontSize: '0.45em', display: 'block', marginTop: '0.25rem' }}>
              Preço Justo na Distribuição de Materiais Elétricos
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}>
            Agendamento em construtoras como canal prioritário. Pagamento exclusivamente à vista (Pix). 
            <span style={{ color: 'var(--text-primary)' }}> Comissão 10%. Meta: R$25k/mês (curto) → R$60k/mês (médio).</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#contato" className="btn btn-lg" style={{ background: '#3b82f6', color: '#fff' }}>
              📋 Solicitar Cotação
            </a>
            <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20cotar%20materiais%20el%C3%A9tricos%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.div className="stats-strip" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#3b82f6' }}>10%</div><div className="stat-label">Comissão</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#3b82f6' }}>R$25k</div><div className="stat-label">Meta Curto /mês</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#3b82f6' }}>R$60k</div><div className="stat-label">Meta Médio /mês</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#3b82f6' }}>Pix</div><div className="stat-label">Pagamento À Vista</div></div>
      </motion.div>

      {/* Why Condel */}
      <section className="section-base" id="diferenciais">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#60a5fa', borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}>Diferenciais</span>
            <h2 className="section-title">Por que Condel?</h2>
          </motion.div>

          <div className="grid-3">
            {[
              { icon: '🏗️', title: 'Construtoras — Canal Prioritário', desc: 'Agendamento direto em construtoras. Orçamento rápido, entrega programada e pagamento à vista (Pix).' },
              { icon: '🚚', title: 'Varredura por Avenida', desc: 'Estratégia ativa: farmácia, mercado, material de construção e açougue. Leads capturados também via WhatsApp.' },
              { icon: '💸', title: 'Pagamento À Vista (Pix)', desc: 'Sem risco de inadimplência. Fluxo de caixa previsível para você e para o distribuidor.' },
              { icon: '📊', title: 'Metas Claras', desc: 'Curto prazo: R$25k/mês. Médio prazo: R$60k/mês. Comissão de 10% sobre vendas fechadas.' },
              { icon: '✅', title: 'Produto Certificado', desc: 'INMETRO, ABINEE, normas NBR. Qualidade que passa na fiscalização.' },
              { icon: '🤝', title: 'Parceria de Longo Prazo', desc: 'Mais de 150 lojas confiam. Condições especiais para cliente fidelizado.' },
            ].map((item, i) => (
              <motion.div className="card" key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }} custom={i}
              >
                <div className="card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-alt" id="marcas">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#60a5fa', borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}>Marcas</span>
            <h2 className="section-title">Distribuímos as Principais Marcas</h2>
          </motion.div>

          <div className="client-pills" style={{ marginBottom: '2rem' }}>
            {['Castelo Forte', 'Casa Forte', 'Pirelli', 'Sil Fios', 'Lorenzetti', 'Tigre', 'Amanco', 'Siemens', 'Schneider', 'Steck', 'Cemar', 'Bticino', 'FanLux', 'Elgin', 'Krona'].map((m, i) => (
              <span key={i} className="client-pill" style={{ fontSize: '0.9375rem', padding: '0.625rem 1.25rem', background: 'rgba(59,130,246,0.04)', borderColor: 'rgba(59,130,246,0.1)' }}>{m}</span>
            ))}
          </div>

          <motion.p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            E muitas outras. Se tem na construção civil, <strong style={{ color: 'var(--text-primary)' }}>a Condel tem no depósito.</strong>
          </motion.p>
        </div>
      </section>

      {/* Operação */}
      <section className="section-alt" id="operacao">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#60a5fa', borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}>Operação</span>
            <h2 className="section-title">Área de Atuação e Clientes</h2>
          </motion.div>

          <div className="grid-2">
            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(59,130,246,0.02))', borderColor: 'rgba(59,130,246,0.12)' }}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                📍 Área Prioritária DF
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Samambaia, Taguatinga, Ceilândia, Vicente Pires, Águas Claras, Riacho Fundo I/II, Recanto das Emas, Guará e Cidade Estrutural.
              </p>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>
                🔍 Estratégia de Prospecção
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                Varredura por avenida: farmácia, mercado, material de construção, açougue + leads WhatsApp.
              </p>
            </motion.div>

            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(59,130,246,0.02))', borderColor: 'rgba(59,130,246,0.12)' }}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                🏢 Clientes Atuais
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Dia a Dia, Costa Atacado, Super Adega, Itatico, Castelo Forte, Casa Forte, Rei do Pão, Delícia Mineira, Pão e Flocos.
              </p>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>
                📈 Dados da Operação
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                Comissão: 10%. Prazo: à vista (Pix). Meta curto prazo: R$25k/mês. Meta médio prazo: R$60k/mês.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contato">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2>Faça Sua Cotação</h2>
            <p>Solicite sua lista de preços Condel. Depósito em Taguatinga, entrega no DF e entorno.</p>
            <div className="btn-row">
              <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20fazer%20uma%20cota%C3%A7%C3%A3o%20com%20a%20Condel" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#3b82f6', color: '#fff' }}>
                📋 Cotar Agora
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
          <p>© 2026 Condel Condutores Elétricos</p>
          <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            Taguatinga-DF · (61) 93618-0578
          </p>
        </div>
      </footer>
    </div>
  )
}
