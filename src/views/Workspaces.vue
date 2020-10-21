<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">Book Workspace</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <app-my-workspace-requests></app-my-workspace-requests>
      </v-col>
    </v-row>
    <app-workspace-request></app-workspace-request>
  </v-container>
</template>

<script>
import WorkspaceRequest from "@/components/Workspaces/WorkspaceRequest";
import MyRequests from "@/components/Workspaces/MyRequests";

export default {
  components: {
    "app-my-workspace-requests": MyRequests,
    "app-workspace-request": WorkspaceRequest,
  },
};
</script>

<style>
</style>