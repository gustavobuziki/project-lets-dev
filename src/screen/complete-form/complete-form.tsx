import { Header, FormHeader, Form, Footer } from "../../components/organism";

import * as s from "./styled-complete-form";

const CompleteForm = () => {
  return (
    <s.Container>
      <Header />
      <FormHeader />
      <Form />
      <Footer />
    </s.Container>
  );
};

export default CompleteForm;
