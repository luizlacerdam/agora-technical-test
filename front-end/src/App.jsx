import React from 'react';
import './App.css';
import Askme from './components/Askme';

function App() {
  const [question, setQuestion] = React.useState([]);
  return (
    <div id="phone-wrapper">
      <div id="app">
        <Askme
          question={ question }
          setQuestion={ setQuestion }
        />
      </div>
    </div>
  );
}

export default App;
