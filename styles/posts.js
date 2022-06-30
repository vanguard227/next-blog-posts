import styled from "styled-components";

export const Container = styled.main`
  h1 {
    font-size: 3rem;
    font-family: Consolas;
    margin-bottom: 1em;
    text-align: center;
    color: var(--color-title);
    margin: 0;
  }
`;

export const Posts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;