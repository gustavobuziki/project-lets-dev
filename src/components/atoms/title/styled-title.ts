import styled from "styled-components";
import { colors } from "../../../styles/theme/colors";

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 26px;
    color: ${colors.purple};
  }

  hr {
    height: 1px;
    background: #e5e5e5;
    margin: 40px 0 60px 0;
  }
`;
