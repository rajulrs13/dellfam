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
                <!-- <v-col cols="1"></v-col> -->
                <v-col cols="10">
                  <v-autocomplete
                    :items="office_locations"
                    item-text="name"
                    return-object
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
                          Start: {{ start }}
                        </h2>
                        <v-time-picker
                          no-title
                          v-model="start"
                          :max="end"
                        ></v-time-picker>
                      </v-col>
                      <v-col style="width: 290px; flex: 0 1 auto">
                        <h2 class="font-weight-light primary--text">
                          End: {{ end }}
                        </h2>
                        <v-time-picker
                          no-title
                          v-model="end"
                          :min="start"
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
          <!-- <v-btn
            v-if="step !== 4"
            :disabled="step === 2 || step === 3 || loading"
            color="primary"
            depressed
            @click="step1()"
            >Next</v-btn
          > -->
          <v-btn
            v-if="step !== 4"
            :disabled="loading"
            color="primary"
            depressed
            @click="step1()"
            >Next</v-btn
          >
          <v-btn
            v-else
            color="primary"
            depressed
            @click="sendAward()"
            :disabled="loading"
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
      start: null,
      end: null,
      step: 1,
      selected_office: {},
      title: "",
      description: "",
      requestData: {},
    };
  },
  computed: {
    colleagues() {
      return this.$store.getters.colleagues;
    },
    userId() {
      return this.$store.getters.user_id;
    },
    username() {
      return this.$store.getters.username;
    },
    email() {
      return this.$store.getters.email;
    },
    manager() {
      return this.$store.getters.manager;
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
      this.selected_office = {};
      this.step = 1;
    },
    step1() {
      this.step++;
      this.requestData.nominator = this.userId;
      this.requestData.nominator_name = this.username;
      this.requestData.nominator_email = this.email;
      this.requestData.nominee = this.selected_office.user_id;
      this.requestData.nominee_name = this.selected_office.name;
      this.requestData.nominee_email = this.selected_office.email;
      this.requestData.manager = this.manager;
    },
    step2(award_level) {
      this.step++;
      this.requestData.level = award_level.name;
      this.requestData.icon = award_level.icon;
      this.requestData.color = award_level.color;
    },
    step3(award_type) {
      this.step++;
      this.requestData.type = award_type.name;
      this.requestData.points = award_type.points;
    },
    sendAward() {
      this.requestData.title = this.title;
      this.requestData.description = this.description;
      console.log(this.requestData);
      var self = this;
    //   this.$store
    //     .dispatch("recognizeSomeone", self.requestData)
    //     .then(() => {
    //       self.dialog = false;
    //     })
    //     .catch(() => {
    //       console.log("Please try again.");
    //     });
    self.dialog = false;

    },
  },
};
</script>