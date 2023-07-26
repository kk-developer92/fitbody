// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
  ],
  image: {
    dir: 'img'
  },
  ssr: true,
  app: {
    head: {
      title: "Тренировки, питание, курсы",
      meta: [
        { name: "description", content: "Здесь представлены самые эффективные методы тренировок, которые пропущены через призму БИОМЕХАНИКИ, АНАТОМИИ мышц и ФИЗИОЛОГИИ мышечной деятельности" }
      ]
    }
  }
})


