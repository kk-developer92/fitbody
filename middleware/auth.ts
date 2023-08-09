export default defineNuxtRouteMiddleware((to, from) => {
    const cookies = useCookie('bonds');

    if (cookies.value) {
        return;
    }

    return navigateTo('/');
})