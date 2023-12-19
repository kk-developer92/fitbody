import axios from "axios";

export default async function (path: string, id: any) {
    const url = import.meta.env.VITE_API_URL;
    const token: any = useCookie('token');
    
    if (!token.value) {
        return false;
    }
    
    const _id: any = parseJwt(token.value);
    const user: any = await axios.get(url + `/users/${_id._id}`);
    
    let purchased = [];
    for (let i of user.data[path]) {
        if (i._id === id) {
            purchased.push(i)
        }
    }
    
    return Boolean(purchased.length);
}