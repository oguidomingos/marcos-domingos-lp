import { Link } from 'react-router-dom'

export default function Pimel() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon" style={{ background: '#d97706' }}>P</span>
            PIMEL
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">← Voltar</Link></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#estrategia">Estratégia</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20mel%20PIMEL" className="btn btn-primary">Comprar</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">← Todos os produtos</Link>
          <h1>🍯 PIMEL — Mel e Cera de Abelha</h1>
          <div className="meta">
            <span>📍 Goiás, Brasil</span>
            <span>✅ Certificação SISBI</span>
            <span>📦 Venda Nacional</span>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="content-section" id="sobre">
        <div className="container">
          <div className="split-layout">
            <div>
              <h2>Sobre o PIMEL</h2>
              <p>
                O PIMEL é um entreposto de mel e cera de abelha com certificação SISBI — 
                o selo que autoriza a venda para todo o território nacional. 
                Isso significa que supermercados, atacados e indústrias de qualquer 
                estado brasileiro podem comprar com a garantia de qualidade oficial.
              </p>
              <p>
                Já atende redes como Atacadão Dia a Dia, Tático, Super Adega, 
                Costa Atacado, Superbom, Caique e Armazém do Queijo. O portfólio 
                inclui mel natural, mel orgânico, linha premium de floradas, 
                própolis, pólen e compostos — tudo com rastreabilidade.
              </p>
            </div>
            <div className="highlight">
              <h3>🎯 Desafio Atual</h3>
              <p>
                Estratégia 100% presencial com alto custo operacional (~180 km/dia). 
                A meta é migrar para um modelo híbrido — digital + presencial — 
                para escalar a operação sem aumentar proporcionalmente os custos 
                de deslocamento. Potencial para estar em todas as capitais brasileiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="content-section" id="produtos" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <h2>Linhas e Produtos</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Linha</th>
                  <th>Produtos</th>
                  <th>Embalagem</th>
                  <th>Público</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mel Natural</td><td>Mel puro de abelha</td><td>1kg, 500g, 470g, 25kg (industrial)</td><td>Supermercados, Indústrias</td></tr>
                <tr><td>Mel Orgânico</td><td>Mel orgânico certificado</td><td>Vidro, plástico</td><td>Lojas naturais, Gourmet</td></tr>
                <tr><td>Linha Premium</td><td>3 floradas selecionadas</td><td>Embalagem especial</td><td>Mercado nobre, Presentes</td></tr>
                <tr><td>Própolis</td><td>Extrato de própolis</td><td>Frasco 20-30ml</td><td>Farmácias, Lojas naturais</td></tr>
                <tr><td>Pólen</td><td>Pólen apícola desidratado</td><td>Pote 100-200g</td><td>Lojas naturais, Atacado</td></tr>
                <tr><td>Compostos</td><td>Mel com própolis, gengibre, etc.</td><td>Pote 300-500g</td><td>Supermercados, Farmácias</td></tr>
                <tr><td>Sachês</td><td>Mel porção individual</td><td>Sachê 10-12g</td><td>Padarias, Hotéis, Restaurantes</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Estratégia */}
      <section className="content-section" id="estrategia">
        <div className="container">
          <h2>Plano de Marketing</h2>

          <h3>📌 Prospecção Ativa</h3>
          <p>Usando SalesQL + Google Maps para extrair leads de supermercados e atacados em todo Brasil:</p>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> Buscar "supermercado atacadista" + "mercearia" em cada capital</li>
            <li><span className="check-icon">✓</span> Pipeline no PipeRun para nutrir contatos B2B</li>
            <li><span className="check-icon">✓</span> Template de WhatsApp automático para primeiro contato</li>
            <li><span className="check-icon">✓</span> Meta: 300 leads/mês, 10% conversão em contato qualificado</li>
          </ul>

          <h3>📱 Marketing Digital</h3>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> Site com landing pages para cada linha</li>
            <li><span className="check-icon">✓</span> Conteúdo educativo sobre certificação SISBI</li>
            <li><span className="check-icon">✓</span> Redes sociais: LinkedIn (B2B) + Instagram (produto)</li>
            <li><span className="check-icon">✓</span> SEO: "mel a granel SISBI", "fornecedor de mel para supermercado"</li>
          </ul>

          <h3>🎯 Metas de Curto Prazo (30-60 dias)</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Ação</th><th>Prazo</th><th>Impacto</th></tr>
              </thead>
              <tbody>
                <tr><td>Criar Google Meu Negócio completo</td><td>7 dias</td><td>SEO Local</td></tr>
                <tr><td>4 artigos de blog (certificação, pureza, logística)</td><td>30 dias</td><td>Tráfego orgânico</td></tr>
                <tr><td>Landing page "Mel a Granel SISBI"</td><td>5 dias</td><td>Conversão B2B</td></tr>
                <tr><td>Diretórios agrícolas (10)</td><td>7 dias</td><td>Backlinks .gov/.org</td></tr>
                <tr><td>Amostras para 10 supermercados novos</td><td>15 dias</td><td>Novos clientes</td></tr>
              </tbody>
            </table>
          </div>

          <h3>🎯 Escala Nacional</h3>
          <div className="split-layout">
            <div>
              <h4>Fase 1 (0-3 meses)</h4>
              <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>
                Consolidar Goiás + DF. Extrair 300+ leads via prospecção ativa. 
                Fechar 5 novos supermercados/mês. Conteúdo digital rodando.
              </p>
            </div>
            <div>
              <h4>Fase 2 (3-6 meses)</h4>
              <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>
                Expandir para SP, RJ, MG. Parcerias com distribuidores regionais. 
                Presença em feiras do setor apícola. Site ranqueando organicamente.
              </p>
            </div>
          </div>

          <div className="highlight" style={{ marginTop: 24 }}>
            <h3>💡 Diferencial Competitivo</h3>
            <p>
              A certificação SISBI é o grande trunfo — poucos entrepostos têm esse selo, 
              e ele permite vender para TODO o Brasil. A estratégia de conteúdo 
              deve educar o mercado sobre o que o SISBI significa em termos de 
              qualidade, rastreabilidade e segurança alimentar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16 }}>Quer revender mel PIMEL?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 24px' }}>
            Entre em contato direto com Marcos e solicite sua proposta comercial. 
            Atendemos supermercados, atacados, padarias e indústrias em todo o Brasil.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20mel%20PIMEL" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            📱 Fale com Marcos no WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>PIMEL — Entreposto de Mel e Cera de Abelha · SISBI · Venda Nacional</p>
          <p style={{ marginTop: 8, fontSize: 13 }}><Link to="/">← Voltar ao portfólio</Link></p>
        </div>
      </footer>
    </div>
  )
}
