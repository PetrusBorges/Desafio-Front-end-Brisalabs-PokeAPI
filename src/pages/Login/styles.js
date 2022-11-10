import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 400px;
  padding: 0 24px;
  margin-left: 140px;

  img {
    width: 250px;
    margin-top: 30px;
    margin-bottom: 80px;
  }

  h1 {
    color: ${({ theme }) => theme.textStylePrimary};
    font-size: 36px;
    margin-bottom: 50px;
  }
`

export const Form = styled.form``

export const Input = styled.input`
  width: 100%;
  height: 54px;
  border: 1px solid ${({ theme }) => theme.borderButton};
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;
  background: transparent;
  color: ${({ theme }) => theme.textStyleSecondary};
  outline: none;

  & + & {
    margin-top: 15px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textStyleSecondary};
  }

  &[disabled] {
    border-color: ${({ theme }) => theme.colors.grayScale[300]};
    background: ${({ theme }) => theme.colors.grayScale[300]};
  }
`

export const ButtonContainer = styled.div`
  margin-top: 30px;

  button {
    width: 100%;
  }
`

export const BackGroundContainer = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;

  img {
    height: 100vh;
  }
`
