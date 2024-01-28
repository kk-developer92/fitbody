// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    optimization: undefined,
    // @ts-ignore
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        'nuxt-ssr-cache'
    ], // If you provide a version, it will be stored inside cache.
    // Later when you deploy a new version, old cache will be
    // automatically purged.
    cache: {
        // if you're serving multiple host names (with differing
        // results) from the same server, set this option to true.
        // (cache keys will be prefixed by your host name)
        // if your server is behind a reverse-proxy, please use
        // express or whatever else that uses 'X-Forwarded-Host'
        // header field to provide req.hostname (actual host name)
        useHostPrefix: false,
        pages: [
            // these are prefixes of pages that need to be cached
            // if you want to cache all pages, just include '/'
            '/',
        ],
        
        store: {
            type: 'memory',
            
            // maximum number of pages to store in memory
            // if limit is reached, least recently used page
            // is removed.
            max: 100,
            
            // number of seconds to store this page in cache
            ttl: 60,
        },
    },
    
    ssr: true,
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


