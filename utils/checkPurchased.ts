export default function (path: string, id: any) {
    const storage: any = localStorage.getItem('user');
    const user = JSON.parse(storage);
    
    if (!user.phone) {
        return false;
    }
    
    if (!user[path]?.length) {
        return false;
    }
    
    for (let training of user.trainings) {
        if (training._id === id) {
            return true;
        } else {
            return false;
        }
    }
}