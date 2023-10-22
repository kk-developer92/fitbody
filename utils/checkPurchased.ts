export default function (path: string, id: any) {
    const storage: any = localStorage.getItem('user');
    const user = JSON.parse(storage);
    
    if (!user.phone) {
        return false;
    }
    
    if (!user[path]?.length) {
        return false;
    }
    
    for (let el of user[path]) {
        if (el._id === id) {
            return true;
        } else {
            return false;
        }
    }
}