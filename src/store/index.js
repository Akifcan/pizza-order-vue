import { createStore } from 'vuex'

export default createStore({
  state: {
    resetPizza: false,
    ingredients: [
      {
        name: 'cheese',
        url: require('@/assets/images/ingredients/cheese.png'),
        price: 2
      },
      {
        name: 'cucumber',
        url: require('@/assets/images/ingredients/cucumber.png'),
        price: 1
      },
      {
        name: 'chili',
        url: require('@/assets/images/ingredients/chili.png'),
        price: 3
      },
      {
        name: 'garlic',
        url: require('@/assets/images/ingredients/garlic.png'),
        price: 1
      },
      {
        name: 'olive',
        url: require('@/assets/images/ingredients/olive.png'),
        price: 2
      },
      {
        name: 'onion',
        url: require('@/assets/images/ingredients/onion.png'),
        price: 1
      },
      {
        name: 'pea',
        url: require('@/assets/images/ingredients/pea.png'),
        price: 3
      },
      {
        name: 'pickle',
        url: require('@/assets/images/ingredients/pickle.png'),
        price: 4
      },
    ],
    drinks: [
      {
        name: 'water',
        url: require('@/assets/images/drinks/water.png'),
        price: 1
      },
      {
        name: 'ayran',
        url: require('@/assets/images/drinks/ayran.png'),
        price: 1
      },
      {
        name: 'coke',
        url: require('@/assets/images/drinks/coke.png'),
        price: 1
      },
      {
        name: 'ice-tea',
        url: require('@/assets/images/drinks/ice-tea.png'),
        price: 1
      },
      {
        name: 'sprite',
        url: require('@/assets/images/drinks/sprite.png'),
        price: 1
      },
    ],
    currentBasket: {
      product: 'pizza',
      price: 20,
      size: {
        size: 'm',
        price: 4
      },
      selecteds: []
    },
    basket: []
  },
  getters: {
    totalPrice(state) {
      return state.basket.reduce((total, current) => total + current.price, 0)
    }
  },
  mutations: {
    addIngredient(state, payload) {
      if (!state.currentBasket.selecteds.includes(payload.name)) {
        state.currentBasket.selecteds.push(payload.name)
        state.currentBasket.price += payload.price
      }
    },
    removeIngredient(state, payload) {
      state.currentBasket.selecteds.splice(payload.name, 1)
      state.currentBasket.price -= payload.price
    },
    addToBasket(state) {
      state.basket.push({ ...state.currentBasket })
      state.currentBasket.price = 20
      state.currentBasket.size = { size: 'm', price: 4 }
      state.currentBasket.selecteds = []
      state.resetPizza = true
    },
    addDrinkToBasket(state, drink) {
      state.basket.push({ ...drink, product: 'drink' })
    },
    changeSize(state, payload) {
      console.log(payload);
      if (payload.size != state.currentBasket.size.size) {
        state.currentBasket.price -= state.currentBasket.size.price
        state.currentBasket.size = payload
        state.currentBasket.price += state.currentBasket.size.price
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
