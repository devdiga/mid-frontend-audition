import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        welcome: 'Welcome',
        home: 'Home',
        about: 'About'
      }
    },
    fr: {
      message: {
        welcome: 'Bienvenue',
        home: 'Accueil',
        about: 'A propos'
      }
    }
  }
})

export default i18n


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import i18n from './i18n'

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

//Todo Parte que iria no Main Js

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <template>
// <div>
// <button @click="changeLanguage('en')">English</button>
// <button @click="changeLanguage('fr')">French</button>
// <h1>{{ $t('message.welcome') }}</h1>
// <router-link :to="{ name: 'home' }">{{ $t('message.home') }}</router-link>
// <router-link :to="{ name: 'about' }">{{ $t('message.about') }}</router-link>
// </div>
// </template>
//
// <script>
//   export default {
//   methods: {
//   changeLanguage(locale) {
//   this.$i18n.locale = locale
// }
// }
// }
// </script>

//Todo Parte que iria no código da HomePage

