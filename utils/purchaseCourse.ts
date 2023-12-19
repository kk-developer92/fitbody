import axios from "axios";

export default async function (user: any, props: any) {
    const url = import.meta.env.VITE_API_URL;
    
    const training = await getCurrent(props.id, `/${props.place}`);
    const usr = await axios.get(url + `/users/${user._id}`);
    const trainings = [...usr.data[props.place], training];
    
    await axios.patch(url + `/users/${user._id}`, {
        [props.place]: trainings
    });
}