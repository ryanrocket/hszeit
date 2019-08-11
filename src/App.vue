<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
#nav {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
