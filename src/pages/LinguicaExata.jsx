import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LinguicaExata() {
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
            <span className="logo-icon" style={{ background: 'linear-gradient(135deg, #ef4444, #b91c1c)' }}>L</span>
            Linguiça Exata
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Início</Link></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#para-quem">Para Quem</a></li>
              <li><a href="#linhas">Linhas</a></li>
              <li><a href="#contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', background: '#ef4444', color: '#fff' }}>Encomendar</a></li>
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
        <a href="#diferenciais" onClick={() => setMenuOpen(false)}>Diferenciais</a>
        <a href="#para-quem" onClick={() => setMenuOpen(false)}>Para Quem</a>
        <a href="#linhas" onClick={() => setMenuOpen(false)}>Linhas</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Encomendar</a>
      </div>

      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(239,68,68,0.08) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="hero-badge" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}>
              🥩 Artesanal — Desde 2000
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.5 }}>
            Linguiça Exata
            <br />
            <span style={{ fontWeight: 300, fontSize: '0.45em', display: 'block', marginTop: '0.25rem' }}>
              O Sabor que Fideliza o Freguês
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}>
            25 anos fazendo linguiça como antigamente — receita artesanal, carne selecionada, 
            <span style={{ color: 'var(--text-primary)' }}> o sabor que faz o cliente voltar.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#contato" className="btn btn-lg" style={{ background: '#ef4444', color: '#fff' }}>
              🥩 Quero Revender
            </a>
            <a href="https://wa.me/556199542377?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Lingui%C3%A7a%20Exata" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.div className="stats-strip" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#ef4444' }}>25</div><div className="stat-label">Anos de Tradição</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#ef4444' }}>6</div><div className="stat-label">Linhas de Linguiça</div></div>
        <div className="stat-item"><div className="stat-value" style={{ fontFamily: "'Fraunces', serif", color: '#ef4444' }}>Anápolis</div><div className="stat-label">GO — Produção Própria</div></div>
      </motion.div>

      {/* Differences */}
      <section className="section-base" id="diferenciais">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#f87171', borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)' }}>Por que Linguiça Exata?</span>
            <h2 className="section-title">Por que virar cliente e não sair mais?</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Porque o sabor prende. E a margem segura.
            </p>
          </motion.div>

          <div className="grid-3">
            {[
              { icon: '🧑‍🍳', title: '25 Anos de Estrada', desc: 'Uma receita que foi aperfeiçoada por duas gerações. O paladar do Centro-Oeste conhece e aprova.' },
              { icon: '🥩', title: 'Carne Selecionada', desc: 'Cortes nobres, sem excesso de gordura. A rendibilidade na chapa é visível.' },
              { icon: '🧂', title: 'Tempero Proprietário', desc: 'A receita secreta que faz cada mordida ter exatamente o ponto certo de sal e especiarias.' },
              { icon: '📦', title: '6 Linhas de Produto', desc: 'De tradicional à apimentada, de calabresa à toscana — variedade que enche a gondola.' },
              { icon: '🚚', title: 'Entrega Programada', desc: 'Produção própria em Anápolis-GO. Frequência que respeita o giro do seu negócio.' },
              { icon: '💰', title: 'Margem para Revenda', desc: 'Preço justo que permite ao supermercadista e ao restaurante terem lucro sem perder competitividade.' },
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

      {/* Who it's for */}
      <section className="section-alt" id="para-quem">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#f87171', borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)' }}>Perfil</span>
            <h2 className="section-title">Para Quem é a Linguiça Exata</h2>
          </motion.div>

          <div className="buyer-grid">
            {[
              {
                icon: '🏪',
                title: 'Supermercados e Mercearias',
                desc: 'Produto de alto giro que fideliza o cliente. Apresentação atraente na gondola, embalagem prática, validade estendida.',
                items: ['Margem competitiva', 'Display próprio', 'Entrega semanal', 'Degustação na abertura de conta'],
              },
              {
                icon: '🍽️',
                title: 'Restaurantes e Bares',
                desc: 'A linguiça que não encolhe na chapa, não solta água, não decepciona o cliente final.',
                items: ['Embalagem atacado 5kg', 'Tempero consistente lote a lote', 'Preço fechado por período', 'Cardápio exclusivo para PF'],
              },
              {
                icon: '🥩',
                title: 'Açougues',
                desc: 'Diferencial na sua vitrine. Cliente que experimenta a Linguiça Exata vira comprador recorrente.',
                items: ['Linha completa para balcão', 'Porção degustação grátis', 'Treinamento de ponto de venda', 'Material de gondola'],
              },
              {
                icon: '🎉',
                title: 'Churrasqueiros (Atacado)',
                desc: 'Casamentos, confraternizações, eventos. Todo mundo pede a "linguiça vermelha".',
                items: ['A partir de 10kg', 'Preço especial por quantidade', 'Entrega agendada', 'Sabor que vira tradição'],
              },
            ].map((buyer, i) => (
              <motion.div className="buyer-card" key={i} style={{ background: 'var(--bg-card)', borderColor: i === 0 ? 'rgba(239,68,68,0.1)' : 'var(--border-subtle)' }}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }} custom={i}
              >
                <div className="buyer-icon">{buyer.icon}</div>
                <h4>{buyer.title}</h4>
                <p>{buyer.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                  {buyer.items.map((item, j) => <li key={j} style={{ listStyle: 'none', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: '#ef4444' }}>✦</span>{item}
                  </li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lines */}
      <section className="section-base" id="linhas">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ color: '#f87171', borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)' }}>Linhas</span>
            <h2 className="section-title">Nossas 6 Linhas</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Cada uma com sua personalidade. Todas com o mesmo cuidado artesanal.
            </p>
          </motion.div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Linha</th>
                  <th>Descrição</th>
                  <th>Ideal para</th>
                  <th>Embalagem</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Tradicional', desc: 'A receita original — suave e marcante', ideal: 'Toda ocasião', pack: '500g / 1kg / 5kg' },
                  { name: 'Calabresa', desc: 'Pimentão e defumado natural', ideal: 'Churrasco e PF', pack: '500g / 1kg / 5kg' },
                  { name: 'Toscana', desc: 'Alho e ervas finas', ideal: 'Massas e grelhados', pack: '500g / 1kg / 5kg' },
                  { name: 'Apimentada', desc: 'Pimenta dedo-de-moça na medida', ideal: 'Acompanhamento e petisco', pack: '500g / 1kg' },
                  { name: 'Defumada', desc: 'Defumação natural com lenha de eucalipto', ideal: 'Botecos e churrascarias', pack: '500g / 1kg' },
                  { name: 'Hot Dog', desc: 'A linguiça que não estoura na água', ideal: 'Food trucks e trailers', pack: '1kg / 5kg' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{row.name}</td>
                    <td>{row.desc}</td>
                    <td>{row.ideal}</td>
                    <td>{row.pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container">
          <div className="grid-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="section-label" style={{ color: '#f87171', borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.05)' }}>Processo</span>
              <h2 className="section-title">Feito Como Antigamente</h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Da escolha da carne à selagem da embalagem — cada etapa é feita com o cuidado 
                que transforma uma simples linguiça em um produto que o cliente pede pelo nome.
              </p>
              <div className="process-steps">
                {[
                  { num: '1', title: 'Seleção da Carne', desc: 'Cortes nobres, procedência rastreada.', color: 'rgba(239,68,68,0.15)', textColor: '#ef4444' },
                  { num: '2', title: 'Moagem e Tempero', desc: 'Receita proprietária, moagem no ponto exato.', color: 'rgba(239,68,68,0.15)', textColor: '#ef4444' },
                  { num: '3', title: 'Embutimento Artesanal', desc: 'Tripa natural — a textura que faz diferença.', color: 'rgba(239,68,68,0.15)', textColor: '#ef4444' },
                  { num: '4', title: 'Resfriamento e Embalagem', desc: 'Selado a vácuo, validade estendida sem conservantes.', color: 'rgba(239,68,68,0.15)', textColor: '#ef4444' },
                ].map((step, i) => (
                  <div className="process-step" key={i}>
                    <div className="step-number" style={{ background: step.color, color: step.textColor }}>{step.num}</div>
                    <div>
                      <div className="step-title">{step.title}</div>
                      <div className="step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="highlight-box" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.06), rgba(239,68,68,0.02))', borderColor: 'rgba(239,68,68,0.12)' }}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                🎁 Degustação Grátis
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Cliente novo? A gente leva uma amostra para você provar antes de comprar. 
                Sem compromisso, sem pressão — só o sabor falando por si.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/556199542377?text=Ol%C3%A1!%20Quero%20agendar%20uma%20degusta%C3%A7%C3%A3o%20da%20Lingui%C3%A7a%20Exata" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#ef4444', color: '#fff' }}>
                  🥩 Quero Degustar
                </a>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '1rem' }}>
                Disponível para supermercados, restaurantes e açougues em Anápolis e região.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contato" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2>Quer Linguiça Exata no Seu Negócio?</h2>
            <p>Encomende agora. Tabela de preços, degustação e primeira entrega — resolvemos tudo no WhatsApp.</p>
            <div className="btn-row">
              <a href="https://wa.me/556199542377?text=Ol%C3%A1!%20Quero%20comprar%20Lingui%C3%A7a%20Exata%20para%20meu%20neg%C3%B3cio" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#ef4444', color: '#fff' }}>
                🥩 Quero Revender
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
          <p>© 2026 Linguiça Exata — Artesanal desde 2000</p>
          <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            Anápolis-GO · Produção Própria · WhatsApp: (61) 99542-377
          </p>
        </div>
      </footer>
    </div>
  )
}
