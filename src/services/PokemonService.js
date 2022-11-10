//utils
import delay from "../utils/delay"

export async function getPokemons() {
  try {
    await delay()
    let url = "https://pokeapi.co/api/v2/pokemon"
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log( "error", error )
  }
}

export async function getPokemonsData(url) {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log( "error", error )
  }
}
