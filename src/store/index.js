import Vue from "vue";
import Vuex from "vuex";
import { uuid } from 'vue-uuid'; 
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      userName: "hosseinx",
      userFullName: "hossein Sheikhi",
      userId: 1,
    },
    shopData: {
      shopList: [],
      totalShopPrice: 0,
      totalShopItem: 0,
    },
  },
  getters: {
    userData: (state) => {
      return state.userData;
    },
    shopData: (state) => {
      return state.shopData;
    },
  },
  mutations: {
    addItemToCart: (state, payload) => {
      if (!payload) return;
      payload.orderId= uuid.v1()
      state.shopData.shopList.push(payload);
      state.shopData.totalShopPrice +=parseInt(payload.carPrice) ;
      state.shopData.totalShopItem++;
    },
    deleteItemFromCart: (state, payload) => {
      if (!payload) return;
      debugger
      let index = state.shopData.shopList.findIndex(
        (itm) => itm.orderId === payload.orderId
      );
      if (index == -1) {
        console.log("deleteItemFromCart index ", index);
        return;
      }
      state.shopData.shopList.splice(index, 1);

      state.shopData.totalShopPrice -=parseInt(payload.carPrice) ;
      state.shopData.totalShopItem--;
    },
  },
  actions: {
    addItemToCart: ({ commit }, payload) => {
      commit("addItemToCart", payload);
    },
    deleteItemFromCart: ({ commit }, payload) => {
      commit("deleteItemFromCart", payload);
    },
    
  },
  modules: {},
});
