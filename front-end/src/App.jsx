import React from 'react';
import './App.css';
import Askme from './components/Askme';
import Questions from './components/Questions';

function App() {
  const [question, setQuestion] = React.useState([]);
  return (
    <div id="phone-wrapper">
      <div id="app">
        <Askme
          question={ question }
          setQuestion={ setQuestion }
        />
        { question.length > 0 && (
          <Questions question={ question } />
        )}
      </div>
    </div>
  );
}

export default App;
