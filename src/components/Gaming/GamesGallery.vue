<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(game, index) in games" :key="index" cols="12" sm="4">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16 / 9" :src="game.img">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out success darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  Play
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="success"
                class="white--text"
                fab
                small
                right
                top
                :to="'game/' + game.id"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <h3 class="display-1 font-weight-light success--text mb-2">
                {{ game.title }}
              </h3>
              <div class="font-weight-light title mb-2">
                {{ game.description }}
              </div>
              <div class="font-weight-light caption mb-2">
                Waiting Time: {{ game.waiting_time }} mins
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
  computed: {
    games() {
      return this.$store.getters.games;
    },
    loading() {
      return this.$store.getters.loading;
    },
    success() {
      return this.$store.getters.success;
    },
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>