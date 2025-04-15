<template>
  <div>
    <div class="text-center w-100">
      <h1 class="text-h5 mb-2">
        Bem-vindo!
      </h1>
      <v-img
        class="mb-10 mx-auto d-block"
        src="@/assets/Logo.png"
        alt="Rio mar Logo"
        contain
        height="160"
        width="160"
      />

      <v-form @submit.prevent="next">
        <v-text-field
          v-model="password"
          class="mb-10 eye-color"
          :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          :label="$vuetify.lang.t('senha')"
          name="password"
          :type="show ? 'input' : 'password'"
          hide-details="auto"
          outlined
          @click:append="show = !show"
        />
      </v-form>

      <div class="d-flex justify-space-between">
        <v-btn
          class="text-none letter-spacing-0 font-weight-bold"
          style="margin-left: -16px;"
          color="primary"
          text
          @click="wip"
        >
          Não sei a senha
        </v-btn>
        <v-btn
          class="text-none"
          style="min-width: 88px;"
          color="primary"
          depressed
          @click="next"
        >
          {{ $vuetify.lang.t('Entrar') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { wip } from '@/helpers.js'

export default {
  data: () => ({
    show: false
  }),

  computed: {
    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        this.$store.commit('updatePassword', value)
      }
    }
  },

  methods: {
    wip,
    next () {
      if (this.password === 'minhaSenhaSuperSecreta') {
        this.$router.push({ name: 'videos' })
      } else {
        alert('Senha incorreta!')
      }
    }
  }
}
</script>

<style scoped>
.eye-color ::v-deep .v-icon {
  color: #506648;
}
h1{
  color: #506648;
  font-weight: bold;
}
</style>
