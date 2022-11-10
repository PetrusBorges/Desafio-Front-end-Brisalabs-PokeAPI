import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 30px;
  left: 9%;
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  border-radius: 20px;
  background: transparent;
  border: 1px solid ${({ theme}) => theme.borderButton};
  z-index: 100;

  img {
    margin-right: 8px;
  }

  small {
    color: ${({ theme}) => theme.borderButton};
    font-size: 12px;
  }
`
