import styled, { keyframes, css } from "styled-components";

const progress = ({ pokemon }) => keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${pokemon}%;
  }
`

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

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);
`

export const Container = styled.div`
  width: 380px;
  height: 640px;
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backGroundCard};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textStyleSecondary};
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderButton};

  button {
    background: transparent;
    border: none;
  }
`

export const Body = styled.div`
  h2 {
    margin-top: 18px;
    color: ${({ theme }) => theme.textStyleSecondary};
  }

  img {
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.imagemBackGround};
    margin-top: 13px;
    margin-right: 10px;
    padding: 10px 15px;
  }

  .infoContainer {
    display: flex;
    align-items: center;
    margin-top: 15px;

    p {
      font-weight: 500;
      font-size: 18px;
      color: ${({ theme }) => theme.textStyleSecondary};
      margin-right: 18px;
    }
  }

  .containerType {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
`

export const FirstTypePokemon = styled.div`
  small {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.grayScale[100]};
    margin-top: 18px;
    padding: 5px 20px;
    border-radius: 8px;

    ${({ firstType }) => containerVariants[firstType]}
  }
`

export const SecondTypePokemon = styled.div`
  small {
    color: ${({ theme }) => theme.colors.grayScale[100]};
    margin-top: 18px;
    padding: 5px 20px;
    border-radius: 8px;

    ${({ secondType }) => containerVariants[secondType]}
  }
`

export const Footer = styled.div`
  margin-top: 27px;
  margin-bottom: 30px;

  small {
    color: ${({ theme }) => theme.textStyleSecondary};
    font-weight: 600;
    font-size: 13px;
  }

  .info {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const ProgressBar = styled.div`
  width: 235px;
  height: 10px;
  border-radius: 8px;
  position: relative;
  background: ${({ theme }) => theme.colors.grayScale[300]};

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.yellow};
    border-radius: 8px;
    animation: ${progress} 1s forwards;
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  margin-top: 15px;
`
