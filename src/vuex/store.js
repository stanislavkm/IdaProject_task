import { createStore } from 'vuex'
import axios from "axios";
export const store = createStore({
    state:{
        isMobile: false,
        items: [],
    },
    mutations:{
        CHANGE_MOBILE_VALUE: (state) => {
            state.isMobile = !state.isMobile;
        }, 
        SET_ITEMS_TO_STATE: (state, items) =>{
            state.items = items;
        },
        // SET_ITEM_TO_STATE: (state, item) =>{
        //     let cloneItem = {...item}
        //     console.log(cloneItem)
        //     state.items.push(cloneItem);
        // }, 
        SET_ITEM_TO_STATE: (state, item) =>{
            let cloneItem = {...item}
            state.items.push(cloneItem)
            alert(`Товар ${cloneItem.name} добавлен!`)
        },
        REMOVE_ITEM_FROM_STATE: (state, name) =>{
            state.items = state.items.filter(i => i.name !== name)
            alert(`Товар ${name} успешно удален!`)
        }
    },
    actions:{
        TOGGLE_MOBILE_VALUE:({commit}) =>{
            commit('CHANGE_MOBILE_VALUE');
        },
        GET_ITEMS_FROM_API({commit}){
            return axios('http://localhost:3000/items',{
                method: "GET"
            })
                .then((items)=>{
                    commit('SET_ITEMS_TO_STATE', items.data);
                    return items;
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        // ADD_TO_ITEMS({commit}, item){
        //     return axios.post('http://localhost:3000/items', item)
        //         .then((item)=>{
        //             commit('SET_ITEM_TO_STATE', item.data);
        //             return item;
        //         })
        //         .catch((error)=>{
        //             console.log(error)
        //         }) 
        // },
        ADD_TO_ITEMS({commit}, item){
            commit('SET_ITEM_TO_STATE', item);
        },
        REMOVE_FROM_ITEMS({commit}, name){
            commit('REMOVE_ITEM_FROM_STATE', name);
        }

    },
    getters:{
        MOBILE_VALUE(state){
            return state.isMobile;
        },
        ITEMS(state){
            return state.items;
        },
    },
})