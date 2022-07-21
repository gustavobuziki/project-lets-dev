import styled from "styled-components";

export const Main = styled.main`
  padding: 2.5rem 6.25rem;

  input {
    height: 1.75rem;
    padding-left: 0.3125rem;
  }

  textarea {
    padding: 0.3125rem;
  }

  button,
  input,
  textarea {
    :focus {
      outline: none;
      border-color: #7d2eba;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

export const ButtonForm = styled.button`
  width: 12.5rem;
  height: 1.875rem;
  border: none;
  background-color: #7d2eba;
  color: white;
  border-radius: 10px;
  opacity: 1;

  :hover {
    opacity: 0.7;
  }
`;
