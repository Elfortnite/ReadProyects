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
  <div id='contenedor'>
  <div id="caja1">
      <h1 id='temperatura-valo'></h1>
      <h1 id="temperatura-descripcion"></h1>
  </div>

  <div id="caja2">
    <h2 id="ubicacion"></h2>
    <img id='icono-animado' src="" alt="" height="128" width="128" />

  </div>

  <div id="caja3">
    <h3>veloc.  del Viento</h3>
    <h1 id="viento-Velocidad"></h1>
  </div>
</div>
</section>
)
    window.addEventListener('load', ()=>{
      let lon
      let lat

      let temperaturaValo=document.getElementById('temperatura-valo')
      let temperaturaDescripcion=document.getElementById('temperatura-descripcion')
      let  ubicacion =document.getElementById('ubicacion')
      let iconoAnimado =document.getElementById('icono-animado')
      let vientoVelocidad=document.getElementById('viento-Velocidad')

      if(Navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion=>{
         // console.log(posicion.coords.latitude)

         lon = posicion.coords,longitude
         lat = posicion.coords.latitude
          /* ubicacion actual 
          const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=90fcd2280914bf57d39f233b2b0b6aac'
        */ 

          /* ubicacion ciudad*/
          const url='https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=90fcd2280914bf57d39f233b2b0b6aac'

          //console.log(url)

          fetch(url)
            .then( response =>{ return response.json()})
            .then(dara => {

              let temp= Math.round(data.main.temp)
              temperaturaValo.textContent = `${temp} ªC`
              console.log(data.weather[0].descripcion)
              let desc = data.weather[0].descripcion
              temperaturaDescripcion.textContent =desc-toUpperCase()

              ubicacion.textContent= data.name
              vientoVelocidad.textContent=`${data.wind.speed} m/s`
              //console.log(data.wind.speed)
              
              //iconos estaticos
              /*
              console.log(data.weather[0].icon)
              let iconCode= data.weather[0].icon
              const urlIcon =`https://openweathermap.org/img/wn/${iconCode}.png`
              console.log(urlIcon)*/

              //icono animados
              console.log(data.weather[0].main)
              switch(data.weather[0].main){
                case 'Thunderstorm':
                  iconoAnimado.src = 'assets/thunder.svg'
                  console.log('TORMENTA');
                break;
                case 'Drizzle':
                  iconoAnimado.src = 'assets/reiny-2.svg'
                  console.log('LLOVIZNA');
                break;

                case 'Rain':
                  iconoAnimado.src = 'assets/rainy-7.svg'
                  console.log('LLUVIA');
                break;
                case 'Snow':
                  iconoAnimado.src = 'assets/snowy-6.svg'
                  console.log('NIEVE');
                break;
                case 'Clear':
                  iconoAnimado.src = 'assets/day.svg'
                  console.log('LIMPIO');
                break;
                case 'Atmosphere':
                  iconoAnimado.src = 'assets/weather.svg'
                  console.log('ATMOSFERA');
                break;
                case 'Clouds':
                  iconoAnimado.src = 'assets/cloudy-day-1.svg'
                  console.log('NUBES');
                break;
                default:
                  iconoAnimado.src='assets/cloudy-day-1.svg'
                  console.log('por defecto');

                
              }





            })
            .catch(error =>{
               console.log(error)
            })
        
        })
      }
    })  
    
  }
  export default App1




