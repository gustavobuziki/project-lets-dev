import { InstagramIcon, LinkedinIcon } from "../../../assets/icons";
import { PhotoGustavo } from "../../../assets/images";
import * as s from "./styled-my-biograpy";

const MyBiograpy = () => {
  return (
    <s.BiograpyContainer>
      <img src={PhotoGustavo} />
      <s.TextBiograpy>
        <h2>Gustavo Buziki dos Santos</h2>
        <span>
          Tenho 18 anos e sou gaúcho. Atualmente trabalho como desenvolvedor
          front-end na Paipe co. Estou na segunda edição do programa Let's Dev,
          onde após concluir a primeira, consegui a oportunidade de me tornar
          dev na Paipe. <br />
          Ao começar a programar em front-end, fiquei apaixonado com seu poder,
          ver uma interface tomando forma me deixa muito feliz. Fora do ambiente
          de trabalho, sou uma pessoa que ama estar com a família e cultivar
          boas amizades.
        </span>
        <s.Networks>
          <a href="https://www.instagram.com/gustavobuziki/" target="_blank">
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-buziki-637158223/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </s.Networks>
      </s.TextBiograpy>
    </s.BiograpyContainer>
  );
};

export default MyBiograpy;
