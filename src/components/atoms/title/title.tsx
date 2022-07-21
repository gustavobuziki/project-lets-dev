import * as s from "./styled-title";

interface TitleProps {
  title: string;
  noDivision?: boolean;
}

const Title = ({ title, noDivision }: TitleProps) => {
  return (
    <s.Title>
      <h2>{title}</h2>
      {!noDivision && <hr />}
    </s.Title>
  );
};

export default Title;
