<script>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const resetPizza = computed(() => store.state.resetPizza);
    watch(resetPizza, (newValue, oldValue) => {
      if (newValue == true) {
        const pizza = document.querySelector(".pizza-container .pizza");
        pizza.classList.add("turn-pizza");
        setIngredient("ingredient-item", false);
        store.state.resetPizza = false;
        setTimeout(() => pizza.classList.remove("turn-pizza"), 250);
      }
    });

    function setIngredient(element, show) {
      document.querySelectorAll(`.${element}`).forEach((item) => {
        let position;
        if (show) {
          position = item.dataset.in.split(",");
        } else {
          position = item.dataset.out.split(",");
        }
        item.style.top = position[0];
        item.style.left = position[1];
      });
    }

    onMounted(() => {
      const pizza = document.querySelector(".pizza-container");
      pizza.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!pizza.classList.contains("on-pizza")) {
          pizza.classList.add("on-pizza");
        }
      });
      pizza.addEventListener("dragexit", (e) => {
        e.preventDefault();
        if (pizza.classList.contains("on-pizza")) {
          pizza.classList.remove("on-pizza");
        }
      });
      pizza.addEventListener("drop", (e) => {
        e.preventDefault();
        const ingredient = e.dataTransfer.getData("ingredient");
        const currentIngredient = store.state.ingredients.find(
          (item) => item.name == ingredient
        );
        store.commit("addIngredient", currentIngredient);
        setIngredient(ingredient, true);
        if (pizza.classList.contains("on-pizza")) {
          pizza.classList.remove("on-pizza");
        }
      });
      document.querySelectorAll(".ingredient-item").forEach((item) => {
        item.addEventListener("click", (_) => {
          const ingredient = item.classList[1];
          const currentIngredient = store.state.ingredients.find(
            (item) => item.name == ingredient
          );
          setIngredient(ingredient, false);
          store.commit("removeIngredient", currentIngredient);
        });
      });
    });
    return {};
  },
};
</script>

<template>
  <div class="pizza-container">
    <img
      class="dish"
      :src="require('@/assets/images/ingredients/dish.png')"
      alt="dish"
    />
    <img
      class="pizza"
      :src="require('@/assets/images/ingredients/pizza-1.png')"
      alt="dish"
    />
    <img
      style="top: 60px; left: -1120px"
      data-out="60px,-1120px"
      data-in="60px,120px"
      class="ingredient-item chili"
      :src="require('@/assets/images/units/chili.png')"
      alt=""
    />
    <img
      style="top: 120px; left: 1190px"
      data-out="120px,1190px"
      data-in="120px,190px"
      class="ingredient-item chili"
      :src="require('@/assets/images/units/chili.png')"
      alt=""
    />
    <img
      style="top: 160px; left: -1100px"
      data-out="160px,-1100px"
      data-in="160px,100px"
      class="ingredient-item cheese"
      :src="require('@/assets/images/units/cheese.png')"
      alt=""
    />
    <img
      style="top: 190px; left: 1150px"
      data-out="190px,1150px"
      data-in="190px,150px"
      class="ingredient-item cheese"
      :src="require('@/assets/images/units/cheese.png')"
      alt=""
    />
    <img
      style="top: 220px; left: -1000px"
      data-out="220px,-1000px"
      data-in="220px,100px"
      class="ingredient-item garlic"
      :src="require('@/assets/images/units/garlic.png')"
      alt=""
    />
    <img
      style="top: 30px; left: 2100px"
      data-out="30px,2100px"
      data-in="30px,210px"
      class="ingredient-item garlic"
      :src="require('@/assets/images/units/garlic.png')"
      alt=""
    />
    <img
      style="top: 290px; left: -2000px"
      data-out="290px,-2000px"
      data-in="290px,200px"
      class="ingredient-item olive"
      :src="require('@/assets/images/units/olive.png')"
      alt=""
    />
    <img
      style="top: 80px; left: 2250px"
      data-out="80px,2250px"
      data-in="80px,250px"
      class="ingredient-item olive"
      :src="require('@/assets/images/units/olive.png')"
      alt=""
    />
    <img
      style="top: 310px; left: -1150px"
      data-out="310px,-1150px"
      data-in="310px,150px"
      class="ingredient-item onion"
      :src="require('@/assets/images/units/onion.png')"
      alt=""
    />
    <img
      style="top: 120px; left: 2900px"
      data-out="120px,2900px"
      data-in="120px,290px"
      class="ingredient-item onion"
      :src="require('@/assets/images/units/onion.png')"
      alt=""
    />
    <img
      style="top: 40px; left: -1160px"
      data-out="40px,-1160px"
      data-in="40px,160px"
      class="ingredient-item pea"
      :src="require('@/assets/images/units/pea.png')"
      alt=""
    />
    <img
      style="top: 250px; left: 2290px"
      data-out="250px,2290px"
      data-in="250px,290px"
      class="ingredient-item pea"
      :src="require('@/assets/images/units/pea.png')"
      alt=""
    />
    <img
      style="top: 100px; left: -1440px"
      data-out="100px,-1400px"
      data-in="100px,140px"
      class="ingredient-item pickle"
      :src="require('@/assets/images/units/pickle.png')"
      alt=""
    />
    <img
      style="top: 200px; left: 2900px"
      data-out="200px,2900"
      data-in="200px,290px"
      class="ingredient-item pickle"
      :src="require('@/assets/images/units/pickle.png')"
      alt=""
    />
    <img
      style="top: 120px; left: -1190px"
      data-out="120px,-1190px"
      data-in="120px,190px"
      class="ingredient-item cucumber"
      :src="require('@/assets/images/units/cucumber.png')"
      alt=""
    />
    <img
      style="top: 200px; left: 2020px"
      data-out="200px,2020px"
      data-in="200px,220px"
      class="ingredient-item cucumber"
      :src="require('@/assets/images/units/cucumber.png')"
      alt=""
    />
  </div>
</template>

<style scoped>
.pizza-container {
  position: relative;
  height: 25rem;
  width: 25rem;
  outline: 1px solid red;
  overflow: hidden;
  transition: transform 250ms linear;
}
.ingredients {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.pizza-container.on-pizza {
  transform: scale(1.1);
}
.pizza-container .dish,
.pizza-container .pizza {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.turn-pizza {
  animation: turn 250ms linear;
}
@keyframes turn {
  100% {
    transform: rotate(360deg);
  }
}

.ingredient-item {
  position: absolute;
  transition: left 250ms linear;
  width: 3rem;
}

.pizza-container img:nth-child(2) {
  padding: 1rem;
}
</style>