import { useState } from 'react'


function Profile() {
    return (
      <img  className='imp' src={reactLogo}
        
        alt="Katherine Johnson"
      />
    )
  }
  


  function App7() {
    const [count, setCount] = useState(0)
  
   
    return (
      
      <section  className='busqueda'>
  
    <input type="text" name="NOMBRE" size={90}  placeholder="Search for a city..."></input>

        
      </section>
  
      
      
    )
  }
  export default App7
  