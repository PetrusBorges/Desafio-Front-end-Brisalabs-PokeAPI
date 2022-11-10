//PropTypes
import PropTypes from 'prop-types'

//styled-components
import { StyledSpinner } from "./stytles"

export default function Spinner({ size }) {
  return (
    <StyledSpinner size={size} />
  )
}

Spinner.propTypes = {
  size: PropTypes.number,
}

Spinner.defaultProps = {
  size: 32,
}
