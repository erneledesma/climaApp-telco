import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";


function App() {

  // state del formulario
  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais:''
  });

  const [consultar, guardarConsulta] = useState(false)

  const { ciudad, pais} = busqueda; 

  useEffect( () => {
    const consultarApi = async () => {

      const appID = '0a560d294584f280f622fecd2de96637'
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);

    }
    consultarApi()
  }, [consultar]);

  return (
   <Fragment>
    
     <Header
     titulo='Clima react App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
               />
            </div>
          </div>
        </div>
    


        <div className="col m6 s12">
          2
        </div>

      </div>
   </Fragment>
  );
}

export default App;
