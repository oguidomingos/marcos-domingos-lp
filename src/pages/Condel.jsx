import { Link } from 'react-router-dom'

export default function Condel() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon" style={{ background: '#2563eb' }}>C</span>
            Condel
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">← Voltar</Link></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#estrategia">Estratégia</a></li>
              <li><a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20comprar%20materiais%20el%C3%A9tricos%20da%20Condel" className="btn btn-primary">Cotar</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">← Todos os produtos</Link>
          <h1>⚡ Condel Condutores Elétricos</h1>
          <div className="meta">
            <span>📍 Brasília-DF</span>
            <span>🏬 150+ Lojas Atendidas</span>
            <span>🚚 Entrega Rápida</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="split-layout">
            <div>
              <h2>Sobre a Condel</h2>
              <p>
                A Condel Condutores Elétricos é uma distribuidora de materiais 
                elétricos com depósito próprio em Brasília. Já atende mais de 
                150 lojas, incluindo redes como Castelo Forte e Casa Forte.
              </p>
              <p>
                O diferencial está no preço competitivo e na entrega rápida 
                para todo o Distrito Federal. Trabalha com as principais marcas 
                do mercado, garantindo INMETRO em todos os produtos.
              </p>
            </div>
            <div className="highlight">
              <h3>🎯 Meta Financeira</h3>
              <p>
                <strong>Mês 1 (a partir de 25/05):</strong> R$ 25.000<br />
                <strong>Mês 2:</strong> R$ 35.000<br />
                <strong>Mês 3:</strong> R$ 45.000<br />
                <strong>Mês 5:</strong> R$ 60.000/mês<br /><br />
                <strong>Potencial anual:</strong> R$ 720.000+ em receita
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="produtos" style={{ background: 'var(--bg-panel)' }}>
        <div className="container">
          <h2>Portfólio de Produtos</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Produtos</th>
                  <th>Marcas</th>
                  <th>Público</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fios e Cabos</td><td>1,5mm a 12mm, cabos PP, alumínio, bobinas</td><td>Castelo Forte, Casa Forte</td><td>Lojas de material, Construtoras</td></tr>
                <tr><td>Aterramento</td><td>Hastes, cabos, conectores</td><td>Castelo Forte</td><td>Lojas de material elétrico</td></tr>
                <tr><td>Sonorização</td><td>Cabos de áudio, conectores</td><td>Diversas</td><td>Lojas de som, Instaladores</td></tr>
                <tr><td>Disjuntores</td><td>Disjuntores termomagnéticos, DR, DPS</td><td>Castelo Forte, Casa Forte</td><td>Lojas de material, Eletricistas</td></tr>
                <tr><td>Tomadas e Interruptores</td><td>Linhas completa</td><td>Castelo Forte</td><td>Lojas de construção</td></tr>
                <tr><td>Quadros Elétricos</td><td>QDC, QDF, painéis</td><td>Diversas</td><td>Construtoras, Indústrias</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section" id="estrategia">
        <div className="container">
          <h2>Plano de Expansão</h2>

          <h3>📌 Prospecção Ativa</h3>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> SalesQL: buscar "loja de material elétrico" + "material de construção" em Brasília-DF e entorno</li>
            <li><span className="check-icon">✓</span> ZonaCerta: mapeamento georreferenciado de 100 km ao redor do depósito</li>
            <li><span className="check-icon">✓</span> Pipeline "Condel - Revendedores" no PipeRun</li>
            <li><span className="check-icon">✓</span> Template WhatsApp: "Catálogo Completo - Preço de Distribuidor"</li>
            <li><span className="check-icon">✓</span> Meta: 150 leads/mês, 20% conversão (segmento nichado)</li>
          </ul>

          <h3>📱 Marketing Digital e SEO</h3>
          <ul className="checklist">
            <li><span className="check-icon">✓</span> Google Meu Negócio: "Distribuidora de Materiais Elétricos em Brasília"</li>
            <li><span className="check-icon">✓</span> Blog técnico: guia de compras para lojistas, dicas de estoque</li>
            <li><span className="check-icon">✓</span> Landing pages por categoria: cabos, disjuntores, quadros</li>
            <li><span className="check-icon">✓</span> Palavras-chave: "materiais elétricos atacado Brasília", "distribuidora de condutores elétricos"</li>
            <li><span className="check-icon">✓</span> Parceria com escolas técnicas e SENAI para conteúdo técnico</li>
          </ul>

          <h3>🎯 Cronograma de Receita</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Mês</th><th>Ações Principais</th><th>Receita</th></tr>
              </thead>
              <tbody>
                <tr><td>1 (Maio)</td><td>Prospecção ativa, cadastro de 150+ leads, primeiras visitas</td><td>R$ 25.000</td></tr>
                <tr><td>2</td><td>Fechar 15 novos clientes, SEO local rodando, blog ativo</td><td>R$ 35.000</td></tr>
                <tr><td>3</td><td>Expandir para 30+ clientes, parcerias com construtoras</td><td>R$ 45.000</td></tr>
                <tr><td>4</td><td>Conteúdo técnico ranqueando, leads orgânicos entrando</td><td>R$ 52.000</td></tr>
                <tr><td>5</td><td>Operação consolidada, planos de expansão para GO/MG</td><td>R$ 60.000+</td></tr>
              </tbody>
            </table>
          </div>

          <h3>⚡ Ações Práticas (30 Dias)</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Ação</th><th>Prazo</th></tr></thead>
              <tbody>
                <tr><td>Google Meu Negócio completo com fotos do depósito</td><td>5 dias</td></tr>
                <tr><td>Landing page "Materiais Elétricos para Revenda" com preços</td><td>5 dias</td></tr>
                <tr><td>Cadastro em 20+ diretórios de fornecedores de construção</td><td>10 dias</td></tr>
                <tr><td>Release para veículos locais sobre a distribuidora em Brasília</td><td>7 dias</td></tr>
                <tr><td>Publicar 4 artigos de blog (guias para revendedores)</td><td>20 dias</td></tr>
                <tr><td>Visitar pessoalmente 30 lojas de material elétrico</td><td>30 dias</td></tr>
              </tbody>
            </table>
          </div>

          <div className="highlight">
            <h3>💡 Diferencial Competitivo</h3>
            <p>
              A Condel tem um trunfo logístico: depósito próprio em Brasília 
              com estoque disponível, permitindo entrega rápida no DF. 
              Para lojistas, isso significa não precisar manter estoque grande — 
              compram sob demanda e recebem no dia seguinte. A combinação 
              de preço competitivo, marcas fortes (Castelo Forte, Casa Forte) 
              e logística rápida é difícil de bater.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16 }}>Quer revender materiais elétricos?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 24px' }}>
            Lojas de material de construção e elétrico — solicite seu 
            catálogo completo com tabela de preços para revendedor.
          </p>
          <a href="https://wa.me/5561936180578?text=Ol%C3%A1!%20Quero%20comprar%20materiais%20el%C3%A9tricos%20da%20Condel" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            📱 Fale com Marcos no WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Condel Condutores Elétricos — Distribuidora · Brasília-DF · Castelo Forte · Casa Forte</p>
          <p style={{ marginTop: 8, fontSize: 13 }}><Link to="/">← Voltar ao portfólio</Link></p>
        </div>
      </footer>
    </div>
  )
}
