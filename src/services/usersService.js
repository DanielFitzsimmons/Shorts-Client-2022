import api from './services/api';
import config from '../config.json';
import FormData from 'form-data';

export default {
    get() {
        return api.get(config.apiRootURL + '/api/users/me');
    },
    post(data) {
        const formData = prepareFormData(data);
        return api.post(config.apiRootURL + '/api/users', formData, formConfig);
    },
    put(data) {
        const formData = prepareFormData(data);
        return api.put(config.apiRootURL + '/api/users', formData, formConfig);
    },
    delete() {
        return api.delete(config.apiRootURL + '/api/users/me');
    }
}
const formConfig = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

function prepareFormData(data) {
    let formData = new FormData()
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('avatar', data.upload);
    return formData;
}