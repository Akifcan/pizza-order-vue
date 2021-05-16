<script>
import Ingredient from "@/components/Ingredient.vue";
import Pizza from "@/components/Pizza.vue";
import Price from "@/components/Price.vue";
import Size from "@/components/Size.vue";
export default {
  components: {
    Ingredient,
    Pizza,
    Price,
    Size,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="create-pizza-container">
    <button
      class="total-item"
      @click="$router.push({ name: 'basket' })"
      :data-total-item="$store.state.basket.length"
    >
      🛒
    </button>
    <Size />
    <Pizza />
    <Price />
    <Ingredient />
  </div>
</template>

<style scoped>
.create-pizza-container {
  min-height: 100vh;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
.total-item {
  cursor: pointer;
  position: absolute;
  right: 5%;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: #006994;
  border: none;
  transition: transform 250ms linear;
}
.total-item::before {
  position: absolute;
  top: 0;
  background: white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  right: 0;
  content: attr(data-total-item);
}
.total-item:hover {
  transform: scale(1.3);
}
</style>


