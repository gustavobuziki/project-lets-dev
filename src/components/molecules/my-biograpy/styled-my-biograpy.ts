import styled from "styled-components";
import { colors } from "../../../styles/theme/colors";

export const BiograpyContainer = styled.div`
  display: flex;
  padding: 1.5625rem 9.375rem;
  gap: 100px;

  img {
    height: 300px;
  }
`;

export const TextBiograpy = styled.span`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;

  h2 {
    font-style: italic;
  }

  span {
    line-height: 25px;
  }
`;

export const Networks = styled.div`
  display: flex;
  gap: 10px;

  a {
    opacity: 1;
  }

  a:hover {
    opacity: 0.7;
  }
`;
