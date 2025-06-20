# Calculadora de Investimentos

Uma calculadora de investimentos moderna e responsiva construída com React. Planeje seu futuro financeiro com esta calculadora fácil de usar que mostra o crescimento do investimento ao longo do tempo.

## 🌐 Demo Online

**Acesse o projeto em:** [Calculadora de investimentos](https://investment-calculator-pi-lemon.vercel.app/)

## Funcionalidades

- 📱 **Totalmente Responsiva** - Funciona perfeitamente em dispositivos móveis, tablets e desktops
- 🎨 **Design Moderno** - Interface limpa e elegante com paleta de cores apropriada para aplicações financeiras
- ⚡ **Cálculos em Tempo Real** - Atualizações instantâneas conforme você altera os parâmetros de investimento
- 📊 **Gráfico Interativo** - Representação visual do crescimento do investimento ao longo do tempo
- ♿ **Acessível** - Construída com HTML semântico e rótulos ARIA adequados
- 🔢 **Cálculos Precisos** - Cálculos de juros compostos com contribuições mensais
- 🌍 **Suporte Multi-idioma** - Disponível em Português (Brasil) e Inglês

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

- **React** - React moderno com hooks
- **Recharts** - Gráficos bonitos e responsivos
- **CSS** - Estilização customizada com recursos modernos (sem Tailwind)
- **HTML** - Marcação acessível
- **Design Responsivo** - CSS Grid e Flexbox com media queries
- **Context API** - Gerenciamento de idioma e estado

## Estrutura do Projeto

```
src/
├── components/
│   ├── FormularioInvestimento.js      # Componente de formulário para parâmetros de entrada
│   ├── FormularioInvestimento.css     # Estilização do formulário
│   ├── ExibicaoResultados.js          # Componente de exibição de resultados
│   ├── ExibicaoResultados.css         # Estilização dos resultados
│   ├── GraficoInvestimento.js         # Componente de gráfico usando Recharts
│   ├── GraficoInvestimento.css        # Estilização do gráfico
│   ├── SeletorIdioma.js               # Componente seletor de idioma
│   └── SeletorIdioma.css              # Estilização do seletor de idioma
├── contexts/
│   └── ContextoIdioma.js              # Contexto de gerenciamento de idioma
├── traducoes.js                       # Strings de tradução
├── App.js                             # Componente principal da aplicação
├── App.css                            # Estilização principal da aplicação
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

### Breakpoints Responsivos
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Desktop Grande**: ≥ 1440px

## Contribuindo

Sinta-se à vontade para enviar issues e solicitações de melhorias!
