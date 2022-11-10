import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 350px;
  margin-top: 25px;

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: ${({ theme }) => theme.textStyleSecondary};
  }

  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.grayScale[300]};
  }

  button {
    margin-top: 40px;
    width: 235px;
    height: 45px;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.borderButton};
    border: 1px solid ${({ theme }) => theme.borderButton};
  }
`
