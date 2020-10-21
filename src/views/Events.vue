<template>
  <v-container fluid>
    <alert-component v-if="error" :text="error.message" :color="'error'"></alert-component>
    <alert-component v-if="success" :text="success.message" :color="'success'"></alert-component>
    <v-row>
      <v-col class="text-center">
        <h1 class="font-weight-light">Events</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- <app-public-events></app-public-events> -->
        <app-event-calendar></app-event-calendar>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <app-my-events></app-my-events>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyEventsGallery from "@/components/Events/MyEventsGallery";
import PublicEventsGallery from "@/components/Events/PublicEventsGallery";
import EventCalendar from "@/components/EventCalendar";
// import GiftCards from "../components/redeem/GiftCards";
export default {
  components: {
    // "app-gift-cards": GiftCards,
    "app-my-events": MyEventsGallery,
    "app-public-events": PublicEventsGallery,
    "app-event-calendar": EventCalendar,
  },
  computed:{
    loading() {
      return this.$store.getters.loading;
    },
    success() {
      return this.$store.getters.success;
    },
    error() {
      return this.$store.getters.error;
    }
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
    }
  }
};
</script>
