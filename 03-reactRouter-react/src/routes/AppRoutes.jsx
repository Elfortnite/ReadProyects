import { Routes, Route } from 'react-router-dom'
import Contact from '../components/Contact'
import Stuff from '../components/Stuff'
import Home from '../components/Home'
import Hr from '../components/Hr'
import Support from '../components/Support'

export default function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stuff' element={<Stuff />} />
      <Route path='/contact' element={<Contact />}>
        <Route path='hr' element={<Hr />} />
        <Route path='support' element={<Support />} />
      </Route>
    </Routes>
  )
}
