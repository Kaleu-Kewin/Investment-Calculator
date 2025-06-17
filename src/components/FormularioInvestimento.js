import React from 'react';
import { usarIdioma } from '../contexts/ContextoIdioma';
import './FormularioInvestimento.css';

const FormularioInvestimento = ({ dadosFormulario, aoMudarFormulario }) => {
  const { t, idioma } = usarIdioma();

  const lidarMudancaInput = (e) => {
    const { name, value } = e.target;
    const valorNumerico = parseFloat(value) || 0;
    
    aoMudarFormulario({
      ...dadosFormulario,
      [name]: valorNumerico
    });
  };

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

  const formatarPercentual = (valor) => {
    return `${valor}%`;
  };

  const obterSufixoMoeda = () => {
    return idioma === 'pt' ? 'BRL' : 'USD';
  };

  return (
    <section className="formulario-investimento" aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">{t.formTitle}</h2>
      <form className="grade-formulario">
        <div className="grupo-formulario">
          <label htmlFor="investimentoInicial">
            {t.initialInvestment}
            <span className="obrigatorio" aria-label={t.required}>*</span>
          </label>
          <div className="wrapper-input">
            <input
              type="number"
              id="investimentoInicial"
              name="investimentoInicial"
              value={dadosFormulario.investimentoInicial}
              onChange={lidarMudancaInput}
              min="0"
              step="100"
              required
              aria-describedby="ajuda-investimento-inicial"
            />
            <span className="sufixo-input">{obterSufixoMoeda()}</span>
          </div>
          <div id="ajuda-investimento-inicial" className="texto-ajuda">
            {t.initialInvestmentHelp}
          </div>
        </div>

        <div className="grupo-formulario">
          <label htmlFor="contribuicaoMensal">
            {t.monthlyContribution}
            <span className="obrigatorio" aria-label={t.required}>*</span>
          </label>
          <div className="wrapper-input">
            <input
              type="number"
              id="contribuicaoMensal"
              name="contribuicaoMensal"
              value={dadosFormulario.contribuicaoMensal}
              onChange={lidarMudancaInput}
              min="0"
              step="50"
              required
              aria-describedby="ajuda-contribuicao-mensal"
            />
            <span className="sufixo-input">{obterSufixoMoeda()}</span>
          </div>
          <div id="ajuda-contribuicao-mensal" className="texto-ajuda">
            {t.monthlyContributionHelp}
          </div>
        </div>

        <div className="grupo-formulario">
          <label htmlFor="periodoInvestimento">
            {t.investmentPeriod}
            <span className="obrigatorio" aria-label={t.required}>*</span>
          </label>
          <div className="wrapper-input">
            <input
              type="number"
              id="periodoInvestimento"
              name="periodoInvestimento"
              value={dadosFormulario.periodoInvestimento}
              onChange={lidarMudancaInput}
              min="1"
              max="50"
              step="1"
              required
              aria-describedby="ajuda-periodo-investimento"
            />
            <span className="sufixo-input">{t.years}</span>
          </div>
          <div id="ajuda-periodo-investimento" className="texto-ajuda">
            {t.investmentPeriodHelp}
          </div>
        </div>

        <div className="grupo-formulario">
          <label htmlFor="taxaJurosAnual">
            {t.annualInterestRate}
            <span className="obrigatorio" aria-label={t.required}>*</span>
          </label>
          <div className="wrapper-input">
            <input
              type="number"
              id="taxaJurosAnual"
              name="taxaJurosAnual"
              value={dadosFormulario.taxaJurosAnual}
              onChange={lidarMudancaInput}
              min="0"
              max="20"
              step="0.1"
              required
              aria-describedby="ajuda-taxa-juros"
            />
            <span className="sufixo-input">{t.percent}</span>
          </div>
          <div id="ajuda-taxa-juros" className="texto-ajuda">
            {t.interestRateHelp}
          </div>
        </div>
      </form>

      <div className="resumo-formulario">
        <h3>{t.summary}</h3>
        <div className="grade-resumo">
          <div className="item-resumo">
            <span className="rotulo-resumo">{t.initialInvestmentLabel}</span>
            <span className="valor-resumo">{formatarMoeda(dadosFormulario.investimentoInicial)}</span>
          </div>
          <div className="item-resumo">
            <span className="rotulo-resumo">{t.monthlyContributionLabel}</span>
            <span className="valor-resumo">{formatarMoeda(dadosFormulario.contribuicaoMensal)}</span>
          </div>
          <div className="item-resumo">
            <span className="rotulo-resumo">{t.investmentPeriodLabel}</span>
            <span className="valor-resumo">{dadosFormulario.periodoInvestimento} {t.years}</span>
          </div>
          <div className="item-resumo">
            <span className="rotulo-resumo">{t.annualInterestRateLabel}</span>
            <span className="valor-resumo">{formatarPercentual(dadosFormulario.taxaJurosAnual)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioInvestimento; 