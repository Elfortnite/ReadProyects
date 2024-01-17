import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar ({ className }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black p-0 ${className}`}>
      <ul className='nav'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link text-white fw-bold fs-5 h-100 p-4' href='#'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/stuff' className='nav-link text-white fw-bold fs-5 h-100 p-4' href='#'>Stuff</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' className='nav-link text-white fw-bold fs-5 h-100 p-4' href='#'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
