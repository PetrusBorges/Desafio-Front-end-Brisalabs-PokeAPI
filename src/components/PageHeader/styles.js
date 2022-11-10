import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 140px;
  background: ${({ theme }) => theme.headerBackGround};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const LogoHeader = styled.div`
  img {
    width: 75px;
    height: 30px;
  }
`

export const MenuToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    color: ${({ theme }) => theme.textStyleSecondary};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.textStylePrimary};
      border-bottom: 2px solid ${({ theme }) => theme.textStylePrimary};
    }
  }
`

export const ButtonLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid ${({ theme}) => theme.borderButton};

  small {
    color: ${({ theme}) => theme.borderButton};
    font-size: 12px;
    margin-right: 20px;
  }

  img {
    width: 12px;
    height: 12px;
  }
`

export const FavoriteCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  width: 17px;
  height: 17px;
  font-size: 11px;
  border-radius: 50%;
  color: ${({ theme }) => theme.backGround};
  background: ${({ theme }) => theme.backGroundCount};
`
