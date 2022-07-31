import axios from 'axios';

const baseUrl = 'https://request.in';

export const getDataTest = async () => {
    try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        console.log("data movies", json);
        return (json);
    } catch (error) {
        console.log("error", error);
    }
};


