//PropTypes
import PropTypes from "prop-types"

//styled-components
import { Container, InfoPokemon, FirstTypePokemon, SecondTypePokemon, ContainerButton } from "./styles"

//components
import ButtonSubmit from "../../components/ButtonSubmit"
import Modal from "../Modal"

//images
import toogleHeartOff from "../../assets/images/icons/heart-no-star.svg"
import toogleHeartON from "../../assets/images/icons/heart-with-star.svg"

//hooks
import { useState } from "react"

//context
import { useContext } from "react"
import FavoriteContext from "../../context/FavoriteContext"

export default function Card({ pokemon, firstType, secondType, selectedTheme }) {

  const { favoritePokemons, updatedFavoritePokemons } = useContext(FavoriteContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDetailsPokemon() {
    setIsOpen(true)
  }

  function handleCloseDetailsPokemon() {
    setIsOpen(false)
  }

  function handleFavoriteToggle() {
    updatedFavoritePokemons(pokemon.name)
    setIsOpen(false)
  }

  return (
    <Container>
      <div className="favoriteButton">
        <button onClick={() => handleFavoriteToggle(pokemon)}>
          {favoritePokemons.includes(pokemon.name) && (
            <img src={toogleHeartON} alt="Coração Favorito" />
          )}
          {!favoritePokemons.includes(pokemon.name) && (
            <img src={toogleHeartOff} alt="Coração Favorito" />
          )}
        </button>
      </div>
      <img src={pokemon.sprites.front_default} alt="Exemplo" />
        <InfoPokemon>
          <p>{pokemon.name}</p>
          <p>ID: {pokemon.id}</p>
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
        </InfoPokemon>

      <ContainerButton>
        <ButtonSubmit
          size={12}
          height={32}
          onClick={() => handleOpenDetailsPokemon()}
        >
          Ver detalhes
        </ButtonSubmit>
      </ContainerButton>

      <Modal
        pokemon={pokemon}
        firstType={firstType}
        secondType={secondType}
        visible={isOpen}
        onCancel={handleCloseDetailsPokemon}
        onConfirm={handleFavoriteToggle}
        selectedTheme={selectedTheme}
      />
    </Container>
  )
}

Card.propTytpes = {
  pokemon: PropTypes.shape().isRequired,
  firstType: PropTypes.string.isRequired,
  secondType: PropTypes.string.isRequired,
  selectedTheme: PropTypes.bool.isRequired,
}
