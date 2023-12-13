import {useCookie} from "#build/imports";
import axios from "axios";
import {Ref} from "vue";

const pushRoute = import.meta.env.VITE_HOST_URL;

function decodeBase64(data: string): string {
    if (process.server) {
        const buff = Buffer.from(data, 'base64');
        return buff.toString('ascii');
    }
    return window.atob(data);
}

export function parseJwt(token: string): { iat: number, exp: number, sub: string } {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(decodeBase64(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
}

export function login(phone: string, password: string, isLoading: Ref<boolean>) {
    const result = {
        showError: false,
        errorMessage: '',
    };
    return axios.post(import.meta.env.VITE_API_URL + '/authorization', {
        role: 'user',
        phone,
        password
    }).then(async (response) => {
        const token = useCookie('token');
        token.value = response.data.token;
        isLoading.value = false;
        await useRouter().push(pushRoute);
    })
}

export function signup(phone: string, password: string, name: string, isLoading: Ref<boolean>) {
    const result = {
        showError: false,
        errorMessage: '',
    };
    return axios.post(import.meta.env.VITE_API_URL + '/users', {
        role: 'user',
        phone,
        password,
        name
    }).then(async (response) => {
        const token = useCookie('token');
        token.value = response.data.token;
        isLoading.value = false;
        await useRouter().push(pushRoute);
    })
}
