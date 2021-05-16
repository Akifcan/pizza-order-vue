<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  min-height: 100vh;
  background: #333;
}
.container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: white;
}
</style>