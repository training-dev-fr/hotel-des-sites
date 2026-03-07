import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Hotel from './pages/Hotel'
import Chambres from './pages/Chambres'
import Restaurant from './pages/Restaurant'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/chambres" element={<Chambres />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
