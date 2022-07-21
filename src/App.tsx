import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  CompleteForm,
  BasicForm,
  ConsumingApi,
  InformationsPaipers,
} from "./screen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/complete-form" element={<CompleteForm />} />
          <Route path="/consuming-api" element={<ConsumingApi />} />
          <Route
            path="/informations-paipers"
            element={<InformationsPaipers />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
