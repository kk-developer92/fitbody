import {parseJwt} from "~/utils/auth";

export default async function (id: any) {
    const cookie = useCookie('token');
    let token: any = {};
    
    if (!cookie.value) {
        return false;
    }
    
    token = parseJwt(cookie.value);
    
    if (!token.sub) {
        return false;
    }
    
    const res = await useService('rpc').create({
        method: 'CheckPurchased',
        data: {userId: token.sub, id}
    });
    
    return res.data.isPurchased;
}