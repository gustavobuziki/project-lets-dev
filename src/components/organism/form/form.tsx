import { FormEvent } from "react";

import { Column, Row } from "../../atoms";

import * as s from "./styled-form";

const Form = () => {
  const cancelar = (event: FormEvent) => {
    event.preventDefault();
    alert("Cancelando...");
  };

  const enviarFormulario = () => {
    alert("enviou");
  };

  return (
    <s.Main>
      <s.Form onSubmit={undefined}>
        <p className="warning-text">
          <b>ATENÇÃO:</b> os campos contendo o asterisco(*) são de preenchimento
          obrigatório!
        </p>
        <Row>
          <Column>
            <label htmlFor="name">Nome completo:*</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              style={{ width: "300px" }}
              placeholder="Digite aqui..."
            />
          </Column>
          <Column>
            <label htmlFor="age">Idade:</label>
            <input id="age" name="age" type="number" />
          </Column>
        </Row>

        <Row>
          <Column>
            <label htmlFor="occupation">Ocupação:</label>
            <select id="occupation" name="occupation">
              <option>Desempregado</option>
              <option>Empregado CLT</option>
              <option>Empregado PJ</option>
            </select>
          </Column>
          <Column>
            <label htmlFor="Area">Área de preferência:</label>
            <Row>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <input id="front-end" type="radio" name="preferred-area" />
                <label htmlFor="front-end">Front-end</label>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <input id="back-end" type="radio" name="preferred-area" />
                <label htmlFor="back-end">Back-end</label>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <input id="full-stack" type="radio" name="preferred-area" />
                <label htmlFor="full-stack">Full-stack</label>
              </div>
            </Row>
          </Column>
        </Row>

        <Column>
          <label htmlFor="select-file">Anexar currículo:</label>
          <input id="select-file" type="file" name="curriculum" />
        </Column>

        <Column>
          <label htmlFor="Description">Descrição do perfil do candidato:</label>
          <textarea
            id="Description"
            placeholder="Digite aqui..."
            name="description"
          ></textarea>
        </Column>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <input id="Notification" name="receive-email" type="checkbox" />
          <label htmlFor="Notification">
            Deseja receber notificações sobre vagas por e-mail.
          </label>
        </Row>
      </s.Form>
      <div>
        <Row
          style={{
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
        >
          <s.ButtonForm onClick={cancelar}>Cancelar</s.ButtonForm>
          <s.ButtonForm type="submit" value="enviar" onClick={enviarFormulario}>
            Enviar
          </s.ButtonForm>
        </Row>
      </div>
    </s.Main>
  );
};

export default Form;
