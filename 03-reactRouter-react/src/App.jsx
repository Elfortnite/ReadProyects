import Navbar from './components/Navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import './styles/App.css'

export default function App () {
  return (
    <main id='main-override' className='w-100 bg-warning min-vh-100 '>
      <div className='container'>
        <header className='mt-5'>
          <h1 className='fw-bold '>Simple SPA</h1>
          <Navbar className='mt-4' />
        </header>
        <div className='my-4 bg-white p-4'>
          <AppRoutes />
        </div>
      </div>
    </main>

  )
}
