//PropTypes
import PropTypes from "prop-types"

//styled-components
import { Container, LogoHeader, MenuToggle, ButtonLogout, FavoriteCount } from "./styles"

//imagens
import LogoDark from "../../assets/images/icons/pokemon-logo-black.svg"
import LogoWhite from "../../assets/images/icons/pokemon-logo-white.svg"
import LogoutDark from "../../assets/images/icons/logout-black.svg"
import LogoutWhite from "../../assets/images/icons/logout-white.svg"

//react-router-dom
import { useNavigate } from "react-router-dom"

//Routes
import { Link } from "react-router-dom"

//context
import { useContext } from "react"
import FavoriteContext from "../../context/FavoriteContext"

export default function PageHeader({ selectedTheme }) {

  const { favoritePokemons } = useContext(FavoriteContext)

  const navigate = useNavigate()

  function clearLocalStorage() {
    localStorage.removeItem("Login")
    localStorage.removeItem("Password")
    localStorage.removeItem("FavoriteKey")
    navigate("/")
  }

  return (
    <Container>
      <LogoHeader>
        {selectedTheme === "Dark" && (
          <Link to="/">
            <img src={LogoDark} alt="Logo Pokemon" />
          </Link>
        )}
        {selectedTheme === "Light" && (
          <Link to="/">
            <img src={LogoWhite} alt="Logo Pokemon" />
          </Link>
        )}
      </LogoHeader>
      <MenuToggle>
        <Link to="/favorite">Favoritos <FavoriteCount>{favoritePokemons.length}</FavoriteCount></Link>
        <Link to="/search">Procurar</Link>
        <Link to="/allpokemons">Ver todos</Link>
      </MenuToggle>
      <ButtonLogout
        onClick={clearLocalStorage}
      >
        <small>Sair</small>
        {selectedTheme === "Dark" && (
          <img src={LogoutDark} alt="Logo Pokemon" />
        )}
        {selectedTheme === "Light" && (
          <img src={LogoutWhite} alt="Logo Pokemon" />
        )}
      </ButtonLogout>
    </Container>
  )
}

PageHeader.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
}
