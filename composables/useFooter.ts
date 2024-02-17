import {bus} from "~/constants";

export const useFooter = (id: string) => {
    return {
        show(data?: any) {
            bus.emit('footer.show', {id, data: data || {}})
        },
        hide() {
            bus.emit('footer.hide', {id})
        }
    };
}