import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegação principal">
        <NavLink className="brand" to="/" aria-label="ConsoleList, início">
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span>
            Console<span className="brand-accent">List</span>
          </span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
