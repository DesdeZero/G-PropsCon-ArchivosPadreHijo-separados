//padre 

import { useState } from 'react';
import Calculadora from './Calculadora';
import './App.css';

function App() {
  const [resultado, setResultado] = useState(0);

  const calcular = (operacion, a, b) => {
    let res = 0;
    switch (operacion) {
      case 'suma':
        res = a + b;
        break;
      case 'resta':
        res = a - b;
        break;
      case 'multiplica':
        res = a * b;
        break;
      case 'divide':
        if (b === 0) {
          alert('No se puede dividir entre cero');
          res = 'Error';
        } else {
          res = a / b;
        }
        break;
      default:
        res = 0;
    }
    setResultado(res);
  };

  return (
    <div className="app-container">
      <h1>🧮 Calculadora con Props</h1>
      <Calculadora onCalcular={calcular} resultado={resultado} />
      <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#475569' }}>
        Las operaciones están definidas en el componente padre.
      </p>
    </div>
  );
}

export default App;

