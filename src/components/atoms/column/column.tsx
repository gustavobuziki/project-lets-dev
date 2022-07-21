import { ReactNode } from "react";
import * as s from "./styled-column";

interface ColumnProps {
  children: ReactNode;
  style?: object;
}

const Column = ({ children, style }: ColumnProps) => {
  return <s.Column style={style}>{children}</s.Column>;
};

export default Column;
