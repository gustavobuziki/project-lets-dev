import { Link } from "react-router-dom";
import { ImageLetsDev } from "../../../assets/images";
import * as s from "./styled-card";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => {
  return (
    <s.Card>
      <img src={ImageLetsDev} />
      <Link to={link}>
        <h3>{title}</h3>{" "}
      </Link>
      <span>{description}</span>
    </s.Card>
  );
};

export default Card;
