import {useCookie} from "#build/imports";
import axios from "axios";

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

export function setToken(token: string) {
    const cookie = useCookie('token');
    cookie.value = token;
    localStorage.setItem('token', token);
}

export function login(phone: string, password: string): any {
    return axios.post(import.meta.env.VITE_API_URL + '/authorization', {
        role: 'user',
        strategy: 'local',
        phone,
        password
    });
}

