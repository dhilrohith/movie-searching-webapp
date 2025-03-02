import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(movie => movie.imdbID !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
