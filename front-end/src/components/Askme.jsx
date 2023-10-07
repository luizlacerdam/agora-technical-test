import React from 'react';

export default function Askme() {
  return (
    <div id="question-component">
      <div id="question-title">
        <span>
          Pergunte-me
        </span>
      </div>
      <div id="question-input-div">
        <input type="text" placeholder="Envie uma pergunta" />
      </div>
      <div id="question-button-div">
        <button>Enviar</button>
      </div>
    </div>
  );
}
