import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
      <div class="about-header">
        <h2>Sobre Mí</h2>
        ${Divider()}
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <div class="intro">
            <h3>¡Hola! Soy Juanita</h3>
            <p>Una programadora apasionada por crear mundos digitales únicos. Mi camino comenzó con la curiosidad por entender cómo funcionan los videojuegos, y ahora estoy dedicada a desarrollar experiencias interactivas que combinan tecnología, arte y música.</p>
          </div>
          
          <div class="passion">
            <h3>Mis Pasiones</h3>
            <div class="passion-grid">
              <div class="passion-item">
                <span class="icon">🎮</span>
                <h4>Desarrollo de Videojuegos</h4>
                
              </div>
              <div class="passion-item">
                <span class="icon">🎵</span>
                <h4>Música Digital</h4>
                <p>Explorando la síntesis sonora y la composición interactiva para crear paisajes sonoros que complementen las experiencias digitales.</p>
              </div>
              <div class="passion-item">
                <span class="icon">🎨</span>
                <h4>Arte Digital</h4>
                <p>Combinando código y creatividad para generar visuales únicos, desde pixel art hasta shaders complejos.</p>
              </div>
            </div>
          </div>
          
          <div class="skills">
            <h3>Tecnologías</h3>
            <div class="skills-container">
              <div class="skill-category">
                <h4>Desarrollo</h4>
                <div class="skill-tags">
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">C#</span>
                  <span class="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Game Dev</h4>
                <div class="skill-tags">
                  <span class="skill-tag">Unity</span>
                  <span class="skill-tag">Unreal Engine</span>
                  <span class="skill-tag">Godot</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Audio/Visual</h4>
                <div class="skill-tags">
                  <span class="skill-tag">Ableton Live</span>
                  <span class="skill-tag">Blender</span>
                  <span class="skill-tag">Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="profile-section">
            <div class="profile-image">
              <div class="image-placeholder">
                <span class="avatar">JZ</span>
              </div>
              <div class="image-effects"></div>
            </div>
            <div class="status">
              <span class="status-indicator"></span>
              <p>Disponible para proyectos</p>
            </div>
          </div>
          
          <div class="quote-section">
            <blockquote>
              "El código es poesía, los videojuegos son sinfonías, y cada bug es una oportunidad para crear algo mejor."
            </blockquote>
            <cite>- Juanita Zuluaga</cite>
          </div>
        </div>
      </div>
    </section>
  `;
};