import logo from './logo.svg';
import './App.css';

function App() {


  const name = "Minions"
  const description= "this is a description"
  const image="https://assets.cinepolisklic.com/cmsklicia/movieimages/minions/poster_originalsize_250X375.jpg"

  const jsonData = {
    "movies" : [
      {
        "name": "Fast and Furious: 14",
        "stars": 5,
        "description": "this is a description",
        "image": "string-encoded-image",
        "preview": "youtube-link.com"
      },
    ],
  }

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

            {/* Primer pélicula */}
            <div class="columna columa-33">
              <div class="bloque-servicio">
                <div class="bloque-img-servicio cuadrado-perfecto">
                  <img src={image}/>
                </div>
                <div class="bloque-contenido-servicio">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href="#" class="boton boton-blanco">Ver más</a>
                </div>
              </div>
            </div>

             {/* Segunda pélicula */}
             <div class="columna columa-33">
              <div class="bloque-servicio">
                <div class="bloque-img-servicio cuadrado-perfecto">
                  <img src={image}/>
                </div>
                <div class="bloque-contenido-servicio">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href="#" class="boton boton-blanco">Ver más</a>
                </div>
              </div>
            </div>

             {/* Tercer pélicula */}
             <div class="columna columa-33">
              <div class="bloque-servicio">
                <div class="bloque-img-servicio cuadrado-perfecto">
                  <img src={image}/>
                </div>
                <div class="bloque-contenido-servicio">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href="#" class="boton boton-blanco">Ver más</a>
                </div>
              </div>
            </div>






          </div>
        </div>  
      </section>


    </main>

  </div>

  



  );
}

export default App;
