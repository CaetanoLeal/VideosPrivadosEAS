<template>
  <v-container fluid>
    <div class="videos-page pa-6">
      <div class="text-center mb-4">
        <v-img
          src="@/assets/logo.svg"
          alt="Logo Vuetify"
          contain
          height="80"
          width="80"
          class="mx-auto"
        />
        <h2 class="mt-2 font-weight-bold">
          Nome do cliente
        </h2>
      </div>

      <div
        v-for="(video, index) in videos"
        :key="index"
        class="video-section mb-10"
      >
        <h3 class="mb-2">
          {{ video.title }}
        </h3>

        <!-- Botão SVG Play -->
        <div class="video d-flex align-center py-4">
          <a
            class="playBut"
            @click.stop="openDialog(video.videoId)"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60px"
              height="60px"
              viewBox="0 0 213.7 213.7"
            >
              <polygon
                class="triangle"
                fill="none"
                stroke="#1976D2"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              />
              <circle
                class="circle"
                fill="none"
                stroke="#1976D2"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
              />
            </svg>
          </a>
          <p class="subheading ml-2 mb-0">
            Assista o vídeo
          </p>
        </div>

        <p class="mt-3">
          {{ video.description }}
        </p>
      </div>
    </div>

    <!-- Dialog com iframe YouTube -->
    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-card>
        <iframe
          v-if="selectedVideoId"
          width="100%"
          height="450"
          :src="'https://www.youtube.com/embed/' + selectedVideoId + '?autoplay=1'"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-card>
    </v-dialog>

    <v-footer
      app
      padless
      class="footer justify-center"
    >
      <v-col>
        <span>
          &copy; {{ new Date().getFullYear() }} EAS Entira Automatic Solutions em parceria com Caetano Leal
        </span>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'VideosPage',
  data () {
    return {
      dialog: false,
      selectedVideoId: '',
      videos: [
        {
          title: 'Frente do predio',
          videoId: 'pXazpTJQiEc',
          description: 'Esta é a frente do condominio'
        },
        {
          title: 'Como cadastrar produtos',
          videoId: 'dQw4w9WgXcQ',
          description: 'Aprenda a cadastrar, editar e remover produtos com facilidade.'
        }
      ]
    }
  },
  watch: {
    dialog (value) {
      if (!value) {
        this.selectedVideoId = '' // limpa o vídeo ao fechar
      }
    }
  },
  methods: {
    openDialog (videoId) {
      this.selectedVideoId = videoId
      this.dialog = true
    }
  }
}
</script>

<style>
.video-section {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

.playBut {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.playBut:hover {
  transform: scale(1.05);
}

.triangle,
.circle {
  stroke: #1976D2;
}

.footer {
  background-color: #fbdea8;
  height: 35px;
  text-align: right;
  font-size: 10px;
}
</style>
