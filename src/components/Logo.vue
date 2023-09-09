<template>
  <RouterLink
    to="/"
    class="logo"
    ><span>OMBdAPI</span>.COM</RouterLink
  >
</template>
<style lang="scss" scoped>
@import './src/scss/main.scss';
.logo {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>
