import React, { useState } from 'react';
import './styles/Videos.css'

export const Videos = () => {
  const [links, setLinks] = useState(1);
  const linksMovie = 1;

  const indexlast1 = links * linksMovie;
  const indexfirst1 = indexlast1 - linksMovie;

  // Array de proyectos
  const iframe = [
    {

      title:'video1',
      name: 'Programación en JAVA ||Con INTELLIJ IDEA|| INTERFAZ DE VENTANA || (primer video enseñando).',
      link: 'https://www.youtube.com/embed/AuojK412XHU?si=GUMo0Xr9M-Zwf_dp',
    },
    {
      title:'video2',
      name: 'EJERCICIO DE JAVASCRIPT. convirtiendo un camelCase en una cadena normal.',
      link: 'https://www.youtube.com/embed/79AMxEGbjo4?si=KnIuqFF_tUQUL5uK',
    },
    {
      title:'video2',
      name: 'EJERCICIO DE JAVASCRIPT #2. La secesión de FIBONACCI',
      link: 'https://www.youtube.com/embed/NMfZ8b8eQJs?si=gz-B4KY_j03ftLzJ',
    },
    {
      title:'video2',
      name: 'CREACION DE UNA APP WEB CON REACT.JS UTILIZANDO LA APIREST DE LA NASA',
      link: 'https://www.youtube.com/embed/V9C9aDF4EHk?si=OfHvs9NLwZggx-qL',
    },
    {
      title:'video2',
      name: 'DISEÑANDO BOTONES DE PAGINACION DE UN PROYECTO CON CSS',
      link: 'https://www.youtube.com/embed/9BecHVyuVko?si=-sBGGBv9fbV_J5J4',
    },
    {
      title:'video2',
      name: 'MOSTRANDO DOS DE MIS GRANDES PROYECTOS HECHOS CON REACR.JS',
      link: 'https://www.youtube.com/embed/3r3J4YLp1h0?si=sApJu_bNniYdtw39',
    },
    {
      title:'video2',
      name: 'programa para LCD y TECLADO en pruteus programado en lenguaje C',
      link: 'https://www.youtube.com/embed/ZAAonOB2AgI?si=wZuLhdiMsmQ5lwPc',
    },
  ];

  const currentLinks = iframe.slice(indexfirst1, indexlast1);

  const handlePageLink = (pageNumber) => {
    setLinks(pageNumber);
  };

  return (
    <>
      <div>
        <h1 className='videos'>VIDEOS MAS VISTOS</h1>
        <div className='container_videos'>
          <div className='iframe'>
            {currentLinks.map((lin, index) => (
              <div className={`imagen_${lin.title.toLowerCase()}`} key={index}>
              <h3 className={`title_${lin.title.toLowerCase()}`}>{lin.name}</h3>
              <iframe width="560" height="315" src={lin.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            ))}
            {/* Controles de paginación */}
            <div className='container_button'>
              {Array.from({ length: Math.ceil(iframe.length / linksMovie) }).map((_, index) => (
                <button className='button_index' key={index} onClick={() => handlePageLink(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
