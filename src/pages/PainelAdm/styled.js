import styled from "styled-components";

export const PainelGeral = styled.div`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #e91e63;
    }

    &.button {
      margin-inline-end: 1rem;
      background-color: #e91e63;
      color: #fff;
      border-radius: 0.125rem;
      padding: 0.5rem 1.5rem;
    }

    &.button:hover {
      background-color: #f8bbd0;
      color: #000;
    }

    &.button-add:hover {
      background-color: #e91e63;
      color: #fff;
    }
  }

  p {
    margin-bottom: 1.5rem;
  }

  .button-add {
    background-color: #f8bbd0;
    color: #000;
    border-radius: 0.125rem;
    padding: 0.5rem 1.5rem;
  }

  .btnAdd {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .tabela {
    margin: 0;
    padding: 0;
  }

  .title {
    margin-top: 2rem;
  }
`;
