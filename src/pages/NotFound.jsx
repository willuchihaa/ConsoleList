import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found container">
      <h1>Página não encontrada</h1>
      <Link className="button" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}

export default NotFound;
