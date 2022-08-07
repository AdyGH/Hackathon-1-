import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [data, setData] = useState({"movies":[]});

  const name = "Minions"
  const description= "this is a description"
  const image="https://assets.cinepolisklic.com/cmsklicia/movieimages/minions/poster_originalsize_250X375.jpg"

  const fetchData = async () => {
    const out = await fetch('http://localhost:3001/movies')
    const json = await out.json()
    console.log(json)
    data.movies = json.movies
    setData(data)
  }

  const handleLogin = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: username,
        preferences: {
          enjoys: [
            "action",
            "comedy"
          ]
        }
      })
    };
    await fetch('http://localhost:3001/write/preferences', requestOptions)
    fetchData()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (

  <div>
    <header>
      <div class="container">
        <a href="index.html">
          <img href="https://cinepolis.com/" class="logo"/>
        </a> 
        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#sign">Sign In</a>          
            <a href="#cartelera">Cartelera</a>
            <a href="#servicios">Servicios</a>
            <a href="#contactanos">Contactános</a>

          </nav>
      </div>
    </header>
    <main>
      <h3>Log In</h3>
      <input
        value = {username}
        placeholder="your-username"
        onChange = {(e) => {setUsername(e.target.value)}}
        onKeyDown={handleKeyDown} 
      ></input>
      {/*SECCION INICIO*/}
      <section id="inicio">
        <img src="https://www.cinepolis.com.ar/images/4d/4d-3.jpg"/>
        <div class="bloque-inicio">
          <h1>Bienvenidos a Cinépolis</h1>
          <p>
            Lorem ipsum dolor sit amet
          </p>
          <a href="#cartelera" class="boton boton-rojo">Ver Cartelera</a>
        </div>  
      </section>

      {/*SECCION CARTELERA*/}
      <section id="cartelera" class="seccion">
        <div class="container">
          <div class="row"> {/* Primer renglòn de peliculas */}

            {data.movies.map(function(movie, i){
                console.log(movie, "hi")
                return (
                <div class="columna columa-33">
                  <div class="bloque-servicio">
                    <div class="bloque-img-servicio cuadrado-perfecto">
                      <img src={movie.image}/>
                    </div>
                    <div class="bloque-contenido-servicio">
                      <h3>{movie.name}</h3>
                      <p>{movie.description}</p>
                      <a href="#" class="boton boton-blanco">Ver más</a>
                    </div>
                  </div>
                </div>
                )
            })}

          </div>
        </div>  
      </section>


    </main>

  </div>

  



  );
}

export default App;
