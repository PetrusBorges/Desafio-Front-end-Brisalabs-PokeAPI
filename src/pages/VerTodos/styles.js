import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  padding: 0 140px;

  button {
    width: 145px;
    height: 42px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    background: transparent;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderButton};
    color: ${({ theme }) => theme.borderButton};

    &:hover {
      color: ${({ theme }) => theme.colors.grayScale[500]};
      background: ${({ theme }) => theme.colors.primary.yellow};
      border-color: ${({ theme }) => theme.colors.primary.yellow};
    }
  }
`

export const CardsOrganize = styled.div`
  margin-top: 30px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 20px;
`
