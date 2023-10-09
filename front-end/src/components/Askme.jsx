import React from 'react';
import PropTypes from 'prop-types';

export default function Askme({ question, setQuestion }) {
  const [input, setInput] = React.useState('');

  const handleOnClick = () => {
    setQuestion([...question, input]);
    setInput('');
  };
  return (
    <div id="question-component">
      <div id="question-title">
        <span>
          Pergunte-me
        </span>
      </div>
      <div id="question-input-div">
        <input
          type="text"
          placeholder="Envie uma pergunta"
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
        />
      </div>
      <div id="question-button-div">
        <button
          onClick={ handleOnClick }
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

Askme.propTypes = {
  question: PropTypes.arrayOf(PropTypes.string).isRequired,
  setQuestion: PropTypes.func.isRequired,
};
