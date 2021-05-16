<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const price = computed(() => store.state.currentBasket.price);

    watch(price, (newValue, oldValue) => {
      document.querySelector(".price").style.animation =
        "priceScale 250ms cubic-bezier(1, 0, 0, 1)";
      setTimeout(() => {
        document.querySelector(".price").style.animation = "";
      }, 250);
    });

    return {};
  },
};
</script>

<template>
  <div class="price">
    <h1>{{ $store.state.currentBasket.price }}₺</h1>
    <button @click="$store.commit('addToBasket')">Add to basket</button>
  </div>
</template>

<style>
.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.price button {
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  background: #006994;
  color: white;
  border: 0;
  border-radius: 0.3rem;
}
@keyframes priceScale {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>