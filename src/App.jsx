import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Sobre from "./pages/Sobre.jsx";

function App() {
  const [consoles, setConsoles] = useState([]);

  function adicionarConsole(novoConsole) {
    setConsoles((listaAtual) => [...listaAtual, novoConsole]);
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastro"
            element={
              <Cadastro consoles={consoles} onAdicionar={adicionarConsole} />
            }
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
