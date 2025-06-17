import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { usarIdioma } from '../contexts/ContextoIdioma';
import './GraficoInvestimento.css';

const GraficoInvestimento = ({ dadosGrafico }) => {
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

  const TooltipPersonalizado = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-grafico">
          <p className="ano-tooltip">Ano {label}</p>
          <div className="conteudo-tooltip">
            <div className="item-tooltip">
              <span className="rotulo-tooltip">{t.totalInvested}:</span>
              <span className="valor-tooltip investido">
                {formatarMoeda(payload[0].value)}
              </span>
            </div>
            <div className="item-tooltip">
              <span className="rotulo-tooltip">{t.totalInterestEarned}:</span>
              <span className="valor-tooltip juros">
                {formatarMoeda(payload[1].value)}
              </span>
            </div>
            <div className="item-tooltip">
              <span className="rotulo-tooltip">{t.finalAmount}:</span>
              <span className="valor-tooltip final">
                {formatarMoeda(payload[2].value)}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const LegendaPersonalizada = ({ payload }) => {
    return (
      <div className="legenda-grafico">
        {payload.map((entry, index) => (
          <div key={`legenda-${index}`} className="item-legenda">
            <div 
              className="cor-legenda" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="rotulo-legenda">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="grafico-investimento" aria-labelledby="titulo-grafico">
      <h2 id="titulo-grafico">{t.chartTitle}</h2>
      
      <div className="container-grafico">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={dadosGrafico}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e2e8f0"
              opacity={0.5}
            />
            <XAxis 
              dataKey="year" 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatarMoeda}
            />
            <Tooltip 
              content={<TooltipPersonalizado />}
              cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
            />
            <Legend content={<LegendaPersonalizada />} />
            <Line
              type="monotone"
              dataKey="totalInvested"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              name={t.totalInvested}
            />
            <Line
              type="monotone"
              dataKey="totalInterest"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              name={t.totalInterestEarned}
            />
            <Line
              type="monotone"
              dataKey="finalAmount"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              name={t.finalAmount}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="info-grafico">
        <p>
          {t.chartDescription}
        </p>
        <ul>
          <li><strong>{t.totalInvested}:</strong> {t.totalInvestedDescription}</li>
          <li><strong>{t.totalInterestEarned}:</strong> {t.interestEarnedDescription}</li>
          <li><strong>{t.finalAmount}:</strong> {t.finalAmountDescription}</li>
        </ul>
      </div>
    </section>
  );
};

export default GraficoInvestimento; 