import React, { createContext, useContext, useState, useEffect } from 'react';
import { traducoes } from '../traducoes';

const ContextoIdioma = createContext();

export const usarIdioma = () => {
  const contexto = useContext(ContextoIdioma);
  if (!contexto) {
    throw new Error('usarIdioma deve ser usado dentro de um ProvedorIdioma');
  }
  return contexto;
};

export const ProvedorIdioma = ({ children }) => {
  const [idioma, setIdioma] = useState(() => {
    const idiomaSalvo = localStorage.getItem('calculadora-investimento-idioma');
    return idiomaSalvo || 'pt';
  });

  const [t, setT] = useState(traducoes[idioma]);

  useEffect(() => {
    setT(traducoes[idioma]);
    localStorage.setItem('calculadora-investimento-idioma', idioma);
  }, [idioma]);

  const alterarIdioma = (novoIdioma) => {
    if (traducoes[novoIdioma]) {
      setIdioma(novoIdioma);
    }
  };

  const valor = {
    idioma,
    t,
    alterarIdioma,
    idiomasDisponiveis: Object.keys(traducoes)
  };

  return (
    <ContextoIdioma.Provider value={valor}>
      {children}
    </ContextoIdioma.Provider>
  );
}; 