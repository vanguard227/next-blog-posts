import styled from "styled-components";

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    align-items: center;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }
`

export const AvatarIcon = styled.div`
  align-items: center;
  color: var(--color-background);
  background-color: var(--color-hint);
  border: 2px solid var(--color-background);
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  font-family: Nunito-Bold;
  font-size: 1rem;
  height: 40px;
  overflow: hidden;
  text-align: center;
  width: 40px;

  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }
`;
