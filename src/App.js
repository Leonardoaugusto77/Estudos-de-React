import React from "react";
import {Router, Routes, Route, Link } from "react-router-dom";
import Pagina01 from './Componentes/Pagina01'
import Pagina02 from './Componentes/Pagina02'
import Pagina03 from './Componentes/Pagina03'
 
export default function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <Link to="/" > Home </Link>
            <Link to="/Pagina01">Página 1</Link>
            <Link to="/Pagina02">Página 2</Link>
            <Link to="/Pagina03">Página 3</Link>
          </nav>
        </header>
        <main>

          <Routes>
            <Route exact path="/Pagina01" element={<Pagina01 />} />
            <Route exact path="/Pagina02" element={<Pagina02 />} />
            <Route exact path="/Pagina03" element={<Pagina03 />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}