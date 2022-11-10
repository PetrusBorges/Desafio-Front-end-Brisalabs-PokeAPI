//styled-components
import { Container, Content, CardsOrganize } from "./styles"

//hooks
import { useState, useEffect, useCallback } from "react"

//components
import Loader from "../../components/Loader"
import PageHeader from "../../components/PageHeader"
import Card from "../../components/Card"

//service
import { getPokemons, getPokemonsData } from "../../services/PokemonService"

export default function VerTodos({ selectedTheme }) {

  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [typesPokemonsNormal, setTypesPokemonsNormal] = useState("normal")
  const [typesPokemonsFlying, setTypesPokemonsFlying] = useState("flying")
  const [typesPokemonsPoison, setTypesPokemonsPoison] = useState("poison")
  const [typesPokemonsBug, setTypesPokemonsBug] = useState("bug")
  const [typesPokemonsFire, setTypesPokemonsFire] = useState("fire")
  const [typesPokemonsGrass, setTypesPokemonsGrass] = useState("grass")
  const [typesPokemonsWater, setTypesPokemonsWater] = useState("water")

  const loadPokemons = useCallback(async () => {
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
  }, [])

  useEffect(() => {
    loadPokemons()
  }, [loadPokemons])

  function handleToggleTypes() {
    loadPokemons()
  }

  async function handleToggleNormalTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsNormal(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[0].type.name === typesPokemonsNormal
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleToggleFlyingTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsFlying(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[1]?.type.name === typesPokemonsFlying
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleTogglePoisonTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsPoison(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[1]?.type.name === typesPokemonsPoison
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleToggleBugTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsBug(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[0].type.name === typesPokemonsBug
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleToggleFireTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsFire(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[0].type.name === typesPokemonsFire
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleToggleGrassTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsGrass(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[0].type.name === typesPokemonsGrass
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  async function handleToggleWaterTypes(types) {
    try {
      setIsLoading(true)
      setTypesPokemonsWater(types)

      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promises)

      setPokemons(results.filter(
        (pokemon) => pokemon.types[0].type.name === typesPokemonsWater
      ))
    } catch {} finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        selectedTheme={selectedTheme}
      />

      <Content>
        <button onClick={() => handleToggleTypes()}>
          Todos
        </button>

        <button onClick={() => handleToggleNormalTypes('normal')}>
          Normal
        </button>

        <button onClick={() => handleToggleFlyingTypes('flying')}>
          Flying
        </button>

        <button onClick={() => handleTogglePoisonTypes('poison')}>
          Poison
        </button>

        <button onClick={() => handleToggleBugTypes('bug')}>
          Bug
        </button>

        <button onClick={() => handleToggleFireTypes('fire')}>
          Fire
        </button>

        <button onClick={() => handleToggleWaterTypes('water')}>
          Water
        </button>

        <button onClick={() => handleToggleGrassTypes('grass')}>
          Grass
        </button>
      </Content>

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
    </Container>
  )
}
