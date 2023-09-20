import axios from "axios";

export async function getCurrent(id: string | string[], route: string) {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + `${route}/` + id);

    return data;
}


export async function getNutrions(type?: string) {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + '/nutrition');
    if (type) {
        return data.data.filter((i: any) => i.type === type);
    }

    return data.data
}

export async function getTrainings(type?: string) {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + '/trainings');

    if (type) {
        return data.data.filter((i: any) => i.type == type);
    }

    return data.data
}

export async function getCourses(type?: string) {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + '/courses');

    if (type) {
        return data.data.filter((i: any) => i.type == type);
    }

    return data.data
}
