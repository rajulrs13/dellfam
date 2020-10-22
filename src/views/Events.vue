<template>
  <v-container fluid>
    <alert-component
      v-if="error"
      :text="error.message"
      :color="'error'"
    ></alert-component>
    <alert-component
      v-if="success"
      :text="success.message"
      :color="'success'"
    ></alert-component>
    <v-row>
      <v-col class="text-center">
        <h1 class="font-weight-light">Events</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="primary"
          centered
          icons-and-text
          show-arrows
          dense
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Upcoming Events
            <v-icon>mdi-clock-outline</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Calendar View
            <v-icon>mdi-calendar-text</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="nn">
          <v-tab-item value="tab-1">
            <v-container fluid>
              <v-row>
                <v-col> <app-public-events></app-public-events></v-col>
              </v-row>
              <v-row>
                <v-col> <app-my-events></app-my-events></v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-container fluid>
              <v-row>
                <v-col>
                  <app-event-calendar></app-event-calendar>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyEventsGallery from "@/components/Events/MyEventsGallery";
import PublicEventsGallery from "@/components/Events/PublicEventsGallery";
import EventCalendar from "@/components/Events/EventCalendar";
export default {
  components: {
    "app-my-events": MyEventsGallery,
    "app-public-events": PublicEventsGallery,
    "app-event-calendar": EventCalendar,
  },
  data() {
    return {
      tab: null,
    };
  },
  computed: {
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
  watch: {
    error(err) {
      if (!!err) {
        setTimeout(() => this.$store.commit("clearError"), 3000);
      }
    },
    success(con) {
      if (!!con) {
        setTimeout(() => this.$store.commit("clearSuccess"), 4000);
      }
    },
  },
};
</script>
