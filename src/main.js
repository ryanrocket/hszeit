import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  watch: {
    isModalVisible: function() {
      if(this.isModalVisible){
        document.documentElement.style.overflow = 'hidden'
        return
      }

      document.documentElement.style.overflow = 'auto'
    }
  },
  created() {
    console['log']("[MAIN] App successfully created");
  }
}).$mount('#app')
