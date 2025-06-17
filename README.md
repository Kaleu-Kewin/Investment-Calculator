# Calculadora de Investimentos

Uma calculadora de investimentos moderna e responsiva construída com React. Planeje seu futuro financeiro com esta calculadora fácil de usar que mostra o crescimento do investimento ao longo do tempo.

## Funcionalidades

📱 **Totalmente Responsiva** - Funciona perfeitamente em dispositivos móveis, tablets e desktops
🎨 **Design Moderno** - Interface limpa e elegante com paleta de cores apropriada para aplicações financeiras
⚡ **Cálculos em Tempo Real** - Atualizações instantâneas conforme você altera os parâmetros de investimento
📊 **Gráfico Interativo** - Representação visual do crescimento do investimento ao longo do tempo
♿ **Acessível** - Construída com HTML semântico e rótulos ARIA adequados
🔢 **Cálculos Precisos** - Cálculos de juros compostos com contribuições mensais
🌍 **Suporte Multi-idioma** - Disponível em Português (Brasil) e Inglês

## Parâmetros de Investimento

- **Investimento Inicial** - Seu valor inicial de investimento
- **Contribuição Mensal** - Valor que você contribuirá mensalmente
- **Período de Investimento** - Por quanto tempo você planeja investir (1-50 anos)
- **Taxa de Juros Anual Esperada** - Taxa de retorno anual esperada (0-20%)

## Resultados Exibidos

- **Total Investido** - Suas contribuições cumulativas
- **Juros Totais Ganhos** - Juros compostos gerados
- **Valor Final** - Valor total do seu investimento
- **Estatísticas de Crescimento** - Taxa de crescimento, razão de juros e retorno médio anual

## Tecnologias Utilizadas

- **React 18** - React moderno com hooks
- **Recharts** - Gráficos bonitos e responsivos
- **CSS3** - Estilização customizada com recursos modernos (sem Tailwind)
- **HTML Semântico** - Marcação acessível
- **Design Responsivo** - CSS Grid e Flexbox com media queries
- **Context API** - Gerenciamento de idioma e estado

## Como Começar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou baixe os arquivos
2. Navegue até o diretório do projeto
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Construindo para Produção

```bash
npm run build
```

Isso cria uma build otimizada para produção na pasta `build`.

## Estrutura do Projeto

```
src/
├── componentes/
│   ├── FormularioInvestimento.js      # Componente de formulário para parâmetros de entrada
│   ├── FormularioInvestimento.css     # Estilização do formulário
│   ├── ExibicaoResultados.js          # Componente de exibição de resultados
│   ├── ExibicaoResultados.css         # Estilização dos resultados
│   ├── GraficoInvestimento.js         # Componente de gráfico usando Recharts
│   ├── GraficoInvestimento.css        # Estilização do gráfico
│   ├── SeletorIdioma.js               # Componente seletor de idioma
│   └── SeletorIdioma.css              # Estilização do seletor de idioma
├── contextos/
│   └── ContextoIdioma.js              # Contexto de gerenciamento de idioma
├── traducoes.js                       # Strings de tradução
├── Aplicacao.js                       # Componente principal da aplicação
├── Aplicacao.css                      # Estilização principal da aplicação
├── index.js                           # Ponto de entrada do React
└── index.css                          # Estilos globais
```

## Suporte a Idiomas

A aplicação suporta múltiplos idiomas com um seletor de idioma moderno:

- **Português - Brasil (🇧🇷)** - Idioma padrão
- **English (🇺🇸)** - Tradução completa

### Recursos de Idioma

- **Seleção de Idioma Persistente** - Sua escolha de idioma é salva no localStorage
- **Tradução em Tempo Real** - Todo o texto é atualizado imediatamente quando o idioma é alterado
- **Seletor de Idioma Acessível** - Navegação por teclado e suporte a leitores de tela
- **Ícones de Bandeira** - Identificação visual de idioma com bandeiras de países

## Recursos de Design

### Paleta de Cores
- **Azul Primário**: #1e40af (confiável, financeiro)
- **Verde de Sucesso**: #10b981 (crescimento, retornos positivos)
- **Roxo de Destaque**: #8b5cf6 (premium, sofisticado)
- **Cinzas Neutros**: Várias tonalidades para texto e fundos

### Breakpoints Responsivos
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Desktop Grande**: ≥ 1440px

### Recursos de Acessibilidade
- Estrutura HTML semântica
- Rótulos e descrições ARIA
- Suporte à navegação por teclado
- Esquema de cores de alto contraste
- Indicadores de foco
- Amigável para leitores de tela
- Suporte multi-idioma com atributos de idioma apropriados

## Suporte a Navegadores

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

## Licença

Este projeto é de código aberto e está disponível sob a [Licença MIT](LICENSE).

## Contribuindo

Sinta-se à vontade para enviar issues e solicitações de melhorias!

### Adicionando Novos Idiomas

Para adicionar um novo idioma:

1. Adicione o código do idioma e traduções ao `src/traducoes.js`
2. Atualize o seletor de idioma em `src/componentes/SeletorIdioma.js`
3. Teste a tradução completamente

---

**Planeje com sabedoria, invista com inteligência.** 💰📈 