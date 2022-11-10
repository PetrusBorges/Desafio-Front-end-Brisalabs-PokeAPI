import styled, { css } from "styled-components";

const containerVariants = {
  normal: css`
    background-color: #A8A77A;
  `,
  fighting: css`
    background-color: #C22E28;
  `,
  flying: css`
    background-color: #A98FF3;
  `,
  poison: css`
    background-color: #A33EA1;
  `,
  ground: css`
    background-color: #E2BF65;
  `,
  rock: css`
    background-color: #B6A136;
  `,
  bug: css`
    background-color: #A6B91A;
  `,
  ghost: css`
    background-color: #735797;
  `,
  steel: css`
    background-color: #B7B7CE;
  `,
  fire: css`
    background-color: #EE8130;
  `,
  water: css`
    background-color: #6390F0;
  `,
  grass: css`
    background-color: #7AC74C;
  `,
  electric: css`
    background-color: #F7D02C;
  `,
  psychic: css`
    background-color: #F95587;
  `,
  ice: css`
    background-color: #96D9D6;
  `,
  dragon: css`
    background-color: #6F35FC;
  `,
  dark: css`
    background-color: #705746;
  `,
  fairy: css`
    background-color: #D685AD;
  `,
  unknown: css`
    background-color: #A8A77A;
  `,
  shadow: css`
    background-color: #A8A77A;
  `,
}

export const Container = styled.div`
  position: relative;
  width: 165px;
  height: 235px;
  padding: 10px;
  background: ${({ theme }) => theme.backGroundCard};
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .favoriteButton {
    position: absolute;
    top: 10px;
    right: 10px;

    button {
      height: 30px;
      border: none;
      background: transparent;
    }
  }

  > img {
    width: 80px;
  }
`

export const InfoPokemon = styled.div`
  transform: translateX(-3px);

  p {
    margin-bottom: 0px;
    font-size: 13px;
    color: ${({ theme }) => theme.textStyleSecondary};
    ::first-letter {
      text-transform: capitalize;
    }
  }

  .containerType {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`

export const FirstTypePokemon = styled.div`
  small {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.grayScale[100]};
    margin-top: 18px;
    padding: 5px 10px;
    border-radius: 8px;

    ${({ firstType }) => containerVariants[firstType]}
  }
`

export const SecondTypePokemon = styled.div`
  small {
    color: ${({ theme }) => theme.colors.grayScale[100]};
    margin-top: 18px;
    padding: 5px 10px;
    border-radius: 8px;

    ${({ secondType }) => containerVariants[secondType]}
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  margin-top: 15px;
`

