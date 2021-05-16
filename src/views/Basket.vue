<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    function order() {
      console.log(store.state.basket);
    }
    return {
      order,
    };
  },
};
</script>

<template>
  <div class="basket-container">
    <table border="1">
      <tr>
        <th>Product</th>
        <th>Ingredients</th>
        <th>Size</th>
        <th>Price</th>
      </tr>
      <tr v-for="item in $store.state.basket" :key="item">
        <td>{{ item.product }}</td>
        <td v-if="item.product == 'drink'">{{ item.name }}</td>
        <td v-if="item.product == 'pizza'">{{ item.selecteds.join(",") }}</td>
        <td v-if="item.product == 'pizza'">{{ item.size.size }}</td>
        <td v-if="item.product == 'pizza'">{{ item.price }}</td>
        <td colspan="2" v-if="item.product == 'drink'">{{ item.price }}₺</td>
      </tr>
      <tr>
        <td colspan="4">Total Price: {{ $store.getters.totalPrice }}₺</td>
      </tr>
    </table>
    <div class="add-drink">
      <div class="drink" v-for="drink in $store.state.drinks" :key="drink">
        <img
          @click="$store.commit('addDrinkToBasket', drink)"
          :title="drink.name"
          :src="drink.url"
          :alt="drink.name"
        />
      </div>
    </div>
    <button @click="order" class="order-now">ORDER NOW</button>
  </div>
</template>


<style scoped>
.basket-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.order-now {
  cursor: pointer;
  background: #006994;
  padding: 1rem 2rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
}
.add-drink {
  width: 100%;
  min-height: 5rem;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.basket-container table {
  width: 100%;
  border-collapse: collapse;
}
img {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}
th,
td {
  text-align: center;
  padding: 0.5rem;
}
</style>