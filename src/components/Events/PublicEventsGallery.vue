<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h3 class="font-weight-light">DELL Wide Events</h3>
        <h6 class="font-weight-light">Showing events from all public groups</h6>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" center-active show-arrows>
            <v-slide-item
              v-for="(i) in 10"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-card class="ma-4" height="300" width="200" @click="toggle">
                <v-img height="200" width="200" :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"></v-img>
                <v-card-text>
                  <div class="text-button">Title</div>
                  <div class="text-truncate">20/07/20 • 20:30 IST</div>
                  <div>
                    <v-icon size="15" color="green" left>mdi-account-multiple</v-icon>
                    <span class="font-weight-regular success--text">100 </span>
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
    products() {
      return this.$store.getters.products;
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