<template>
  <div id="app">
    <menu-wrap></menu-wrap>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuWrap from './components/nav/MenuWrap.vue';


export default {
  name: 'App',
  components: {
    MenuWrap
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li, ol {
  list-style: none;
}
#app {
  font-family: AppleSDGothicNeo, Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
  background-color: #181818;
}
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
