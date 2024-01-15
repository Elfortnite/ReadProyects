import { useState } from 'react'
import reactLogo from './assets/sol.png'


function Profile() {
    return (
      <img  className='imj' src={reactLogo}
        
        alt="Katherine Johnson"
      />
    )
  }

  function App3() {
    const [count, setCount] = useState(0)
  
   
    return (
      
      <section className='tres'>
  
        <h3>Saturday</h3>
        <div  >
          <Profile />
        </div>
        
        <h4>22</h4>
        <p>Clear Sky</p>
        
        
      </section>
  
      
      
    )
  }
  export default App3
  