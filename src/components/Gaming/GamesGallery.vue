<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(game,index) in games" :key="index" cols="12" sm="4">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              :src="game.img"
            >
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
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <h3 class="display-1 font-weight-light success--text mb-2">
                {{game.title}}
              </h3>
              <div class="font-weight-light title mb-2">{{game.description}}</div>
              <div class="font-weight-light caption mb-2">
                Waiting Time: {{game.waiting_time}} mins
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
      games: [
        {
          img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          description: "Description 1",
          title: "Title 1",
          waiting_time: "2",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          description: "Description 2",
          title: "Title 2",
          waiting_time: "3",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          description: "Description 3",
          title: "Title 3",
          waiting_time: "3",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          description: "Description 4",
          title: "Title 4",
          waiting_time: "5",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          description: "Description 5",
          title: "Title 5",
          waiting_time: "4",
        },
      ],
    };
  },
  computed: {
    campaigns() {
      return this.$store.getters.campaigns;
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