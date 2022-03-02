import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    console.log(expectedError)
    if (!expectedError) {
        console.log('interceptors:' + error);
        toast('Unexpected Error');
    } else {
        console.log('expected error:' + error);
        toast(`${error.response.statusText}: ${error.response.data}`);
    }
    return Promise.reject(error);
});

function setToken(token) {
    axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setToken
}