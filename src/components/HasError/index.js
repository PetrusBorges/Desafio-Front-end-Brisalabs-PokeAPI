//PropTypes
import PropTypes from "prop-types"

//styled-components
import { ErrorContainer } from "./styles"

//imagens
import Astronaut from "../../assets/images/astronaut.svg"

export default function HasError({ onClick }) {
  return (
    <ErrorContainer>
      <img src={Astronaut} alt="Astronauta" />
      <p>Está meio vazio por aqui!</p>
      <small>Procure por pokémons para adicioná-los aos seus favoritos.</small>
      <button
        onClick={onClick}
      >
        Procurar pokémons
      </button>
    </ErrorContainer>
  )
}

HasError.propTypes = {
  onClick: PropTypes.func.isRequired,
}
