import React from "react";

function ConsoleCard({ consoleItem }) {
  return (
    <article className="console-card">
      <div className="console-card-top">
        <span className="console-icon" aria-hidden="true">
          ◈
        </span>
        <span className="console-year">{consoleItem.ano}</span>
      </div>
      <h3>{consoleItem.nome}</h3>
      <p className="console-manufacturer">{consoleItem.fabricante}</p>
      <div className="physical-status">
        <span
          className={`status-dot ${consoleItem.jogosFisicos ? "is-yes" : ""}`}
          aria-hidden="true"
        />
        {consoleItem.jogosFisicos
          ? "Suporta jogos físicos"
          : "Não suporta jogos físicos"}
      </div>
    </article>
  );
}

export default ConsoleCard;
