<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <app-loader v-if="loader_show"></app-loader>
        <div v-if="!loader_show">
          <v-icon size="100" color="success">mdi-play</v-icon>
          <h1 class="font-weight-light success--text">{{ game_name }}</h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  data() {
    return {
      loader_show: true,
    };
  },
  components: {
    "app-loader": Loader,
  },
  mounted() {
    setTimeout(() => {
      this.loader_show = false;
      window.open("https://ludoking.com/", '_blank');
    }, 1600);
  },
  computed: {
    game_name() {
      let my_games = this.$store.getters.games;
      let name = "Launching...";
      for (let i = 0; i < my_games.length; i++) {
        if (my_games[i].id == this.$router.currentRoute.params.id) {
          name = "Now Playing " + my_games[i].title + "... Enjoy!";
          break;
        }
      }
      return name;
    },
  },
};
</script>

<style>
</style>