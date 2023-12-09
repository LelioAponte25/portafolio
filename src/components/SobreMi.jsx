import React from 'react'
import './styles/Sobre.css'

const SobreMi = () => {
  return (
    <>
      <header className='encabezado'>
        <h2 className='en_h2'>Bienvenido a mi portafolio web</h2>
      </header>
      <article className='sobre'>
        <section className='sectionMi'>
          <div className='image_lelio'>
            <img src='lelio.jpg' className='rr' />
            <h2 className='h2_1'>Lelio Andres Aponte</h2>
            <h2 className='h2_2'>FULL-STACK DEVELOPER</h2>
          </div>
          <div className='container_description'>
            <h1 className='titulo_sobreMi'>Sobre Mi</h1>
            <p className='parrafo'>
              Soy Lelio Andrés Aponte,
              un Desarrollador Front-End y
              un estudiante de ingeniería electrónica
              con una fuerte pasión por la programación y
              el desarrollo web, enfocado en la disciplina full-stack.
              Mi enfoque en el aprendizaje continuo me ha permitido desarrollar
              habilidades técnicas y personales, destacando en trabajos en equipo y
              en la gestión de desafíos complejos. Comparto mis conocimientos en redes
              sociales y te invito a explorar mi trabajo en mi portafolio web.
            </p>
            <h2 className='subtittle1'>REDES SOCIALES DE CONTENIDO</h2>
            <ul className='list_web'>
              <a href='https://www.facebook.com/profile.php?id=61553143557489&mibextid=ZbWKwL' target='_blank'><li className='items_list'><img className='web_image' src='f.png'></img>Andres Aponte</li></a>
              <a href='https://www.tiktok.com/@andres_aponte25?_t=8hbVyBnzIYw&_r=1' target='_blank'><li className='items_list'><img className='web_image' src='t.png'></img>@andres_aponte25</li></a>
              <a href='https://www.twitch.tv/andres_aponte25' target='_blank'><li className='items_list'><img className='web_image' src='tw.png'></img>andres_aponte25</li></a>
              <a href='http://www.youtube.com/@andres_aponte25' target='_blank'><li className='items_list'><img className='web_image' src='y.png'></img>Andres Aponte🚀🧐</li></a>
            </ul>
          </div>
        </section>
      </article>

    </>

  )
}

export default SobreMi