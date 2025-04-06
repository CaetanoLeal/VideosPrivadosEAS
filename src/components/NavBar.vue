<template>
  <v-app-bar
    flat
    color="white"
    class="px-4"
    height="40"
  >
    <v-spacer />
    <div class="d-flex align-center">
      <span class="text-grey mr-2">Powered by</span>
      <v-img
        src="http://easinfo.com.br/wp-content/themes/easinfo/img/logo.jpg"
        alt="logo"
        max-height="65"
        contain
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PoweredByNavbar'
}
</script>

  <style scoped>
  .text-grey {
    color: #555;
    font-size: 14px;
  }
  </style>
