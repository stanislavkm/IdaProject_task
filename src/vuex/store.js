import { createStore } from 'vuex'
export const store = createStore({
    state:{
        isMobile: false,
    },
    mutations:{
        CHANGE_MOBILE_VALUE: (state) => {
            state.isMobile = !state.isMobile;
        }, 
    },
    actions:{
        TOGGLE_MOBILE_VALUE:({commit}) =>{
            commit('CHANGE_MOBILE_VALUE');
        },
    },
    getters:{
        MOBILE_VALUE(state){
            return state.isMobile;
        },
    },
})