import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [numero,setNumero] = useState('');



  function bloquearNumeros(event) {

    const entrada = event.target.value;
    let cantidad = 0;
    for(let i = 0;i<entrada.length;i++){
      if(entrada[i] == '0' || entrada[i] == '1'){
        cantidad++;
      }
      if(cantidad == entrada.length){
        setNumero(entrada)
      }
    }


  }


  

  return (
    <div >
      <input type='number' value={numero} onChange={bloquearNumeros} />
    </div>
  );
}

export default App;
