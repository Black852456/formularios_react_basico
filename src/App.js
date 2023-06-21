import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [datos,setDatos] = useState(
    {
      nombre:'',
      edad:'',
      estudios:false
    }
  );

  function cambiarNombre(e){
    setDatos((valores) => ({
      ...valores,
      nombre:e.target.value
    }));
  }

  function cambiarEdad(e){
    setDatos((valores) => ({
      ...valores,
      edad:e.target.value
    }));
  }

  function cambiarEstudios(e){
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios
    }));
  }

function procesar(e){
  e.preventDefault();
  alert(
    datos.nombre+"  "+datos.edad+"  "+datos.estudios
  );
}

  return (
    <div >
      <form onSubmit={procesar}> 
      <div>
        <p>Ingrese su nombre:</p>
        <input type='text' value={datos.nombre} onChange={cambiarNombre}/>
        </div>
        <div>
        <p>Ingrese su Edad:</p>
        <input type='text' value={datos.edad} onChange={cambiarEdad}/>
        </div>
        <div>
        <p>Estudios:</p>
        <input type='checkbox' value={datos.estudios} onChange={cambiarEstudios}/>
        </div>
        <p>
          <input type='submit'/> 
        </p>
      </form>
      <hr/>
      <h3>Datos ingresados</h3>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p>
      <p>Estudios: {datos.estudios ? 'Con estudios' : 'Sin estudios'}</p>
    </div>
  );
}

export default App;
