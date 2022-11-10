//context
import { createContext } from "react";

const FavoriteContext = createContext({

  favoritePokemons: [],
  updatedFavoritePokemons: (id) => null

})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext
