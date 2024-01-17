import { Outlet, NavLink } from 'react-router-dom'

export default function Contact () {
  return (
    <>
      <h2 className='fw-bold mb-3'>GOT QUESTIONS?</h2>
      <p>The easiest thing to do is post in our <a href='#'>forum</a></p>
      <h2 className='fw-bold mb-3'>NEED HELP?</h2>
      <p>If help is needed, please contact the following departments</p>
      <NavLink to='hr' className='nav-link text-black fw-bold fs-5 h-100 p-4 border border-3 mb-1'>Human Resources</NavLink>
      <NavLink to='support' className='nav-link text-black fw-bold fs-5 h-100 p-4 border border-3'>Support</NavLink>
      <Outlet context='mt-4' />
    </>
  )
}
