import { Title } from "../../atoms";
import { BannerLetsDev } from "../../../assets/images";

import * as s from "./styled-form-header";

const FormHeader = () => {
  return (
    <>
      <s.Image src={BannerLetsDev} alt="Banner Lets Dev" />

      <s.Header>
        <Title title="Formulário 2ª edição" />

        <s.Subtitle>
          Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado.
        </s.Subtitle>

        <p>
          Preencha corretamente os campos abaixo para ingressar nessa SUPER
          JORNADA com o time Paipe!
        </p>
      </s.Header>

      <s.Division />
    </>
  );
};

export default FormHeader;
