//styled-components
import { Container, Content, CardsOrganize } from "./styles"

//hooks
import { useState, useMemo, useEffect } from "react"

//components
import Loader from "../../components/Loader"
import PageHeader from "../../components/PageHeader"
import FormGroup from "../../components/FormGroup"
import Input from "../../components/Input"
import Card from "../../components/Card"

//service
import { getPokemons, getPokemonsData } from "../../services/PokemonService"

export default function Procurar({ selectedTheme }) {

  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')

  const filteredPokemons = useMemo(() => pokemons.filter((pokemon) => (
    pokemon.name.toLowerCase().startsWith(searchPokemon.toLowerCase())
  )), [pokemons, searchPokemon])

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true)

        const data = await getPokemons()
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonsData(pokemon.url)
        })

        const results = await Promise.all(promises)

        setPokemons(results)
      } catch (error) {
        console.log({ error })
      } finally {
        setIsLoading(false)
      }
    }

    loadPokemons()
  }, [])

  function handleName(event) {
    setSearchPokemon(event.target.value)
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        selectedTheme={selectedTheme}
      />

      <Content>
        <FormGroup
          selectedTheme={selectedTheme}
        >
          <Input
            maxLength="15"
            value={searchPokemon}
            onChange={handleName}
            placeholder="Procure por pokémons"
          />
        </FormGroup>
      </Content>

      <CardsOrganize>
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemon={pokemon}
            firstType={pokemon.types[0].type.name}
            secondType={pokemon.types[1]?.type.name}
            selectedTheme={selectedTheme}
          />
        ))}
      </CardsOrganize>
    </Container>
  )
}
