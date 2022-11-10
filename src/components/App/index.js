//styled-components
import Theme from "../../assets/styles/themes"
import { ThemeProvider } from "styled-components"
import GlobalStyled from "../../assets/styles/global"
import { Container } from "./styles"

//components
import ButtonTheme from "../ButtonTheme"

//Routes
import { BrowserRouter } from "react-router-dom"
import ReactRoutes from "../../Routes"

//hooks
import { useState, useMemo, useEffect, useCallback } from "react"

//context
import { FavoriteProvider } from "../../context/FavoriteContext"

export default function App() {

  const [ favorites, setFavorites ] = useState([])

  const loadFavoritesPokemons = useCallback(() => {
    const pokemons = JSON.parse(localStorage.getItem("FavoriteKey")) || []
    setFavorites(pokemons)
  }, [])

  useEffect(() => {
    loadFavoritesPokemons()
  }, [loadFavoritesPokemons])

  function updatedFavoritePokemons(name) {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    localStorage.setItem("FavoriteKey", JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const [ theme, setTheme ] = useState(JSON.parse(localStorage.getItem("theme")))

  const currentTheme = useMemo(() => {
    return Theme[theme] || Theme.Dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => prevState === "Dark" ? "Light" : "Dark")
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <BrowserRouter>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updatedFavoritePokemons: updatedFavoritePokemons,
        }}
      >
        <ThemeProvider theme={currentTheme}>
          <GlobalStyled />
            <ButtonTheme
              onClick={handleToggleTheme}
              selectedTheme={theme}
            />

          <Container>
            <ReactRoutes
              selectedTheme={theme}
              />
          </Container>
        </ThemeProvider>
      </FavoriteProvider>
    </BrowserRouter>
  )
}
