//Routes
import { Routes, Route } from "react-router-dom"

//Pages
import Login from "./pages/Login"
import Favoritos from "./pages/Favoritos"
import Procurar from "./pages/Procurar"
import VerTodos from "./pages/VerTodos"

export default function ReactRoutes({ selectedTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Login selectedTheme={selectedTheme} />} />
      <Route path="/favorite" element={<Favoritos selectedTheme={selectedTheme} />} />
      <Route path="/search" element={<Procurar selectedTheme={selectedTheme} />} />
      <Route path="/allpokemons" element={<VerTodos selectedTheme={selectedTheme}/>} />
    </Routes>
  )
}
