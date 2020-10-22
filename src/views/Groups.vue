<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">Groups</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <app-group-search-box></app-group-search-box>
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
import GroupSearchBox from "@/components/Groups/GroupSearchBox.vue";
import MyGroups from "@/components/Groups/MyGroups.vue";
export default {
  components: {
    "app-group-search-box": GroupSearchBox,
    "app-my-groups": MyGroups,
  },
};
</script>

<style>
</style>