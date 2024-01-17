// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        'nuxt-multi-cache'
    ],
    multiCache: {
        component: {
            // If true the cache is enabled.
            // If false the cache is disabled, but the component is still added to
            // the build.
            enabled: true,
        }
    },
    ssr: false,
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


