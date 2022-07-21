import { ImageLetsDev } from "../../assets/images";
import { Footer, Header } from "../../components/organism";
import "./style.css";

const BasicForm = () => {
  const cancelar = (event: any) => {
    event.preventDefault();
    alert("Cancelando...");
  };

  function tagPorNome(nomeTag: string, isRadioButton: undefined) {
    const tag = document.getElementsByName(nomeTag);

    if (isRadioButton) {
      for (let pos = 0; pos < tag.length; pos++) {
        if (tag[pos].checked) return tag[pos];
      }
    } else return tag[0];
  }

  function enviarFormulario(event: any) {
    event.preventDefault();

    const nome = tagPorNome("nome")?.value;
    const idade = tagPorNome("idade")?.value;
    const ocupacao = tagPorNome("ocupacao")?.value;
    const areaPreferencia = tagPorNome("area-preferencia")?.value;
    const curriculo = tagPorNome("curriculo")?.value;
    const descricaoPerfil = tagPorNome("descricao-perfil")?.value;
    const receberEmail = tagPorNome("receber-email")?.value;

    const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.
        Em sua descrição de perfil consta: "${descricaoPerfil}"
        Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"} 
        Currículo: ${curriculo ? curriculo.files[0].name : "Não informado"}`;

    alert(mensagem);
  }
  const enviar = () => {
    window.alert("Dados enviados!");
  };
  return (
    <>
      <Header />
      <div id="container">
        <div className="header">
          <h1>Formulário 2ª Edição</h1>
          <h3>
            Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado
          </h3>
          <p>
            Preencha corretamente os campos abaixo para ingressar nessa SUPER
            JORNADA com o time Paipe!
          </p>
          <img src={ImageLetsDev} width="500px" height="300px" />
        </div>
        <hr />
        <form id="form" onSubmit={enviarFormulario}>
          <p className="warning-text">
            <b>ATENÇÃO:</b> os campos cintendo o asterisco(*) são de
            preenchiento obrigatório!
          </p>
          <section className="row-gap">
            <div className="column-gap">
              <label htmlFor="name">Nome completo:*</label>
              <input
                id="name"
                name="nome"
                type="text"
                required
                style={{ width: "300px" }}
                placeholder="Digite aqui..."
              />
            </div>
            <div className="column-gap">
              <label htmlFor="age">Idade:</label>
              <input id="age" type="number" name="idade" />
            </div>
          </section>
          <section className="row-gap">
            <div className="column-gap">
              <label htmlFor="Occupation">Ocupação:</label>
              <select
                id="Occupation"
                style={{ width: "150px" }}
                name="ocupacao"
              >
                <option>Desempregado</option>
                <option>Empregado CLT</option>
                <option>Empregado PJ</option>
              </select>
            </div>
            <div className="column-gap">
              <label htmlFor="Area">Área de preferência:</label>
              <div className="row-gap">
                <div className="label-input">
                  <input
                    id="Front-end"
                    type="radio"
                    className="input-radio"
                    name="area-preferencia"
                  />
                  <label htmlFor="Front-end">Front-end</label>
                </div>
                <div className="label-input">
                  <input
                    id="Back-end"
                    type="radio"
                    className="input-radio"
                    name="area-preferencia"
                  />
                  <label htmlFor="Back-end">Back-end</label>
                </div>
                <div className="label-input">
                  <input
                    id="Full-stack"
                    type="radio"
                    className="input-radio"
                    name="area-preferencia"
                  />
                  <label htmlFor="Full-stack">Full-stack</label>
                </div>
              </div>
            </div>
          </section>
          <div className="column-gap">
            <label htmlFor="select-file">Anexar currículo:</label>
            <input id="select-file" type="file" name="curriculo" />
          </div>
          <div className="column-gap">
            <label htmlFor="Description">
              Descrição do perfil do candidato:
            </label>
            <textarea
              id="Description"
              placeholder="Digite aqui..."
              name="descricao-perfil"
              style={{
                minHeight: "50px",
                minWidth: "400px",
                maxWidth: "100%",
                maxHeight: "150px",
              }}
            ></textarea>
          </div>
          <div className="row-gap">
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input id="Notification" type="checkbox" name="receber-email" />
              <label htmlFor="Notification">
                Deseja receber notificações sobre vagas por e-mail.
              </label>
            </div>
          </div>
          <div
            className="row-gap"
            style={{ justifyContent: "space-between", paddingTop: "50px" }}
          >
            <button className="button-cancel" type="button" onClick={cancelar}>
              Cancelar
            </button>
            <input type="submit" value="Enviar" className="input-submit" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BasicForm;
