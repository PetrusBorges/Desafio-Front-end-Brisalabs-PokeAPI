import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 765px;
`

export const CardsOrganize = styled.div`
  max-width: 765px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 20px;
`
