import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        //调用 store.commit('Mucount')
        Mucount(state) {
            setInterval(() => {
                state.count++;
            }, 1000)
        }

    },
    actions: {
        //分发 store.dispath('Mucount')
        //组件分发import { mapActions } from 'vuex'
        //mapActions(['Mucount'])
        Mucount(context) {
            context.commit('Mucount')
        },
    },
    getters: {
        GetcountAdd: (state) => {
            return state.count++;
        }
    }
})
