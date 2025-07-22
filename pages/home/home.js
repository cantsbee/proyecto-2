
import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Juanita Zuluaga</h1>
    <p>Soy programadora apasionada por crear experiencias digitales que combinan
     tecnología, música y arte. Actualmente me encuentro trabajando hacia mi
     sueño de convertirme en desarrolladora de videojuegos. Me encanta explorar
     la intersección entre código y creatividad, ya sea desarrollando aplicaciones
     interactivas, componiendo paisajes sonoros digitales o creando experiencias
     visuales. Mi objetivo es crear juegos que cuenten historias significativas
     y conecten con los jugadores a nivel emocional a través del poder de la
     música, el arte y la jugabilidad innovadora.</p>
    <a href="mailto:juanita.zuluagaacosta@gmail.com">Escríbeme →</a>
    </section>`;
};