import React, { useState, useRef, useEffect } from 'react';
import { usarIdioma } from '../contexts/ContextoIdioma';
import './SeletorIdioma.css';

const SeletorIdioma = () => {
  const { idioma, t, alterarIdioma, idiomasDisponiveis } = usarIdioma();
  const [aberto, setAberto] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const lidarCliqueExterno = (evento) => {
      if (dropdownRef.current && !dropdownRef.current.contains(evento.target)) {
        setAberto(false);
      }
    };

    document.addEventListener('mousedown', lidarCliqueExterno);
    return () => {
      document.removeEventListener('mousedown', lidarCliqueExterno);
    };
  }, []);

  const lidarMudancaIdioma = (novoIdioma) => {
    alterarIdioma(novoIdioma);
    setAberto(false);
  };

  const obterNomeIdioma = (codigoIdioma) => {
    switch (codigoIdioma) {
      case 'en':
        return t.english;
      case 'pt':
        return t.portuguese;
      default:
        return codigoIdioma.toUpperCase();
    }
  };

  const obterBandeiraIdioma = (codigoIdioma) => {
    switch (codigoIdioma) {
      case 'en':
        return '🇺🇸';
      case 'pt':
        return '🇧🇷';
      default:
        return '🌐';
    }
  };

  return (
    <div className="seletor-idioma" ref={dropdownRef}>
      <button
        className="botao-idioma"
        onClick={() => setAberto(!aberto)}
        aria-label={t.language}
        aria-expanded={aberto}
        aria-haspopup="listbox"
      >
        <span className="bandeira-idioma">{obterBandeiraIdioma(idioma)}</span>
        <span className="nome-idioma">{obterNomeIdioma(idioma)}</span>
        <svg 
          className={`seta-idioma ${aberto ? 'aberto' : ''}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      
      {aberto && (
        <div className="dropdown-idioma" role="listbox">
          {idiomasDisponiveis.map((codigoIdioma) => (
            <button
              key={codigoIdioma}
              className={`opcao-idioma ${idioma === codigoIdioma ? 'ativo' : ''}`}
              onClick={() => lidarMudancaIdioma(codigoIdioma)}
              role="option"
              aria-selected={idioma === codigoIdioma}
            >
              <span className="bandeira-idioma">{obterBandeiraIdioma(codigoIdioma)}</span>
              <span className="nome-idioma">{obterNomeIdioma(codigoIdioma)}</span>
              {idioma === codigoIdioma && (
                <svg 
                  className="icone-verificar"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeletorIdioma; 