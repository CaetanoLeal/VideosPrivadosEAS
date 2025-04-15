import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import en from '../locale/en'

Vue.use(Vuetify)

Vue.component('signin', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'en'
    }
  }
})

export default new Vuetify({
  lang: {
    locales: { en },
    current: 'en'
  },
  theme: {
    themes: {
      light: {
        primary: '#506648' // #E53935
      }
    }
  }
})
