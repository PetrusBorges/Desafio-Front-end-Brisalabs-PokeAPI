//styled-components
import { Container, CardsOrganize } from "./styles"

//hooks
import { useState, useEffect, useCallback } from "react"

//components
import Loader from "../../components/Loader"
import PageHeader from "../../components/PageHeader"
import HasError from "../../components/HasError"
import Card from "../../components/Card"

//service
import { getPokemons, getPokemonsData } from "../../services/PokemonService"

export default function Favoritos({ selectedTheme }) {

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const loadPokemons = useCallback(async () => {
    try {
      setIsLoading(true)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadPokemons()
  }, [loadPokemons])

  function cancelError() {
    setHasError(false)
    loadPokemons()
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        selectedTheme={selectedTheme}
      />

      {hasError && (
        <HasError
          onClick={cancelError}
        />
      )}

      {!hasError && (
        <CardsOrganize>
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemon={pokemon}
              firstType={pokemon.types[0].type.name}
              secondType={pokemon.types[1]?.type.name}
              selectedTheme={selectedTheme}
            />
          ))}
        </CardsOrganize>
      )}
    </Container>
  )
}
