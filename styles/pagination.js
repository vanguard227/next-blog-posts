import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0.8rem;
  }
`;

export const PaginationButton = styled.button`
  outline: none;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 20px;
  color: var(--color-background);
  ${(props) => (props.disabled ? disabled : enabled)};
`;

PaginationButton.displayName = 'button';

const enabled = `
  cursor: pointer;
  background-color: var(--color-primary);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-primary-dark);
  }
  &:active {
    background-color: var(--color-primary-dark);
  }
`;

const disabled = `
  background-color: var(--color-primary-disabled);
`;

export const PaginationLabel = styled.label`
  font-size: 1rem;
`;

PaginationLabel.displayName = 'label';