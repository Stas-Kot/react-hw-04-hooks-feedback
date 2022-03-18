import styled from '@emotion/styled/macro';

export const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  outline: 1px solid black;
  font-weight: 700;
  text-transform: capitalize;
  padding: 2px 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:active {
    background-color: #0095ec;
  }
`;
