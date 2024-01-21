import axios from "axios";

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
                }
            });
        },
        get(id: string) {
            return axios.get(`${url}/${id}`);
        },
        patch(id: string, data: any) {
            return axios.patch(`${url}/${id}`);
        },
        delete(id: string) {
            return axios.delete(`${url}/${id}`);
        }
    };
}