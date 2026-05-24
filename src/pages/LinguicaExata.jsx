import { Link } from 'react-router-dom'

export default function LinguicaExata() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon" style={{ background: '#dc2626' }}>L</span>
            Linguiça Exata
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">← Voltar</Link></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#precos">Preços</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20comprar%20lingui%C3%A7a%20artesanal%20da%20Lingui%C3%A7a%20Exata" className="btn btn-primary">Encomendar</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">← Todos os produtos</Link>
          <h1>🥩 Linguiça Exata — Artesanal</h1>
          <div className="meta">
            <span>📍 Anápolis-GO</span>
            <span>🎯 300 → 2.000 kg/semana</span>
            <span>🏭 Desde 2000</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="sobre">
        <div className="container">
          <div className="split-layout">
            <div>
              <h2>Sobre a Linguiça Exata</h2>
              <p>
                Fundada em 2000 em Anápolis-GO, a Linguiça Exata é referência 
                local em produção de linguiças artesanais. Com receitas 
                tradicionais e padrão de qualidade que conquistou supermercados, 
                padarias, restaurantes e churrascarias da região.
              </p>
              <p>
                O processo artesanal garante um sabor que se destaca frente 
                às grandes indústrias — e o preço competitivo (R$20-R$24/kg) 
                torna o produto acessível para qualquer estabelecimento que 
                queira oferecer uma opção superior.
              </p>
            </div>
            <div className="highlight">
              <h3>🎯 Meta de Crescimento</h3>
              <p>
                <strong>Curto prazo:</strong> 300 kg/semana<br />
                <strong>Médio prazo (3-5 meses):</strong> 2.000 kg/semana<br /><br />
                <strong>Potencial de receita:</strong><br />
                300 kg × R$22 (médio) = <strong>R$ 6.720/semana</strong> →<br />
                2.000 kg × R$22 = <strong>R$ 44.800/semana</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="precos" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <h2>Linhas e Preços (Atacado)</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Linha</th>
                  <th>Descrição</th>
                  <th>Embalagem</th>
                  <th>Preço/kg</th>
                  <th>Indicado para</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fina Frango</td><td>Linguiça de frango temperada</td><td>Pacote 5kg</td><td>R$ 20</td><td>Padarias, Restaurantes</td></tr>
                <tr><td>Fina Porco</td><td>Linguiça suína fina</td><td>Pacote 5kg</td><td>R$ 22</td><td>Supermercados, Mercearias</td></tr>
                <tr><td>Grossa Suína</td><td>Linguiça suína grossa</td><td>Pacote 5kg</td><td>R$ 24</td><td>Churrascarias, Açougues</td></tr>
                <tr><td>Bacon</td><td>Linguiça com bacon</td><td>Pacote 5kg</td><td>R$ 24</td><td>Hamburguerias, Bares</td></tr>
                <tr><td>Queijo Coalho</td><td>Linguiça com queijo coalho</td><td>Pacote 5kg</td><td>R$ 24</td><td>Restaurantes, Eventos</td></tr>
                <tr><td>Bandeja 500g</td><td>Porção individual a vácuo</td><td>Bandeja 500g</td><td>R$ 14</td><td>Consumidor final</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Plano de Marketing e Crescimento</h2>

          <h3>📌 Prospecção Ativa</h3>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> SalesQL: buscar "padaria" + "restaurante" + "churrascaria" em Anápolis, Goiânia, Brasília</li>
            <li><span className="check-icon">✓</span> ZonaCerta: refinar por raio de 30 km de Anápolis</li>
            <li><span className="check-icon">✓</span> Pipeline "Food Service" no PipeRun (CRM)</li>
            <li><span className="check-icon">✓</span> Template WhatsApp: "Degustação Grátis — Linguiça Artesanal"</li>
            <li><span className="check-icon">✓</span> Meta: 300 leads/mês, 15% conversão</li>
          </ul>

          <h3>📱 Marketing Digital e SEO</h3>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> Google Meu Negócio: "Linguiça Artesanal Anápolis — Fábrica e Venda no Atacado"</li>
            <li><span className="check-icon">✓</span> Blog: artigos sobre uso de linguiça artesanal em restaurantes</li>
            <li><span className="check-icon">✓</span> Landing page: "Fornecedor de Linguiça para Restaurantes em Goiás"</li>
            <li><span className="check-icon">✓</span> Palavras-chave: "linguiça artesanal atacado", "fornecedor de linguiça para restaurante"</li>
            <li><span className="check-icon">✓</span> Vídeo tour da fábrica para YouTube + Instagram</li>
          </ul>

          <h3>🎯 Cronograma de Escala</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Semana</th><th>Ação</th><th>Meta kg/sem</th><th>Receita Semanal</th></tr>
              </thead>
              <tbody>
                <tr><td>1-2</td><td>Prospecção ativa (300 leads), degustações em 20 estabelecimentos</td><td>300</td><td>R$ 6.720</td></tr>
                <tr><td>3-4</td><td>Fechar 5 primeiros clientes B2B, SEO local rodando</td><td>500</td><td>R$ 11.200</td></tr>
                <tr><td>5-8</td><td>Expandir para Goiânia, conteúdo digital semanal</td><td>800</td><td>R$ 17.920</td></tr>
                <tr><td>9-12</td><td>Entrar em Brasília, parcerias com distribuidores</td><td>1.200</td><td>R$ 26.880</td></tr>
                <tr><td>13-20</td><td>Consolidar região, novos produtos (defumados, salsichão)</td><td>2.000</td><td>R$ 44.800</td></tr>
              </tbody>
            </table>
          </div>

          <h3>🤝 Ações Práticas (30 Dias)</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Ação</th><th>Prazo</th></tr></thead>
              <tbody>
                <tr><td>Otimizar Google Meu Negócio com fotos da fábrica + produtos</td><td>5 dias</td></tr>
                <tr><td>Criar landing page "Fornecedor de Linguiça para Restaurantes"</td><td>5 dias</td></tr>
                <tr><td>Cadastrar em 15 diretórios de fornecedores alimentícios</td><td>10 dias</td></tr>
                <tr><td>Produzir vídeo tour da produção (YouTube + Instagram)</td><td>7 dias</td></tr>
                <tr><td>Distribuir amostras grátis para 20 estabelecimentos</td><td>15 dias</td></tr>
                <tr><td>Solicitar 15 avaliações de clientes atuais</td><td>15 dias</td></tr>
              </tbody>
            </table>
          </div>

          <div className="highlight">
            <h3>💡 Estratégia de Degustação</h3>
            <p>
              O maior trunfo da Linguiça Exata é o SABOR. Uma estratégia de 
              degustação gratuita em churrascarias e restaurantes de Goiânia + 
              Brasília pode gerar conversão de 30-50% — muito acima da mídia 
              do setor alimentício (5-10%). Invista em amostras antes de 
              fechar contrato.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16 }}>Quer revender Linguiça Exata?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 24px' }}>
            Supermercados, padarias, restaurantes e churrascarias — 
            entre em contato e solicite sua degustação.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Lingui%C3%A7a%20Exata" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            📱 Fale com Marcos no WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Linguiça Exata — Fábrica de Linguiças Artesanais · Anápolis-GO · Desde 2000</p>
          <p style={{ marginTop: 8, fontSize: 13 }}><Link to="/">← Voltar ao portfólio</Link></p>
        </div>
      </footer>
    </div>
  )
}
