//hijo 
import { useState } from 'react';

function Calculadora({ onCalcular, resultado }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const manejarClick = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor ingresa números válidos');
      return;
    }
    onCalcular(operacion, n1, n2);
  };

  return (
    <div className="calculadora">
      <div className="input-group">
        <input
          type="number"
          placeholder="Primer número"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Segundo número"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="botones">
        <button onClick={() => manejarClick('suma')}>+</button>
        <button onClick={() => manejarClick('resta')}>-</button>
        <button onClick={() => manejarClick('multiplica')}>×</button>
        <button onClick={() => manejarClick('divide')}>÷</button>
      </div>
      <div className="resultado">
        Resultado: <span>{resultado}</span>
      </div>
    </div>
  );
}

export default Calculadora;
