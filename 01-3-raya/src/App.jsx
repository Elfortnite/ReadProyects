import { useState } from 'react'
import reactLogo from './assets/sol.png'
import viteLogo from '/vite.svg'
import './App.css'


function Profile() {
  return (
    <img src={reactLogo}
      
      alt="Katherine Johnson"
    />
  )
}


function App() {
  const [count, setCount] = useState(0)

 
  return (
    
    <section>
				<input type="text" name="NOMBRE" placeholder="Search for a city..."></input>

      <h1>Stockholm, SE</h1>
      <Profile />
      <h2>Clear Sky</h2>
      <h3>thursday 14:20 PM</h3>
      <p>Wind 5.7 m/s</p>
      <p>Pressure 1015 hPa</p>
      <p>Humidity 50%</p>
      <p> Cloudiness 0%</p>

    </section>
  );
}

export default App
