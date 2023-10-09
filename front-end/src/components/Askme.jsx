import React from 'react';
import PropTypes from 'prop-types';

export default function Askme({ question, setQuestion }) {
  const [input, setInput] = React.useState('');
  const MAX_LENGTH = 50;
  const MAX_QUESTIONS = 3;

  const handleOnClick = () => {
    if (input === '' || input.length > MAX_LENGTH) return;

    setQuestion([...question, input]);
    setInput('');
  };
  return (
    <div id="askme-component">
      <div id="askme-title">
        <span>
          Pergunte-me
        </span>
      </div>
      { question.length === MAX_QUESTIONS && (
        <div id="askme-pop">
          <span id="pop-number">
            {question.length}
          </span>
          <span>
            Perguntas
          </span>
        </div>)}
      { question.length < MAX_QUESTIONS && (
        <>
          <div id="askme-input-div">
            <input
              type="text"
              placeholder="Envie uma pergunta"
              value={ input }
              onChange={ (e) => setInput(e.target.value) }
              maxLength={ MAX_LENGTH }
            />
          </div>
          <div id="askme-button-div">
            <button
              onClick={ handleOnClick }
            >
              Enviar
            </button>
          </div>
        </>)}
    </div>
  );
}

Askme.propTypes = {
  question: PropTypes.arrayOf(PropTypes.string).isRequired,
  setQuestion: PropTypes.func.isRequired,
};
