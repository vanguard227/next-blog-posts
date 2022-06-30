import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 0.5rem 0;
  }
  h6 {
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: var(--color-title);
    text-decoration: none;
    cursor: pointer;
  }
  span {
    font-weight: 100;
    color: var(--color-hint);
    font-size: 0.8rem;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.58;
    font-weight: 400;
    color: var(--color-text);
    margin: 0;
    letter-spacing: -0.003em;
  }
`;
