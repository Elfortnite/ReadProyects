import { Profile,useState } from 'react'
import reactLogo from './assets/sol.png'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from './App1'
import App2 from './app2'
import App7 from './Busqueda'



function App() {
  const [count, setCount] = useState(0)

 
  return (
    
    <section className='tiempo'>
        <App7/>
        <App1/>
        <App2/>
    </section>
   


    
    
  )

}
export default App
