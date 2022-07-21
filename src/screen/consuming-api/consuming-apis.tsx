import * as s from "./styled-consuming-apis";
import { Footer, Header } from "../../components/organism";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { ApiViaCep } from "../../services";

interface Icep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

const ConsumingApi = () => {
  const [cepNumbers, setCepNumbers] = useState<Icep[] | []>([]);

  const getCepApi = () => {
    let cep: number = document.getElementById("input-cep")?.value;

    ApiViaCep(cep)
      .then((resp) => {
        setCepNumbers(resp);
      })
      .catch(() => {});
  };

  return (
    <>
      <s.Container>
        <Header />
        <s.Content>
          <h1>Consumindo API's</h1>
          <h2>Que tal sair da teoria e meter a mão no código?</h2>
          <p id="desc">
            Agora é sua vez de consumir uma API e mostrar os dados em tela.
          </p>

          <hr />

          <s.Objetivo>
            <strong>Objetivo:</strong> Fazer a conexão com a API do Via CEP
            usando o Axios.
          </s.Objetivo>

          <h3>Instruções:</h3>

          <ul>
            <li>Criar a função que faz a requisição;</li>
            <li>Utilizar a seguinte baseURL: “https://viacep.com.br/ws/”;</li>
            <li>
              No GET, utilizar o caminho `cep/json` (ex.: `93700000/json`), onde
              o CEP vai só com números;
            </li>
            <li>Salvar no estado o valor digitado no input;</li>
            <li>Quando clicar no botão, chama a requisição no onClick;</li>
            <li>
              Mostrar em tela o nome da cidade, seguido do estado (ex.: Campo
              Bom - Rio Grande do Sul);
            </li>
            <li>
              Na dúvida, sempre acesse a documentação:{" "}
              <a href="https://viacep.com.br/" target="_blank">
                https://viacep.com.br/
              </a>
            </li>
          </ul>

          <hr />

          <s.ContainerSearch>
            <div className="field-search">
              <input
                id="input-cep"
                type="number"
                placeholder="Digite um cep (somente 8 números)"
              />
              <button type="button" onClick={getCepApi}>
                BUSCAR
              </button>
            </div>
            <div className="results">
              {cepNumbers.map((cep) => (
                <span>CEP:{cep.localidade}</span>
              ))}
            </div>
          </s.ContainerSearch>
        </s.Content>
      </s.Container>
      <Footer />
    </>
  );
};

export default ConsumingApi;
