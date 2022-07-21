import styled from "styled-components";
import { colors } from "../../../styles/theme/colors";

export const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.black};
  padding: 40px;
`;
