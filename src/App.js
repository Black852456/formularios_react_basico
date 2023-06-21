import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const diassemana = [
    "lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

const [dia,setDiaSeleccionado] = useState('');

  function diaSeleccionado(e){
    
    setDiaSeleccionado(e.target.value)
  }

  return (
    <div>
      <select onChange={diaSeleccionado}>
        {diassemana.map((dia) => {
          return <option value={dia}>{dia}</option>;
        })}
      </select>
      <p>{dia}</p>
    </div>
  );
}

export default App;
