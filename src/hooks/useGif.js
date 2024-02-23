import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = 'sUhxCM0NQxpbBLXFpfbF9zpQXTqFQ2dO';

const useGif = (tag) => {
    const [loader, setloader] = useState(false);
    const [source, setsource] = useState('');

    async function fetchdata(tag) {
        setloader(true); // Set loader to true before making the API call
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag ? tag : ''}&rating=g`;
        try {
            const response = await axios.get(url);
            const img = response.data.data.images.downsized_medium.url;
            setsource(img);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        } finally {
            setloader(false); // Set loader to false after the API call is completed
        }
    }

    useEffect(() => {
        fetchdata('');
    }, []);

    return { loader, source, fetchdata };
}

export default useGif;
