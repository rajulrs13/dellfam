<template>
  <div>
    <v-dialog v-model="dialog" max-width="800" persistent>
      <v-card class="mx-auto" max-width="800">
        <v-card-title class="title font-weight-regular justify-space-between">
          <span>Book Workspace</span>
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-row>
                <v-col class="text-center" cols="2">
                  <v-avatar color="primary" size="48">
                    <v-icon size="36" color="white">mdi-map-marker</v-icon>
                  </v-avatar>
                </v-col>

                <v-col cols="10">
                  <v-autocomplete
                    :items="office_locations"
                    color="white"
                    label="Select Office Location"
                    v-model="selected_office"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <span class="caption grey--text text--darken-1"
                    >Select the office location you want to book your workspace
                    in</span
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-row>
                <v-col class="text-center">
                  <v-date-picker
                    v-model="selected_date"
                    full-width
                    :landscape="$vuetify.breakpoint.smAndUp"
                    class="mt-4"
                    :show-current="false"
                    :min="todays_date"
                  ></v-date-picker>
                </v-col>
              </v-row>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <v-card-text>
              <v-row justify="space-around">
                <v-col class="text-center">
                  <div>
                    <v-row justify="space-around" align="center">
                      <v-col style="width: 290px; flex: 0 1 auto">
                        <h2 class="font-weight-light primary--text">
                          Start: {{ start_time }}
                        </h2>
                        <v-time-picker
                          no-title
                          v-model="start_time"
                          :max="end_time"
                        ></v-time-picker>
                      </v-col>
                      <v-col style="width: 290px; flex: 0 1 auto">
                        <h2 class="font-weight-light primary--text">
                          End: {{ end_time }}
                        </h2>
                        <v-time-picker
                          no-title
                          v-model="end_time"
                          :min="start_time"
                        ></v-time-picker>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="4">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    label="Enter reason/ comments/ description of your work in office"
                    v-model="description"
                    auto-grow
                    value
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <span class="caption grey--text text--darken-1"
                    >Fill in the description/details for your request</span
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="cancelAward()" :disabled="loading">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="step === 1 || loading" text @click="step--"
            >Back</v-btn
          >
          <v-btn
            v-if="step === 1"
            :disabled="selected_office == ''"
            color="primary"
            depressed
            @click="step1()"
            >Next</v-btn
          >
          <v-btn
            v-else-if="step === 2"
            :disabled="selected_date == ''"
            color="primary"
            depressed
            @click="step2()"
            >Next</v-btn
          >
          <v-btn
            v-else-if="step === 3"
            :disabled="start_time == '' || end_time == ''"
            color="primary"
            depressed
            @click="step3()"
            >Next</v-btn
          >
          <v-btn
            v-else
            color="primary"
            depressed
            @click="sendAward()"
            :disabled="description == ''"
            >Submit Request</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-fab-transition>
      <v-btn
        color="primary"
        large
        fab
        bottom
        right
        fixed
        @click="dialog = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      office_locations: [
        "Dell Technologies, Hyderabad",
        "Dell-6 Bangalore",
        "Dell Technologies, Cork Ireland",
        "Dell EMC Cork Ireland",
        "Dell-4 Bangalore",
        "Skyview Hyderabad",
        "Dell Technologies, Malaysia",
        "Dell Technologies, Round Rock Texas",
        "Dell Technologies, Toronto Canda",
        "Dell Technologies, Beijing China",
        "Dell Technologies, Singapore",
        "Dell Technologies, Lebanon",
        "Dell EMC North Carolina US",
        "Dell Technologies, UK",
        "Dell Technologies, Atlanta, US",
        "Dell EMC, Hopkinton, US",
        "Dell Technologies, Colombia",
      ],
      selected_date: "",
      dialog: false,
      start_time: "",
      end_time: "",
      step: 1,
      selected_office: "",
      description: "",
      requestData: {},
    };
  },
  computed: {
    todays_date() {
      let d = new Date();
      let month = "" + (d.getMonth() + 1);
      let day = "" + d.getDate();
      let year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
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
  methods: {
    cancelAward() {
      this.dialog = false;
      this.selected_office = "";
      this.selected_date = "";
      this.start_time = "";
      this.end_time = "";
      this.description = "";
      this.step = 1;
    },
    step1() {
      this.step++;
      this.requestData.selected_office = this.selected_office;
    },
    step2() {
      this.step++;
      this.requestData.selected_date = this.selected_date;
    },
    step3() {
      this.step++;
      this.requestData.start_time = this.start_time;
      this.requestData.end_time = this.end_time;
    },
    sendAward() {
      this.requestData.description = this.description;
      this.requestData.request_date = this.todays_date;
      this.requestData.status = 0;

      console.log(this.requestData);
      var self = this;
      this.$store.commit("submitRequest", this.requestData);
      this.cancelAward();
    },
  },
};
</script>