import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page container">
      <h1>ConsoleList</h1>
      <p>Um catálogo para cadastrar e visualizar consoles de videogame.</p>
      <Link className="button" to="/cadastro">
        Ir para Cadastro
      </Link>
    </section>
  );
}

export default Home;
