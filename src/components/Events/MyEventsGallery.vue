<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h3 class="font-weight-light">My Events</h3>
        <h6 class="font-weight-light">
          Showing events from my enrolled groups
        </h6>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" center-active show-arrows>
            <v-slide-item
              v-for="(event, i) in private_events"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-card class="ma-4" height="300" width="200" @click="toggle">
                <v-img height="200" width="200" :src="event.img"></v-img>
                <v-card-text>
                  <div class="text-button">{{ event.title }}</div>
                  <div class="text-truncate">
                    {{ event.date }} • {{ event.time }} IST
                  </div>
                  <div>
                    <v-icon size="15" color="green" left
                      >mdi-account-multiple</v-icon
                    >
                    <span class="font-weight-regular success--text"
                      >{{ event.members_attending }}
                    </span>
                    <span class="font-weight-regular success--text">RSVPs</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: null,
    };
  },
  computed: {
    private_events() {
      return this.$store.getters.private_events;
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