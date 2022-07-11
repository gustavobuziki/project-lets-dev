import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    };
    
    html{
            font-family: "Montserrat", sans-serif;
    };

    button, select {
    cursor: pointer;
    };
    
    //RESPONSIVIDADE
    
    @media (min-width: 992px){
  html{
    font-size: 100%;
  }
};

@media (max-width: 991px){
  html{
  font-size: 95%;
  }
}

@media (max-width: 767px){
  html{
  font-size: 85%;
  }
}

@media (max-width: 479px){
  html{
  font-size: 75%;
  }
};
`;
