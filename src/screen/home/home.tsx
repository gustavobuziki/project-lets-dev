import { ImageLetsDev } from "../../assets/images";
import { Title } from "../../components/atoms";
import { MyBiograpy } from "../../components/molecules";
import { Footer, Header, HomeMain } from "../../components/organism";

import * as s from "./styled-home";

const Home = () => {
  return (
    <>
      <s.Container>
        <Header />

        <s.Banner>
          <h1>Que prazer te ver aqui!</h1>
          <img src={ImageLetsDev} />
          <h2>
            Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
            carreira.
          </h2>
          <p>
            Você está no módulo Front-end e vai aprender a criar um site básico
            do zero.
          </p>
        </s.Banner>

        <s.Content>
          <div>
            <Title title={"O que fizemos até agora..."} />
            <HomeMain />
          </div>
          <div>
            <Title title={"Um pouco sobre mim..."} />
            <MyBiograpy />
          </div>
        </s.Content>
      </s.Container>
      <Footer />
    </>
  );
};

export default Home;
