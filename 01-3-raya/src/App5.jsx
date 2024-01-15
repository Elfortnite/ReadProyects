import { useState } from 'react'
import reactLogo from './assets/sol.png'


function Profile() {
    return (
      <img className='imj' src={reactLogo}
        
        alt="Katherine Johnson"
      />
    )
  }



  function App5() {
    const [count, setCount] = useState(0)
  
   
    return (
      
      <section  className='cuatro'>
  
        <h3>Monday</h3>
        <div >
          <Profile />
        </div>
        
        <h4>22</h4>
        <p>blroken clouds</p>
        
      </section>
  
      
      
    )
  }
  export default App5
  