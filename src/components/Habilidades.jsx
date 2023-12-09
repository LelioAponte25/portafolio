import React from 'react'
import './styles/Habilidades.css'

const Habilidades = () => {
    return (
        <>
            <div className='container_principal'>
                <div className='container_titulo'>
                    <h1 className='titulo'>HABILIDADES</h1>
                </div>
                <div className='container_displey'>
                    <div className='items_one'>
                        <h2 className='items_title'><span className="material-symbols-outlined">edit</span>Front-End</h2>
                        <ul className='list_items'>
                            <li className='items_list_four'>HTML</li>
                            <li className='items_list_four'>JAVASCRIPT</li>
                            <li className='items_list_four'>CSS</li>
                            <li className='items_list_four'>React.js</li>
                            <li className='items_list_four'>React Router</li>
                            <li className='items_list_four'>React Redux</li>
                            <li className='items_list_four'>React Form</li>
                            <li className='items_list_four'>Hooks</li>
                        </ul>
                    </div>
                    <div className='items_two'>
                        <h2 className='items_title_one'><span className="material-symbols-outlined">database</span>BACK-END</h2>
                        <ul className='list_items_two'>
                            <li className='items_list_one'>JAVASCRIPT</li>
                            <li className='items_list_one'>NODE.js</li>
                            <li className='items_list_one'>TESTING</li>
                            <li className='items_list_one'>POSTGRES.SQL</li>
                            <li className='items_list_one'>SEQUELIZE</li>
                            <li className='items_list_one'>React Redux</li>
                            <li className='items_list_one'>EXPRESS</li>
                            <li className='items_list_one'>JWT</li>
                            <li className='items_list_one'>BCRYPT</li>
                        </ul>
                    </div>
                    <div className='items_three'>
                        <h2 className='items_title_three'><span className="material-symbols-outlined">settings</span>HERRAMINETAS</h2>
                        <ul className='list_items_three'>
                            <li className='items_list_two'>POSTMAN</li>
                            <li className='items_list_two'>VISUAL CODE</li>
                            <li className='items_list_two'>GIT y GITHUB</li>
                            <li className='items_list_two'>DBDIAGRAM</li>
                        </ul>
                    </div>
                    <div className='items_four'>
                        <h2 className='itemes_title_four'><span className="material-symbols-outlined">settings</span>OTROS LENGUAJES</h2>
                        <ul className='list_items_four'>
                            <li className='items_list_three'>Lenguaje C</li>
                            <li className='items_list_three'>JAVA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilidades