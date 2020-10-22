<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-left">
        <h3 class="font-weight-light">My Groups</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <app-groups-gallery></app-groups-gallery>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GroupsGallery from "./GroupsGallery";
export default {
  components: {
    "app-groups-gallery": GroupsGallery,
  },
};
</script>

<style>
</style>