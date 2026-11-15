import React, { useState } from "react";
import ConsoleCard from "../components/ConsoleCard.jsx";

const formularioInicial = {
  nome: "",
  ano: "",
  fabricante: "",
  jogosFisicos: false,
};

function Cadastro({ consoles, onAdicionar }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [erro, setErro] = useState("");

  function atualizarCampo(event) {
    const { name, value, checked, type } = event.target;
    setFormulario((formularioAtual) => ({
      ...formularioAtual,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErro("");
  }

  function validarFormulario() {
    const nome = formulario.nome.trim();
    if (!nome) {
      return "Informe o nome do console.";
    }

    if (Number.isFinite(Number(nome))) {
      return "O nome do console não pode ser apenas um número.";
    }

    if (formulario.ano.trim() === "") {
      return "Informe o ano de lançamento.";
    }

    const ano = Number(formulario.ano);
    if (!Number.isFinite(ano) || ano <= 0) {
      return "O ano de lançamento deve ser um número maior que zero.";
    }

    if (!formulario.fabricante) {
      return "Selecione o fabricante.";
    }

    return "";
  }

  function lidarComEnvio(event) {
    event.preventDefault();

    const mensagemErro = validarFormulario();
    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    onAdicionar({
      ...formulario,
      nome: formulario.nome.trim(),
      ano: Number(formulario.ano),
    });
    setFormulario(formularioInicial);
    setErro("");
  }

  return (
    <div className="catalog-page container">
      <div className="page-heading">
        <h1>Catálogo de consoles</h1>
      </div>

      <div className="catalog-layout">
        <section className="form-panel" aria-labelledby="form-title">
          <h2 id="form-title">Novo console</h2>

          <form onSubmit={lidarComEnvio} noValidate>
            <div className="form-field">
              <label htmlFor="nome">Nome do console</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex.: Nintendo Switch"
                value={formulario.nome}
                onChange={atualizarCampo}
                aria-describedby={erro ? "form-error" : undefined}
              />
            </div>

            <div className="form-field">
              <label htmlFor="ano">Ano de lançamento</label>
              <input
                id="ano"
                name="ano"
                type="number"
                min="1"
                step="1"
                placeholder="Ex.: 2017"
                value={formulario.ano}
                onChange={atualizarCampo}
                aria-describedby={erro ? "form-error" : undefined}
              />
            </div>

            <div className="form-field">
              <label htmlFor="fabricante">Fabricante</label>
              <select
                id="fabricante"
                name="fabricante"
                value={formulario.fabricante}
                onChange={atualizarCampo}
                aria-describedby={erro ? "form-error" : undefined}
              >
                <option value="">Selecione um fabricante</option>
                <option value="Nintendo">Nintendo</option>
                <option value="Sony">Sony</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Sega">Sega</option>
                <option value="Atari">Atari</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <label className="checkbox-field" htmlFor="jogosFisicos">
              <input
                id="jogosFisicos"
                name="jogosFisicos"
                type="checkbox"
                checked={formulario.jogosFisicos}
                onChange={atualizarCampo}
              />
              <span>Possui suporte a jogos físicos</span>
            </label>

            {erro && (
              <p className="error-message" id="form-error" role="alert">
                {erro}
              </p>
            )}

            <button className="button submit-button" type="submit">
              Salvar console
            </button>
          </form>
        </section>

        <section className="list-panel" aria-labelledby="list-title">
          <h2 id="list-title">Consoles cadastrados</h2>

          {consoles.length === 0 ? (
            <p className="empty-state">Nenhum console cadastrado.</p>
          ) : (
            <div className="console-list">
              {consoles.map((consoleItem, index) => (
                <ConsoleCard key={index} consoleItem={consoleItem} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Cadastro;
