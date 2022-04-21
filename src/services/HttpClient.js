import axios from "axios";
axios.defaults.baseURL = process.env.REACT_BASE_URL;

const get = (url, config = {}) => {
    return axios
        .get(url, config)
        .then((response) => response)
        .catch((error) => console.log(error));
};

export { get };
