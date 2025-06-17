import React, { useState, useEffect } from 'react';
import './App.css';
import { ProvedorIdioma, usarIdioma } from './contexts/ContextoIdioma';
import FormularioInvestimento from './components/FormularioInvestimento';
import ExibicaoResultados from './components/ExibicaoResultados';
import GraficoInvestimento from './components/GraficoInvestimento';
import SeletorIdioma from './components/SeletorIdioma';

function ConteudoAplicacao() {
  const { t } = usarIdioma();
  const [dadosFormulario, setDadosFormulario] = useState({
    investimentoInicial: 10000,
    contribuicaoMensal: 500,
    periodoInvestimento: 10,
    taxaJurosAnual: 7
  });

  const [resultados, setResultados] = useState(null);
  const [dadosGrafico, setDadosGrafico] = useState([]);

  const calcularInvestimento = (dados) => {
    const { investimentoInicial, contribuicaoMensal, periodoInvestimento, taxaJurosAnual } = dados;
    
    const taxaMensal = taxaJurosAnual / 100 / 12;
    const totalMeses = periodoInvestimento * 12;
    
    let saldo = investimentoInicial;
    const pontosGrafico = [];
    
    pontosGrafico.push({
      year: 0,
      totalInvested: investimentoInicial,
      totalInterest: 0,
      finalAmount: investimentoInicial
    });

    for (let mes = 1; mes <= totalMeses; mes++) {
      saldo = saldo * (1 + taxaMensal) + contribuicaoMensal;
      
      if (mes % 12 === 0) {
        const ano            = mes / 12;
        const totalInvestido = investimentoInicial + (contribuicaoMensal * mes);
        const jurosTotais    = saldo - totalInvestido;
        
        pontosGrafico.push({
          year: ano,
          totalInvested: totalInvestido,
          totalInterest: jurosTotais,
          finalAmount: saldo
        });
      }
    }

    const totalInvestido = investimentoInicial + (contribuicaoMensal * totalMeses);
    const jurosTotais    = saldo - totalInvestido;
    
    setResultados({
      totalInvestido,
      jurosTotais,
      valorFinal: saldo
    });
    
    setDadosGrafico(pontosGrafico);
  };

  useEffect(() => {
    calcularInvestimento(dadosFormulario);
  }, [dadosFormulario]);

  const lidarMudancaFormulario = (novosDados) => {
    setDadosFormulario(novosDados);
  };

  return (
    <div className="aplicacao">
      <header className="cabecalho-aplicacao">
        <div className="conteudo-cabecalho">
          <div className="texto-cabecalho">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
          <SeletorIdioma />
        </div>
      </header>
      
      <main className="principal-aplicacao">
        <div className="container-calculadora">
          <FormularioInvestimento 
            dadosFormulario={dadosFormulario} 
            aoMudarFormulario={lidarMudancaFormulario} 
          />
          
          {resultados && (
            <>
              <ExibicaoResultados resultados={resultados} />
              <GraficoInvestimento dadosGrafico={dadosGrafico} />
            </>
          )}
        </div>
      </main>
      
      <footer className="rodape-aplicacao">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

function Aplicacao() {
  return (
    <ProvedorIdioma>
      <ConteudoAplicacao />
    </ProvedorIdioma>
  );
}

export default Aplicacao; 