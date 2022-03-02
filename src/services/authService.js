import api from './services/api';
import config from '../config.json';
import jwtDecode from 'jwt-decode';

api.setToken(getToken());

async function login(data) {
    const { data: token } = await api.post(config.apiRootURL + '/api/auth', data);
    localStorage.setItem('token', token);
}
//Saves token to localStorage
async function loginSaveToken(token) {
    localStorage.setItem('token', token);
}
//Removes token from local localStorage
function logout() {
    localStorage.removeItem('token');
}
function getCurrentUser() {
    try {
        const token = localStorage.getItem('token');
        const user = jwtDecode(token);
        return user;
    } catch (error) {
        return null;
    }
}

function getToken() {
    return localStorage.getItem('token');
}
export default {
    login,
    loginSaveToken,
    logout,
    getCurrentUser,
    getToken
};