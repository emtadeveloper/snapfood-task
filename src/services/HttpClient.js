// package

import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE;
console.log(process.env.REACT_APP_BASE);

const get = (url, config = {}) => {
    return axios
        .get(url, config)
        .then((response) => response)
        .catch((error) => console.log(error));
};

export { get };
