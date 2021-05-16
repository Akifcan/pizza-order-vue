<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      document
        .querySelector(".ingredients")
        .addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("ingredient", e.target.id);
        });
    });
    return {};
  },
};
</script>

<template>
  <div class="ingredients">
    <div
      draggable="true"
      v-for="ingredient in $store.state.ingredients"
      :key="ingredient"
      class="ingredient"
      :id="ingredient.name"
    >
      <img :src="ingredient.url" :alt="ingredient.name" :id="ingredient.name" />
    </div>
  </div>
</template>

<style scoped>
.ingredients {
  width: 90%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.ingredient {
  cursor: pointer;
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  transition: transform 250ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

.ingredient:hover {
  transform: scale(1.1);
}

.ingredient img {
  width: 3rem;
}
</style>