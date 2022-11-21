import axios from "axios";

const API_KEY = "31355612-a9612f60f77731ac07ff0cc21";

export const fetchImages = async (searchValue, page) => {
    const response = axios.get(`https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return (await response).data.hits;
}


