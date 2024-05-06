export default defineNuxtConfig({
  modules: [
    ['nuxt-mail', {
      smtp: {},
      message: { to: 'foo@bar.de' },
    }],
  ],
})
