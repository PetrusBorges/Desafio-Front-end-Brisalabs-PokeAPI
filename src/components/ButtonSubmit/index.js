//PropTypes
import PropTypes from "prop-types"

//styled-components
import { StyledButton } from "./styles"

//components
import Spinner from "../../components/Spinner"

//imagens
import BookMark from "../../assets/images/icons/bookmark.svg"

export default function ButtonSubmit({
  type,
  size,
  height,
  disabled,
  isloading,
  children,
  onClick,
  modalSubmit }) {

  return (
    <StyledButton
      type={type}
      size={size}
      height={height}
      disabled={disabled || isloading}
      onClick={onClick}
    >
      {(!isloading && modalSubmit) && (
        <img src={BookMark} alt="Favorito Icon" />
      )}
      {!isloading && children}
      {isloading && <Spinner size={16} />}
    </StyledButton>
  )
}

ButtonSubmit.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  isloading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  modalSubmit: PropTypes.bool,
}

ButtonSubmit.defaultProps = {
  type: "button",
  size: 16,
  height: 54,
  disabled: false,
  isloading: false,
  onClick: undefined,
  modalSubmit: false,
}
