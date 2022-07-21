import axios from "axios";

const ApiViaCep = (cep: number) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .then((resp) => resolve(resp.data))
      .catch((e) => reject(e.data));
  });
};

export default ApiViaCep;
