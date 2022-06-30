import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary);
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.18);
  border-radius: 25px;
  h3 {
    font-family: Roboto;
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    color: var(--color-title);
    text-decoration: none;
    cursor: pointer;
  }
  span {
    font-weight: 100;
    color: var(--color-hint);
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  p {
    font-size: 1.15em;
    line-height: 1.58;
    font-weight: 400;
    color: var(--color-text);
    margin: 0;
    letter-spacing: -0.003em;
  }
`;

export const CommentButton = styled.button`
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  margin-top: 0.4rem;
  font-size: 1rem;
  background-color: var(--color-primary);
  border-radius: 0.6rem;
  border: 0;
  width: fit-content;
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: var(--color-primary-dark);
  }
`;

CommentButton.displayName = 'button';