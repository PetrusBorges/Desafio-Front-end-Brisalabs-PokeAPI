//PropTypes
import PropTypes from "prop-types"

//styled-components
import { Overlay, Container, Header, Body, FirstTypePokemon, SecondTypePokemon, Footer, ProgressBar, ContainerButton } from "./styles"

//imagens
import CloseDark from "../../assets/images/icons/x-dark.svg"
import CloseWhite from "../../assets/images/icons/x-white.svg"

//components
import ReactPoral from "../../components/ReactPortal"
import ButtonSubmit from "../ButtonSubmit"

export default function Modal({
  pokemon,
  firstType,
  secondType,
  visible,
  onCancel,
  onConfirm,
  selectedTheme }) {

  if (!visible) {
    return null
  }

  return (
    <ReactPoral containerId="modal-root">
      <Overlay>
        <Container>
          <Header>
            <small>Detalhes</small>
            {selectedTheme === "Dark" && (
              <button onClick={onCancel}>
                <img src={CloseDark} alt="Close Dark" />
              </button>
            )}
            {selectedTheme === "Light" && (
              <button onClick={onCancel}>
                <img src={CloseWhite} alt="Close White" />
              </button>
            )}
          </Header>
          <Body>
            <h2>Pikachu</h2>
            <img src={pokemon.sprites.front_default} alt="" />
            <img src={pokemon.sprites.back_default} alt="" />
            <div className="infoContainer">
              <p>{pokemon.height}m</p>
              <p>{pokemon.weight}kg</p>
            </div>
            <div className="containerType">
              <FirstTypePokemon
                firstType={firstType}
              >
                {firstType === 'normal' && <small>normal</small>}
                {firstType === 'fighting' && <small>fighting</small>}
                {firstType === 'flying' && <small>flying</small>}
                {firstType === 'poison' && <small>poison</small>}
                {firstType === 'ground' && <small>ground</small>}
                {firstType === 'rock' && <small>rock</small>}
                {firstType === 'bug' && <small>bug</small>}
                {firstType === 'ghost' && <small>ghost</small>}
                {firstType === 'steel' && <small>steel</small>}
                {firstType === 'fire' && <small>fire</small>}
                {firstType === 'water' && <small>water</small>}
                {firstType === 'grass' && <small>grass</small>}
                {firstType === 'electric' && <small>electric</small>}
                {firstType === 'psychic' && <small>psychic</small>}
                {firstType === 'ice' && <small>ice</small>}
                {firstType === 'dragon' && <small>dragon</small>}
                {firstType === 'dark' && <small>dark</small>}
                {firstType === 'fairy' && <small>fairy</small>}
                {firstType === 'unknown' && <small>unknown</small>}
                {firstType === 'shadow' && <small>shadow</small>}
              </FirstTypePokemon>
              <SecondTypePokemon
                secondType={secondType}
              >
                {secondType === 'normal' && <small>normal</small>}
                {secondType === 'fighting' && <small>fighting</small>}
                {secondType === 'flying' && <small>flying</small>}
                {secondType === 'poison' && <small>poison</small>}
                {secondType === 'ground' && <small>ground</small>}
                {secondType === 'rock' && <small>rock</small>}
                {secondType === 'bug' && <small>bug</small>}
                {secondType === 'ghost' && <small>ghost</small>}
                {secondType === 'steel' && <small>steel</small>}
                {secondType === 'fire' && <small>fire</small>}
                {secondType === 'water' && <small>water</small>}
                {secondType === 'grass' && <small>grass</small>}
                {secondType === 'electric' && <small>electric</small>}
                {secondType === 'psychic' && <small>psychic</small>}
                {secondType === 'ice' && <small>ice</small>}
                {secondType === 'dragon' && <small>dragon</small>}
                {secondType === 'dark' && <small>dark</small>}
                {secondType === 'fairy' && <small>fairy</small>}
                {secondType === 'unknown' && <small>unknown</small>}
                {secondType === 'shadow' && <small>shadow</small>}
              </SecondTypePokemon>
            </div>
          </Body>
          <Footer>
            <small>Estatisticas</small>
            <div className="info">
              <small>HP</small>
              <ProgressBar pokemon={pokemon.stats[0].base_stat}/>
              <small>{pokemon.stats[0].base_stat}</small>
            </div>
            <div className="info">
              <small>ATK</small>
              <ProgressBar pokemon={pokemon.stats[1].base_stat}/>
              <small>{pokemon.stats[1].base_stat}</small>
            </div>
            <div className="info">
              <small>DEF</small>
              <ProgressBar pokemon={pokemon.stats[2].base_stat}/>
              <small>{pokemon.stats[2].base_stat}</small>
            </div>
            <div className="info">
              <small>S.ATK</small>
              <ProgressBar pokemon={pokemon.stats[3].base_stat}/>
              <small>{pokemon.stats[3].base_stat}</small>
            </div>
            <div className="info">
              <small>S.DEF</small>
              <ProgressBar pokemon={pokemon.stats[4].base_stat}/>
              <small>{pokemon.stats[4].base_stat}</small>
            </div>
            <div className="info">
              <small>SPD</small>
              <ProgressBar pokemon={pokemon.stats[5].base_stat}/>
              <small>{pokemon.stats[5].base_stat}</small>
            </div>
          </Footer>
          <ContainerButton>
              <ButtonSubmit
                modalSubmit
                onClick={onConfirm}
              >
                Adicionar aos favoritos
              </ButtonSubmit>
          </ContainerButton>
        </Container>
      </Overlay>
    </ReactPoral>
  )
}

Modal.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
}
