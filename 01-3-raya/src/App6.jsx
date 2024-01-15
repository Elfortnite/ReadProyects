import { useState } from 'react'
import reactLogo from './assets/sol.png'


function Profile() {
    return (
      <img className='imj' src={reactLogo}
        
        alt="Katherine Johnson"
      />
    )
  }



  function App6() {
    const [count, setCount] = useState(0)
  
   
    return (
      
      <section  className='cuatro'>
  
        <h3>Tuesday</h3>
        <div >
          <Profile />
        </div>
        
        <h4>21</h4>
        <p>Broken CLouds</p>
        
      </section>
  
      
      
    )
  }
  export default App6
  