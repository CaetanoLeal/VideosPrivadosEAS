<template>
  <v-app>
    <!--<nav-bar />-->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import NavBar from './components/NavBar.vue' // ajuste o caminho se estiver diferente

export default {
  name: 'App',
  components: {
    // NavBar
  }
}
</script>
