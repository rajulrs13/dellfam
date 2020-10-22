<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-card color="basil" flat>
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-regular display-2">{{ groupData.title }}</h1>
          </v-card-title>
          <v-card-text class="text-center">
            <span class="font-weight-light text-subtitle-1">{{
              groupData.description
            }}</span>
          </v-card-text>

          <v-tabs v-model="tab" background-color="transparent" grow>
            <v-tab href="#tab-10">Posts</v-tab>
            <v-tab href="#tab-20">Events</v-tab>
            <v-tab href="#tab-30">Documents</v-tab>
            <v-tab href="#tab-40">Members</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-10">
              <app-post-tab> </app-post-tab>
            </v-tab-item>

            <v-tab-item value="tab-20">
              <v-row>
                <v-col cols="8" offset="2">
                  <app-event-tab></app-event-tab>
                </v-col>
              </v-row>
            </v-tab-item>

            <v-tab-item value="tab-30">
              <v-row>
                <v-col cols="8" offset="2">
                  <app-document-tab></app-document-tab> </v-col
              ></v-row>
            </v-tab-item>

            <v-tab-item value="tab-40">
              <app-member-tab></app-member-tab>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventsTab from "@/components/GroupPage/EventsTab";
import PostsTab from "@/components/GroupPage/PostsTab";
import DocumentsTab from "@/components/GroupPage/DocumentsTab";
import MembersTab from "@/components/GroupPage/MembersTab";
export default {
  components: {
    "app-event-tab": EventsTab,
    "app-post-tab": PostsTab,
    "app-document-tab": DocumentsTab,
    "app-member-tab": MembersTab,
  },
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    groupData() {
      let all_groups = this.$store.getters.my_groups;
      let groupData = {};
      for (let i = 0; i < all_groups.length; i++) {
        if (all_groups[i].id == this.$router.currentRoute.params.id) {
          groupData = all_groups[i];
          break;
        }
      }
      return groupData;
    },
  },
};
</script>

<style>
/* Helper classes */
</style>