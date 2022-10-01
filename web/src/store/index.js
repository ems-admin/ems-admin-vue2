import Vue from "vue";
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        isLoadMenu: false,
        routers: null
    },
    mutations: {
        //  是否拉取用户菜单
        loadMenuMutation(state, payload){
            state.isLoadMenu = payload
        },
        //  缓存用户菜单列表
        routerMutation(state, payload){
            state.routers = payload
        }
    },
    actions: {
        //  是否拉取用户菜单
        loadMenuAction(context, data){
            context.commit('loadMenuMutation', data)
        },
        //  缓存用户菜单列表
        routerAction(context, data){
            context.commit('routerMutation', data)
        }
    },
    plugins: [createPersistedState({storage: sessionStorage})]
})

export default store