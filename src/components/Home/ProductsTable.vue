<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <v-card>
          <v-data-table :headers="headers" :items="products" :loading="loading">
            <template v-slot:item.contact="{ item }">
              <v-icon left color="blue darken-3">mdi-microsoft-outlook</v-icon>
              <v-icon left color="purple">mdi-microsoft-teams</v-icon>
              <v-icon left color="blue">mdi-skype-business</v-icon>
            </template>
            <template v-slot:item.info="{ item }">
              <!-- <v-icon small color="primary" @click="openDialogBox(item)">mdi-information-outline</v-icon> -->
              <v-icon small color="primary">mdi-information-outline</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <app-recognition-dialog
      :recognitionData="openedItem"
      :visible="showDialog"
      @close="showDialog = false"
    ></app-recognition-dialog>
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
        { text: "Product", value: "product" },
        { text: "Product Owner", value: "product_owner" },
        { text: "Manager", value: "manager" },
        { text: "Location", value: "location" },
        { text: "Contact", value: "contact", align: "center" },
      ],
      products: [
        {
          product: "CICD",
          product_owner: "Anupam Piareji",
          manager: "Radhika Maramganti",
          location: "Hyderabad",
          email: "",
        },
        {
          product: "Self Service",
          product_owner: "Anne Marie",
          manager: "Radhika Maramganti",
          location: "Ireland",
          email: "",
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