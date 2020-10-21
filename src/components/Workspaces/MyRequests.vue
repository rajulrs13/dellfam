<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-left">
        <h3 class="font-weight-light">My Requests</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-card>
          <v-data-table
            :headers="headers"
            :items="workspace_requests"
            :loading="loading"
            sort-by="request_date"
            sort-desc
          >
            <template v-slot:item.status="{ item }">
              <v-icon v-if="item.status == 1" small color="success"
                >mdi-check</v-icon
              >
              <v-icon v-else-if="item.status == 2" small color="error"
                >mdi-close</v-icon
              >
              <v-icon v-else small color="warning">mdi-clock-outline</v-icon>
            </template>
            <template v-slot:item.info="{ item }">
              <!-- <v-icon small color="primary" @click="openDialogBox(item)">mdi-information-outline</v-icon> -->
              <v-icon small color="primary">mdi-information-outline</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- <app-recognition-dialog
      :recognitionData="openedItem"
      :visible="showDialog"
      @close="showDialog=false"
    ></app-recognition-dialog> -->
  </v-container>
</template>

<script>
// import RecognitionDialogBox from "../shared/RecognitionDialogBox";
export default {
  //   components: {
  //     "app-recognition-dialog": RecognitionDialogBox,
  //   },
  data() {
    return {
      openedItem: {
        title: "",
        description: "",
        date: "",
        nominee: "",
        nominee_name: "",
        nominator: "",
        nominator_name: "",
        type: "",
        points: 0,
        level: "",
        icon: "",
        color: "",
        status: 0,
      },
      showDialog: false,
      headers: [
        { text: "Info", value: "info", sortable: false, align: "center" },
        { text: "Request Date", value: "request_date" },
        { text: "Office", value: "selected_office" },
        { text: "Date", value: "selected_date" },
        { text: "Start Time", value: "start_time" },
        { text: "End Time", value: "end_time", sortable: false },
        { text: "Status", value: "status", sortable: false, align: "center" },
      ],
      workspace_requests: [
        {
          description: "sadas",
          end_time: "17:25",
          request_date: "2020-10-21",
          selected_date: "2020-10-30",
          selected_office: "Dell-6 Bangalore",
          start_time: "02:21",
          status: 0,
        },
        {
          description: "sadas",
          end_time: "17:25",
          request_date: "2020-10-20",
          selected_date: "2020-10-30",
          selected_office: "Dell-6 Bangalore",
          start_time: "02:21",
          status: 1,
        },
        {
          description: "sadas",
          end_time: "17:25",
          request_date: "2020-10-19",
          selected_date: "2020-10-30",
          selected_office: "Dell-6 Bangalore",
          start_time: "02:21",
          status: 2,
        },
      ],
    };
  },
  methods: {
    openDialogBox(recognition_detail) {
      this.openedItem = recognition_detail;
      this.showDialog = true;
    },
  },
  computed: {
    recognitions() {
      return this.$store.getters.recognitions;
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