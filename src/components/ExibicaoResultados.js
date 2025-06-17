import React from 'react';
import { usarIdioma } from '../contexts/ContextoIdioma';
import './ExibicaoResultados.css';

const ExibicaoResultados = ({ resultados }) => {
  const { t, idioma } = usarIdioma();

  const formatarMoeda = (valor) => {
    const locale = idioma === 'pt' ? 'pt-BR' : 'en-US';
    const currency = idioma === 'pt' ? 'BRL' : 'USD';
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  };

  const formatarPercentual = (valor, total) => {
    const percentual = total > 0 ? (valor / total) * 100 : 0;
    return `${percentual.toFixed(1)}%`;
  };

  const { totalInvestido, jurosTotais, valorFinal } = resultados;

  return (
    <section className="exibicao-resultados" aria-labelledby="titulo-resultados">
      <h2 id="titulo-resultados">{t.resultsTitle}</h2>
      
      <div className="grade-resultados">
        <div className="cartao-resultado total-investido">
          <div className="icone-resultado">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="conteudo-resultado">
            <h3>{t.totalInvested}</h3>
            <div className="valor-resultado">{formatarMoeda(totalInvestido)}</div>
            <div className="percentual-resultado">
              {formatarPercentual(totalInvestido, valorFinal)} {t.ofFinalAmount}
            </div>
          </div>
        </div>

        <div className="cartao-resultado juros-totais">
          <div className="icone-resultado">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4z" />
            </svg>
          </div>
          <div className="conteudo-resultado">
            <h3>{t.totalInterestEarned}</h3>
            <div className="valor-resultado">{formatarMoeda(jurosTotais)}</div>
            <div className="percentual-resultado">
              {formatarPercentual(jurosTotais, valorFinal)} {t.ofFinalAmount}
            </div>
          </div>
        </div>

        <div className="cartao-resultado valor-final">
          <div className="icone-resultado">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="conteudo-resultado">
            <h3>{t.finalAmount}</h3>
            <div className="valor-resultado final">{formatarMoeda(valorFinal)}</div>
            <div className="percentual-resultado">
              {t.totalAfterGrowth.replace('{growth}', Math.round((valorFinal / totalInvestido - 1) * 100))}
            </div>
          </div>
        </div>
      </div>

      <div className="resumo-resultados">
        <div className="estatistica-resumo">
          <span className="rotulo-estatistica">{t.growthRate}</span>
          <span className="valor-estatistica">
            {totalInvestido > 0 ? ((valorFinal / totalInvestido - 1) * 100).toFixed(1) : 0}%
          </span>
        </div>
        <div className="estatistica-resumo">
          <span className="rotulo-estatistica">{t.interestRatio}</span>
          <span className="valor-estatistica">
            {totalInvestido > 0 ? (jurosTotais / totalInvestido).toFixed(2) : 0}x
          </span>
        </div>
        <div className="estatistica-resumo">
          <span className="rotulo-estatistica">{t.averageAnnualReturn}</span>
          <span className="valor-estatistica">
            {totalInvestido > 0 ? ((Math.pow(valorFinal / totalInvestido, 1/10) - 1) * 100).toFixed(1) : 0}%
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExibicaoResultados; 