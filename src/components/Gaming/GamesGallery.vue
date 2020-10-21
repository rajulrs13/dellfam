<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="index in 5" :key="index" cols="12" sm="4">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
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
                Title
              </h3>
              <div class="font-weight-light title mb-2">
                Description
              </div>
              <div class="font-weight-light caption mb-2">
                Waiting Time: 2 mins
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
      openedItem: {
        img: "",
        title: "",
        description: "",
        author: "",
        target_points: 0,
        achieved_points: 0,
        date: "",
      },
      showDialog: false,
    };
  },
  methods: {
    openDialogBox(ad_detail) {
      this.openedItem = ad_detail;
      this.showDialog = true;
    },
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