import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

const[estudios,setEstudios] = useState('Primario');

function cambio(e){
  setEstudios(e.target.value);
}

  return (
    <div>
     <input id="primario" type="radio" name="estudio" value="Primario" checked={estudios == 'Primario'} onChange={cambio}/>
     <label for="primario">Primaria</label><br></br>
     <input id="secundaria" type="radio" name="estudio" value="Secundario" checked={estudios == 'Secundario'} onChange={cambio}/>
     <label for="secundaria">Secundaria</label><br></br>
     <input id="universitario" type="radio" name="estudio" value="Universitario" checked={estudios == 'Universitario'} onChange={cambio}/>
     <label for="universitario">Universitario</label><br></br>
     <p>{estudios}</p>
    </div>
  );
}

export default App;
