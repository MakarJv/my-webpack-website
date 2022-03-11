import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import store from './store'
import router from './router'
import Loader from './components/app/Loader'
import Date from './components/app/Date'
import dateFilter from './filters/date.filter'
import Paginate from 'vuejs-paginate'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)
Vue.component('Date', Date)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyDin-KUBJ9LEv-4o66o_7LNeTvKNGdkbKo",
  authDomain: "my-webpack-website.firebaseapp.com",
  projectId: "my-webpack-website",
  storageBucket: "my-webpack-website.appspot.com",
  messagingSenderId: "781463148704",
  appId: "1:781463148704:web:7adcd44884a55835f411c5",
  databaseURL: "https://my-webpack-website-default-rtdb.europe-west1.firebasedatabase.app/"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      components: {App},
      template: '<App/>'
    })
  }
})


