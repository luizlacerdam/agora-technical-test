import React from 'react';
import PropTypes from 'prop-types';

export default function Questions({ question }) {
  return (
    <div id="questions-component">
      {question.map((item, index) => (
        <div key={ index } className="question">
          <div className="question-text">{item}</div>
        </div>
      ))}
    </div>
  );
}

Questions.propTypes = {
  question: PropTypes.arrayOf(PropTypes.string).isRequired,
};
