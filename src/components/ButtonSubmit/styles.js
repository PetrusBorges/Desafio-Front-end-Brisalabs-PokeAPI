import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.grayScale[500]};
  height: ${({ height }) => `${height}px`};
  background: ${({ theme }) => theme.colors.primary.yellow};
  padding: 0 16px;
  font-size: ${({ size }) => `${size}px`};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  width: 100%;
  transition: all 0.3s ease;

  img {
    margin-right: 6.5px;
  }

  &:hover {
    color: white
  }

  &[disabled] {
    cursor: default !important;
    background: ${({ theme }) => theme.colors.grayScale[300]} !important;
  }
`
