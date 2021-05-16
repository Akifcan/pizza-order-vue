<script>
import { ref } from "vue";
export default {
  setup() {
    let currentSize = ref("m");
    const sizes = [
      {
        size: "s",
        price: 2,
      },
      {
        size: "m",
        price: 4,
      },
      {
        size: "l",
        price: 6,
      },
    ];
    return {
      currentSize,
      sizes,
    };
  },
};
</script>

<template>
  <div class="size">
    <button
      v-for="size in sizes"
      :class="currentSize == size.size ? 'active' : ''"
      :key="size"
      @click="$store.commit('changeSize', size), (currentSize = size.size)"
    >
      {{ size.size }}
    </button>
  </div>
</template>


<style scoped>
.size {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.size button {
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem;
  background: white;
  color: black;
  border-radius: 0.2rem;
  border: none;
  transition: transform 250ms linear;
}
.size button.active {
  color: white;
  transform: scale(1.2);
  background: #006994;
}
</style>