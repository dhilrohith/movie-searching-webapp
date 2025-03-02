const API_KEY = '1520b035';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1, type = '') => {
    try {
        const response = await fetch(`${BASE_URL}?s=${query}&page=${page}&type=${type}&apikey=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};
