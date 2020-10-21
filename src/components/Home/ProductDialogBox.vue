<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="elevation-12">
        <v-card-text style="background-color: #2196f3">
          <v-row align="center" justify="center">
            <v-col cols="8">
              <span class="text-h5 font-weight-light" style="color: #ffffff">{{
                productData.product
              }}</span>
              <br />
              <span
                class="text-body-2 font-weight-light"
                style="color: #ffffff"
                >{{ productData.product_owner }}</span
              >&nbsp;
              <span class="text-body-2 font-weight-thin" style="color: #ffffff">
                • </span
              >&nbsp;
              <span
                class="text-body-2 font-weight-light"
                style="color: #ffffff"
                >{{ productData.manager }}</span
              >
            </v-col>
            <v-col class="text-center" cols="4">
              <v-avatar size="64" color="white">
                <v-icon size="48" color="#2196F3">mdi-map-marker</v-icon>
              </v-avatar>
              <div class="overline white--text">{{ productData.location }}</div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-center">
          <div class="my-4 overline" style="color: #2196f3">
            • Description •
          </div>
          <div>{{ productData.description }}</div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["visible", "productData"],
  data() {
    return {};
  },
  computed: {
    dialog: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
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