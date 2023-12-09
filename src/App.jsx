import './App.css'
import Email from './components/Email'
import Estudios from './components/Estudios'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import { Videos } from './components/Videos'

function App() {


  return (
    <>
        <div>
        <SobreMi/>
        </div>
        <div>
          <Habilidades/>
        </div>
        <div>
        <Proyectos />
        </div>
        <div>
          <Estudios />
        </div>
        <div>
          <Videos />
        </div>
        <div>
         <Email />
        </div>
    </>

  )
}

export default App
