import { Link } from 'react-router-dom'
import { useState } from 'react'

const products = [
  { name: 'Mel Natural', sizes: '1kg · 500g · 470g · 25kg', tag: 'B2B e Indústria' },
  { name: 'Mel Orgânico', sizes: 'Vidro · Plástico', tag: 'Lojas Naturais' },
  { name: 'Linha Premium', sizes: '3 floradas selecionadas', tag: 'Mercado Nobre' },
  { name: 'Própolis', sizes: 'Frasco 20-30ml', tag: 'Farmácias' },
  { name: 'Pólen Apícola', sizes: 'Pote 100-200g', tag: 'Lojas Naturais' },
  { name: 'Compostos', sizes: 'Mel + Própolis · Gengibre', tag: 'Supermercados' },
  { name: 'Sachês', sizes: '10-12g individual', tag: 'Padarias · Hotéis' },
  { name: 'Cera de Abelha', sizes: 'Bloco · Granulado', tag: 'Indústria' },
]

const clients = [
  'Atacadão Dia a Dia', 'Tático', 'Super Adega', 'Costa Atacado',
  'Superbom', 'Atacadão', 'Caique', 'Armazém do Queijo'
]

export default function Pimel() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/* ===== HEADER ===== */}
      <header className="header" style={{
        background: 'rgba(8,9,10,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div className="container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 700, color: '#fff',
            }}>P</span>
            <span className="logo" style={{ fontSize: 18 }}>PIMEL</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#sobre">Produtos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 13 }}>
                Quero Revender
              </a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section style={{
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 800,
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: 9999,
              background: 'rgba(245,158,11,0.12)', color: '#fbbf24',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: 20,
            }}>
              Certificação SISBI — Venda Nacional
            </span>
            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 510, letterSpacing: '-0.03em',
              lineHeight: 1.0, color: '#f7f8f8',
              marginBottom: 16,
            }}>
              O Mel Que Roda<br />o Brasil
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.6, color: '#8a8f98',
              maxWidth: 520, margin: '0 auto 32px',
            }}>
              Do Cerrado para todo o país. O PIMEL tem certificação SISBI — 
              o selo que libera venda nacional. Supermercados, atacados e indústrias 
              de qualquer estado já compram. Sua rede pode ser a próxima.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 8,
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#fff', fontSize: 16, fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                Quero Revender → 
              </a>
              <a href="#sobre" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 8,
                background: 'rgba(255,255,255,0.04)', color: '#d0d6e0',
                fontSize: 16, fontWeight: 500, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                Ver Produtos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENTES (Carrossel compacto) ===== */}
      <section style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <p style={{ fontSize: 12, color: '#62666d', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 16, fontWeight: 600 }}>
            Já Atende Redes como
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center',
          }}>
            {clients.map(c => (
              <span key={c} style={{
                padding: '6px 14px', borderRadius: 9999,
                background: 'rgba(255,255,255,0.03)', color: '#8a8f98',
                fontSize: 13, border: '1px solid rgba(255,255,255,0.06)',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA + SOLUÇÃO ===== */}
      <section className="section" id="sobre">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-label">O Problema</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8', marginBottom: 16 }}>
                Prospecção 100% presencial<br />custa caro e escala pouco
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#8a8f98', marginBottom: 16 }}>
                Hoje o Marcos roda 180 km por dia de visita. Cada km é tempo e 
                dinheiro que poderiam estar crescendo o negócio. O resultado? 
                Clientes ótimos onde já chegou, mas um Brasil inteiro esperando.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#8a8f98' }}>
                A solução é simples: manter o presencial onde já funciona e 
                somar uma frente digital que abre portas sem precisar de gasolina.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(217,119,6,0.04))',
              border: '1px solid rgba(245,158,11,0.15)',
              borderRadius: 16, padding: 40,
            }}>
              <span style={{ fontSize: 48, marginBottom: 12, display: 'block' }}>🍯</span>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: '#fbbf24', marginBottom: 12 }}>
                A Solução PIMEL
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '✅', text: 'Estratégia híbrida: presencial + digital' },
                  { icon: '✅', text: 'Prospecção guiada por dados (Google Maps)' },
                  { icon: '✅', text: 'Follow-up automatizado via WhatsApp' },
                  { icon: '✅', text: 'Estoque pronto — entrega em todo Brasil' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span>{item.icon}</span>
                    <span style={{ fontSize: 15, color: '#d0d6e0' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAL SISBI ===== */}
      <section className="section" id="diferenciais" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Diferencial</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8', marginBottom: 12 }}>
              SISBI: O Selo Que Abre <br />Fronteiras
            </h2>
            <p style={{ fontSize: 17, color: '#8a8f98', maxWidth: 520, margin: '0 auto' }}>
              Poucos entrepostos têm essa certificação. Com ela, você vende para qualquer estado — sem burocracia interestadual.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: '📦', title: 'Venda Nacional', desc: 'Sem limitação geográfica. Atende SP, RJ, MG, Nordeste — o Brasil todo.' },
              { icon: '🔬', title: 'Rastreabilidade', desc: 'Cada lote tem origem, data e análise. Qualidade que o mercado exige.' },
              { icon: '🏭', title: 'Escala Industrial', desc: 'Mel a granel, sachês, vidros. Qualquer formato que seu ponto de venda precisar.' },
            ].map((d, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.06)', padding: 32,
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{d.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f7f8f8', marginBottom: 8 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: '#8a8f98', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Portfólio</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8', marginBottom: 12 }}>
              8 Linhas de Produto
            </h2>
            <p style={{ fontSize: 17, color: '#8a8f98', maxWidth: 500, margin: '0 auto' }}>
              Do mel natural ao pólen apícola. Cada linha com embalagem e precificação para o seu canal.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {products.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: 24,
                transition: 'all 0.2s',
              }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#f7f8f8', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: '#fbbf24', fontWeight: 500, marginBottom: 8 }}>{p.tag}</p>
                <p style={{ fontSize: 13, color: '#62666d' }}>{p.sizes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTES + PROVA SOCIAL ===== */}
      <section className="section" id="clientes" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <span className="section-label">Prova Social</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8', marginBottom: 16 }}>
                Quem Já Compra <br />Confia e Revende
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {clients.map(c => (
                  <span key={c} style={{
                    padding: '8px 16px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.03)', color: '#d0d6e0',
                    fontSize: 14, border: '1px solid rgba(255,255,255,0.06)',
                  }}>{c}</span>
                ))}
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.03)', borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.06)', padding: 32,
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#f7f8f8', marginBottom: 16 }}>
                Pronto pra começar?
              </h3>
              <p style={{ fontSize: 14, color: '#8a8f98', lineHeight: 1.7, marginBottom: 20 }}>
                Seu supermercado, padaria ou distribuidora pode ser o próximo 
                cliente PIMEL. O estoque existe, a certificação está em dia e a 
                entrega chega onde você estiver.
              </p>
              <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 8,
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff', fontSize: 15, fontWeight: 600,
                textDecoration: 'none',
              }}>
                📱 Fale com Marcos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPANSÃO ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Roadmap</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 510, letterSpacing: '-0.02em', color: '#f7f8f8', marginBottom: 12 }}>
              Plano de Expansão Nacional
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              {
                phase: 'Fase 1', period: 'Meses 1-3',
                items: ['Consolidar Goiás + DF', 'Prospecção digital + presencial', '300+ leads qualificados', '5 novos supermercados/mês'],
                color: '#f59e0b'
              },
              {
                phase: 'Fase 2', period: 'Meses 3-6',
                items: ['Expansão SP, RJ, MG', 'Distribuidores parceiros', 'Feiras do setor apícola', 'SEO ranqueando'],
                color: '#fbbf24'
              },
              {
                phase: 'Fase 3', period: 'Meses 6-12',
                items: ['Presença nacional', 'Linha premium em todo Brasil', 'Parcerias com indústria', 'Marca reconhecida'],
                color: '#fcd34d'
              },
            ].map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.06)', padding: 32,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: f.color, borderRadius: '12px 12px 0 0',
                }} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: f.color }}>{f.phase}</span>
                  <span style={{ fontSize: 12, color: '#62666d' }}>{f.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {f.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 14, color: '#d0d6e0', padding: '6px 0',
                      borderBottom: j < f.items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      <span style={{ color: '#10b981', fontSize: 12 }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{
        padding: '80px 0', textAlign: 'center',
        background: 'linear-gradient(180deg, transparent, rgba(245,158,11,0.04))',
        borderTop: '1px solid rgba(245,158,11,0.1)',
      }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: '#f7f8f8', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Vamos Levar o Mel PIMEL<br />para Suas Prateleiras
          </h2>
          <p style={{ fontSize: 16, color: '#8a8f98', maxWidth: 480, margin: '0 auto 28px' }}>
            Um clique no botão abaixo e você fala direto com Marcos para montar a proposta comercial do seu negócio.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20revender%20mel%20PIMEL%20-%20certifica%C3%A7%C3%A3o%20SISBI" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 40px', borderRadius: 8,
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff', fontSize: 17, fontWeight: 600,
            textDecoration: 'none',
          }}>
            📱 Fale com Marcos no WhatsApp
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p style={{ fontSize: 13, color: '#62666d', marginBottom: 4 }}>
            PIMEL — Entreposto de Mel e Cera de Abelha · Certificação SISBI
          </p>
          <p style={{ fontSize: 12, color: '#4a4e54' }}>
            <Link to="/" style={{ color: '#62666d' }}>← Voltar ao portfólio</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
