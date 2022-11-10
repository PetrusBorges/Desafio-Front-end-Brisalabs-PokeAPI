//PropTypes
import PropTypes from "prop-types"

//styled-components
import { Container, StyledButton } from "./styles"

//images
import Sun from "../../assets/images/icons/vector-sun.svg"
import Moon from "../../assets/images/icons/vector-moon.svg"

export default function ButtonTheme({ type, onClick, selectedTheme }) {
  return (
    <Container>
      <StyledButton
        type={type}
        onClick={onClick}
      >
        {selectedTheme === "Dark" && (
          <>
            <img src={Sun} alt="Logo Sol" />
            <small>Tema claro</small>
          </>
        )}

        {selectedTheme === "Light" && (
          <>
            <img src={Moon} alt="Logo Lua" />
            <small>Tema escuro</small>
          </>
        )}
      </StyledButton>
    </Container>
  )
}

ButtonTheme.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
}

ButtonTheme.defaultProps = {
  type: "button",
  onClick: undefined,
}
