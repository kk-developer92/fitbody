export default function (path: string, id: any) {
    const storage: any = localStorage.getItem('user');
    const user = JSON.parse(storage);
    
    if (!user.phone) {
        return false;
    }
    
    if (!user[path]?.length) {
        return false;
    }
    const arr = user[path];
    
    const res = arr.filter((el: any) => el._id === id);
    return res.length > 0;
}