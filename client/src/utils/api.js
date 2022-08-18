import axios from 'axios';

export const getGames = async (query) => {
    try {
        const response = await axios.get(`/games-search?&searchTerm=${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};