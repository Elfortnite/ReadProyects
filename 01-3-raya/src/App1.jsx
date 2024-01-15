import { useState } from 'react'
import reactLogo from './assets/sol.png'



function Profile() {
    return (
      <img  className='imp' src={reactLogo}
        
        alt="Katherine Johnson"
      />
    )
  }
  
  
  function App1() {
    const [count, setCount] = useState(0)
  
   
    return (
      
      <section className='uno'>
  
        <h1>Stockholm, SE</h1>
        <h2>23</h2>
        <div >
          <Profile />
        </div>
        
        <h2>Clear Sky</h2>
        <h3>thursday 14:20 PM</h3>
        <p>Wind 5.7 m/s</p>
        <p>Pressure 1015 hPa</p>
        <p>Humidity 50%</p>
        <p> Cloudiness 0%</p>
  
      </section>
  
      
      
    )
  }
  export default App1




