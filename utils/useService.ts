import {setupCache} from 'axios-cache-interceptor';
import Axios from 'axios';

const instance = Axios.create();
const axios = setupCache(instance);

export default (service: string) => {
    const url = `${import.meta.env.VITE_API_URL}/${service}`;
    const token = useCookie('token');
    
    const config = {
        headers: {
            Authorization: token.value
        }
    };
    
    return {
        create(data: any) {
            return axios.post(url, data, config);
        },
        find(params?: any) {
            return axios.get(url, {
                params: {
                    query: params
                },
                ...config
            });
        },
        get(id: string) {
            return axios.get(`${url}/${id}`, config);
        },
        patch(id: string, data: any) {
            return axios.patch(`${url}/${id}`, data, config);
        },
        delete(id: string) {
            return axios.delete(`${url}/${id}`, config);
        }
    };
}