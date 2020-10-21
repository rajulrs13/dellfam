<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="elevation-12">
        <v-card-text
          :style="
            'background-color:' +
            (requestData.status == 0
              ? '#FFC107'
              : requestData.status == 1
              ? '#4CAF50'
              : '#EF5350')
          "
        >
          <v-row align="center" justify="center">
            <v-col cols="8">
              <span class="text-h5 font-weight-light" style="color: #ffffff">{{
                requestData.selected_office
              }}</span>
              <br />
              <span
                class="text-body-2 font-weight-light"
                style="color: #ffffff"
                >{{ requestData.start_time }}</span
              >&nbsp;
              <span class="text-body-2 font-weight-thin" style="color: #ffffff">
                - </span
              >&nbsp;
              <span
                class="text-body-2 font-weight-light"
                style="color: #ffffff"
                >{{ requestData.end_time }}</span
              >
            </v-col>
            <v-col class="text-center" cols="4">
              <v-avatar size="64" color="white">
                <v-icon size="48" color="success" v-if="requestData.status == 1"
                  >mdi-check</v-icon
                >
                <v-icon size="48" color="error" v-else-if="requestData.status == 2"
                  >mdi-close</v-icon
                >
                <v-icon size="48" color="warning" v-else
                  >mdi-clock-outline</v-icon
                >
              </v-avatar>
              <div class="overline white--text">
                {{ requestData.selected_date }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="text-center">
          <div
            class="my-4 overline"
            :style="
              'color:' +
              (requestData.status == 0
                ? '#FFC107'
                : requestData.status == 1
                ? '#4CAF50'
                : '#EF5350')
            "
          >
            • Description •
          </div>
          <div>{{ requestData.description }}</div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["visible", "requestData"],
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