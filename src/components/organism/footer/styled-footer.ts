import styled from "styled-components";
import { colors } from "../../../styles/theme/colors";

export const Footer = styled.footer`
  background-color: ${colors.black};
  color: white;
  height: 6.25rem;
  padding: 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
