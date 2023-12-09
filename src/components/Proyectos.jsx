import React, { useState } from 'react';
import './styles/Proyects.css';

const Proyectos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1; // Ajusta esto según tus necesidades

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  // Array de proyectos (puedes agregar más proyectos según sea necesario)
  const projects = [
    {
      name: 'POKEDEX',
      image: 'poke.png',
      description: 'Este es un proyecto desarrollado con la ApiRest de Pokemon, en donde econtraras cada uno de tus pokemones favoritos.',
      technologies: 'React.js, CSS, ApiRest',
      role: 'Front-End',
      link:'https://github.com/LelioAponte25/ent6_gen29.git',
      linkName: 'Link del proyecto en gitHub'
    },
    {
      name: 'BASE DE DATOS',
      image: 'base.png',
      description: 'esta es una base de datos con CRUD para asi poder traer, crear, actualizar y eliminar peliculas',
      technologies: 'SQL.Postgres, postman, sequelize, JavaScript',
      role: 'Back-end',
      link:'https://documenter.getpostman.com/view/30811525/2s9YXiYLoq',
      linkName: 'Link del proyecto en gitHub'
    },
    {
      name: 'WEATHER-APP',
      image: 'weather.png',
      description: 'esta es una base de datos con CRUD para asi poder traer, crear, actualizar y eliminar peliculas',
      technologies: 'SQL.Postgres, postman, sequelize, JavaScript',
      role: 'Back-end',
      link:'https://github.com/LelioAponte25/entregable_2.git',
      linkName: 'Link del proyecto en gitHub'
    },
    {
      name: 'Rick y Morty',
      image: 'rick.png',
      description: 'es una App-web en donde puedes buscar tus personajes favoritos de la serie de rick y morty',
      technologies: 'React.js, CSS, ApiRest',
      role: 'Front-End',
      link:'https://github.com/LelioAponte25/entregable_3.git',
      linkName: 'Link del proyecto en gitHub'
    },
    {
      name: 'Spotify',
      image: 'spoti.png',
      description: 'es una app-web creada con la apirest de spotify, en esta aplicacion encontraras a tus artistas favoritos',
      technologies: 'React.js, CSS, ApiRest',
      role: 'Front-End',
      link:'https://github.com/LelioAponte25/gen29-ent.git',
      linkName: 'Link del proyecto en gitHub'
    },
    // Agrega más proyectos aquí...

  ];

  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='contanier_pricinpal_one'>
        <header className='cabecera'>
          <h1 className='title_pricinpal'>PROYECTOS</h1>
        </header>
        <div className='contianer_secundario'>
          {currentProjects.map((project, index) => (
            <div key={index} className={`container_${project.name.toLowerCase()}`}>
              <div>
                <h2 className={`titulo_${project.name.toLowerCase()}`}>{project.name}</h2>
                <img className={`imagen_${project.name.toLowerCase()}`} src={project.image} alt={project.name} />
              </div>
              <div className={`container_description_${project.name.toLowerCase()}`}>
                <p className={`description_${project.name.toLowerCase()}`}>{project.description}</p>
                <p className={`text_${project.name.toLowerCase()}`}>
                  <span className='tec_span'>TECNOLOGIAS:</span> {project.technologies}
                </p>
                <p className={`role_${project.name.toLowerCase()}`}>ROLE: {project.role}</p>
                <a href={project.link} target='_blnak'>{project.linkName}</a>
              </div>
            </div>
          ))}

          {/* Controles de paginación */}
          <div className='container_button'>
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
              <button className='button_index' key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
             

          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
