import Vue from "vue";
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        //  当前登录用户信息
        userInfo: null,
        //  是否已拉取用户菜单
        isLoadMenu: false,
        //  所有菜单（系统+用户动态授权）
        routers: null,
        //  当前激活菜单
        activeIndex: '首页'
    },
    mutations: {
        //  是否拉取用户菜单
        loadMenuMutation(state, payload){
            state.isLoadMenu = payload
        },
        //  缓存用户菜单列表
        routerMutation(state, payload){
            state.routers = payload
        },
        //  缓存用户token
        tokenMutation(state, payload){
            state.token = payload
        },
        //  缓存当前登录用户信息
        userInfoMutation(state, payload){
            state.userInfo = payload
        },
        //  当前激活菜单
        activeMutation(state, payload){
            state.activeIndex = payload
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
        },
        //  缓存用户token
        tokenAction(context, data){
            context.commit('tokenMutation', data)
        },
        //  缓存当前登录用户信息
        userInfoAction(context, data){
            context.commit('userInfoMutation', data)
        },
        //  当前激活菜单
        activeIndexAction(context, data){
            context.commit('activeMutation', data)
        }

    },
    plugins: [createPersistedState({storage: sessionStorage})]
})

export default store