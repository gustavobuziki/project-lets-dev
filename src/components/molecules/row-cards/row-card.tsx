import { Link } from "react-router-dom";
import { Card } from "../../atoms";
import * as s from "./styled-row-cards";

const RowCard = () => {
  return (
    <s.RowCard>
      <Card
        link="/basic-form"
        title="Formulário HTML e CSS"
        description="O primeiro “Hello World” a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS."
      />

      <Card
        link="/complete-form"
        title="Formulário 2.0"
        description="O primeiro “console.log” a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS."
      />

      <Card
        link="/consuming-api"
        title="Consumindo API's"
        description="Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela."
      />

      <Card
        link="/informations-paipers"
        title="A PAIPE e os Paipers"
        description="Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe."
      />
    </s.RowCard>
  );
};

export default RowCard;
