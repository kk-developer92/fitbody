// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    optimization: undefined,
    // @ts-ignore
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        'nuxt-ssr-cache'
    ],
    
    routeRules: {
        '/': {ssr: false}
    },
    app: {
        head: {
            title: "Тренировки, питание, курсы",
            meta: [
                {
                    name: "description",
                    content: "Здесь представлены самые эффективные методы тренировок, которые пропущены через призму БИОМЕХАНИКИ, АНАТОМИИ мышц и ФИЗИОЛОГИИ мышечной деятельности"
                }
            ]
        }
    }
});


