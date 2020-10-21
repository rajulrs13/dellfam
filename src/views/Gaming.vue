<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">Game Zone</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <app-my-groups></app-my-groups>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyGroups from "@/components/Gaming/GamesGallery.vue";
export default {
  components: {
    "app-my-groups": MyGroups,
  },
};
</script>

<style>
</style>