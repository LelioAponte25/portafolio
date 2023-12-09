import React, { useState } from 'react'
import './styles/Estudios.css';

const Estudios = () => {
    const [diploma, setdiploma] = useState(1);
    const diplomaProject = 1;

    const indexlast = diploma * diplomaProject;
    const indexfirst = indexlast - diplomaProject;


    //Array de proyectos
    const diplomas = [
        {
            name: 'fron',
            image: 'front.png',
            link: 'https://certiwise.co/verify/154'
        },
        {
            name: 'fun',
            image: 'fundamentos.png',
            link: 'https://certificates.academlo.com/en/verify/67652295145494'
        }
    ]

    const currentDiplomas = diplomas.slice(indexfirst, indexlast);

    const handlePageDiplomas = (pageNumber) => {
        setdiploma(pageNumber);
    }

    return (
        <>
            <div className='container_estudios'>
                <h1 className='titulo_estudios'>ESTUDIOS Y DIPLOMAS</h1>
                <div className='center'>
                <div className='container_description_estudios'>
                    <div className='estudios_description'>
                        <div className='container_front'>
                            <h2 className='estudios'>ESTUDIOS</h2>
                            <ul className='list_items_estudios'>
                                <li className='items_estudios'>Desarrollo Front-End con React.js</li>
                                <li className='items_estudios'>Desarrollo Back-End con node.js</li>
                                <li className='items_estudios'>Fundamentos de programacion</li>
                            </ul>
                        </div>
                        <div className='container_idiomas'>
                            <h2 className='idiomas'>IdIOMAS</h2>
                            <ul className='list_items_idiomas'>
                                <li className='items_idiomas'><span className='span_idiomas'>Español:</span>Nativo</li>
                                <li className='items_idiomas'><span className='span_idiomas'>Ingles:</span>B1</li>
                            </ul>
                        </div>
                    </div>
                    <div className='link'>
                        <div className='links'>
                            {currentDiplomas.map((diplo, index) => (
                                <div className={`imagen_${diplo.name.toLowerCase()}`} key={index}>
                                    <a className={`imagen_${diplo.name.toLowerCase()}`} href={diplo.link} target='_blank'><img className='image_diploma' src={diplo.image} /></a>
                                </div>
                            ))}
                            {/* Controles de paginación */}
                            <div className='container_button'>
                                {Array.from({ length: Math.ceil(diplomas.length / diplomaProject) }).map((_, index) => (
                                    <button className='button_index' key={index} onClick={() => handlePageDiplomas(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                </div>

            </div>
        </>
    )
}

export default Estudios