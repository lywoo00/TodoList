import {createStore} from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'
// Vue.use(Vuex);


export const store = createStore({
  modules: {
    todoApp
  }
})