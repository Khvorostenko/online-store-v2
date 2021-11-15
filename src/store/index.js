import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    loading: false,
    error: null,
    cart: [],
    snackbar: false,
  },
  mutations: {
    SetProducts: (state, payload) => {
      state.products = payload
    },
    // AddProduct: (state, payload) => {
    //   state.products.push(payload)
    // },
    SetLoading(state, payload) {
      state.loading = payload
    },
    SetSnackbar(state, payload) {
      state.snackbar = payload,
        setTimeout(() => state.snackbar = false, 1000)
    },
    AddToShoppingCart(state, product) {
      state.cart.push(product);
    },
    DeleteItemCart(state, item) {
      const cartIndex = state.cart.indexOf(item)
      state.cart.splice(cartIndex, 1)
      item.disable = false;
    },
    RangePrice(state, range){
      console.log(range[1])
      state.products = state.products.filter(product=> product.price > range[0] && product.price < range[1])
      console.log(state.products)
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        await axios.get('https://vue-store-46b92.firebaseio.com/products.json')
          .then(response => context.commit('SetProducts', response.data))
          .then(() => setTimeout(() => context.commit('SetLoading', true), 1000))
      } catch (error) {
        context.commit('SetLoading', false)
      }
    },
    // saveProduct: async (context, payload) => {
    //   await axios.post('https://vue-store-46b92.firebaseio.com/products.json', {
    //     title: payload.title,
    //     description: payload.description,
    //     price: payload.price,
    //     category: payload.category,
    //     src: payload.src,
    //     disable: payload.disable
    //   });
    //   context.commit('addProduct', payload)
    // },
  },
  getters: {
    MEN: state => {
      return state.products.filter(
        (product) => product.category == "men"
      )
    },
    WOMEN: state => {
      return state.products.filter(
        (product) => product.category == "women"
      )
    },
    BOYS: state => {
      return state.products.filter(
        (product) => product.category == "boys"
      )
    },
    GIRLS: state => {
      return state.products.filter(
        (product) => product.category == "girls"
      )
    },
    PRODUCTBYID(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    },
    ITEMSINCART(state) {
      return state.cart.length
    },
  }
})