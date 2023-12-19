import axios from "axios";

export default async function (user: any, props: any) {
    const url = import.meta.env.VITE_API_URL;
    
    const training = await getCurrent(props.id, `/${props.place}`);
    
    const usr: any = await axios.get(url + `/users/${user._id}`);
    if (+training.price === 0) {
        const trainings = [...usr.data[props.place], training];
        
        await axios.patch(url + `/users/${user._id}`, {
            [props.place]: trainings
        });
        navigateTo('/account');
    } else {
        navigateTo({
            path: `/payment/${training._id}`,
            query: {
                model_name: props.place,
                price: training.price,
                user_id: usr._id
            }
        });
    }
}