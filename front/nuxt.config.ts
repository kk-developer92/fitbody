// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  devtools: { enabled: false },
  head: {
    //...
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ralevay'
      }
    ]
  },
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  script: [
    {
      src: "@/node_modules/bootstrap/dist/js/bootstrap.bundle.js"
    }
  ]
})
