//PropTypes
import PropTypes from 'prop-types'

//styled-components
import { Container } from "./styles"

//images
import SearchIconWhite from "../../assets/images/icons/search-white.svg"
import SearchIconBlack from "../../assets/images/icons/search-black.svg"

export default function FormGroup({ children, selectedTheme }) {
  return (
    <Container>
      <div className="form-item">
        {children}
        <div className="searchIcon">
          {selectedTheme === "Dark" && (
            <img src={SearchIconBlack} alt="Icone Pesquisar" />
          )}
          {selectedTheme === "Light" && (
            <img src={SearchIconWhite} alt="Icone Pesquisar" />
          )}
        </div>
      </div>
    </Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  selectedTheme: PropTypes.node.isRequired,
}
