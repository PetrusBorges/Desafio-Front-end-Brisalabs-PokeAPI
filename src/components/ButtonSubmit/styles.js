import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  width: 100%;
  transition: all 0.3s ease;
  height: ${({ height }) => `${height}px`};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ theme }) => theme.colors.grayScale[500]};
  background: ${({ theme }) => theme.colors.primary.yellow};

  img {
    margin-right: 6.5px;
  }

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.alerts.danger};
  }

  &[disabled] {
    cursor: default !important;
    background: ${({ theme }) => theme.colors.grayScale[300]} !important;
  }
`
