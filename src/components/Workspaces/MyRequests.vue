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
            :items="my_workspace_requests"
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
              <v-icon small color="primary" @click="openDialogBox(item)"
                >mdi-information-outline</v-icon
              >
              <!-- <v-icon small color="primary">mdi-information-outline</v-icon> -->
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <app-request-dialog
      :requestData="openedItem"
      :visible="showDialog"
      @close="showDialog = false"
    ></app-request-dialog>
  </v-container>
</template>

<script>
import RequestDialogBox from "@/components/Workspaces/RequestDialogBox";
export default {
  components: {
    "app-request-dialog": RequestDialogBox,
  },
  data() {
    return {
      openedItem: {
        request_date: "",
        description: "",
        selected_office: "",
        selected_date: "",
        start_time: "",
        end_time: "",
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
    };
  },
  methods: {
    openDialogBox(request_detail) {
      this.openedItem = request_detail;
      this.showDialog = true;
    },
  },
  computed: {
    my_workspace_requests() {
      return this.$store.getters.my_workspace_requests;
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