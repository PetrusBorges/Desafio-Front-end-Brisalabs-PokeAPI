import styled from "styled-components";

export default styled.input`
  width: 100%;
  height: 54px;
  border: none;
  outline: none;
  padding: 0 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.textStyleSecondary};
  background: ${({ theme }) => theme.backGroundCard};

  &::placeholder {
    color: ${({ theme }) => theme.textStyleSecondary};
  }
`
