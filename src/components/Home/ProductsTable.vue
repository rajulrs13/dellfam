<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <v-card>
          <v-card-title>
            List of Products
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="products"
            :loading="loading"
            :search="search"
          >
            <template v-slot:item.contact="{ item }">
              <v-icon left color="blue darken-3">mdi-microsoft-outlook</v-icon>
              <v-icon left color="purple">mdi-microsoft-teams</v-icon>
            </template>
            <template v-slot:item.info="{ item }">
              <v-icon small color="primary" @click="openDialogBox(item)">mdi-information-outline</v-icon>
              <!-- <v-icon small color="primary">mdi-information-outline</v-icon> -->
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <app-product-dialog-box
      :productData="openedItem"
      :visible="showDialog"
      @close="showDialog = false"
    ></app-product-dialog-box>
  </v-container>
</template>

<script>
import ProductDialogBox from "./ProductDialogBox";
export default {
    components: {
      "app-product-dialog-box": ProductDialogBox,
    },
  data() {
    return {
      openedItem: {
        product: "",
        description: "",
        product_owner: "",
        manager: "",
        location: "",
        email: "",
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
      search: "",
      products: [
        {
          product: "CICD",
          product_owner: "Anupam Piareji",
          manager: "Radhika Maramganti",
          location: "Hyderabad",
          email: "Anupam_Piareji@dell.com",
          description: "CICD automation based on different templates.",
        },
        {
          product: "Self Service Workspace Provisioning",
          product_owner: "Anne-Marie Duffy",
          manager: "Radhika Maramganti",
          location: "Ireland",
          email: "Anne_Marie@dell.com",
          description: "Automating workspace provisioning for greenplum and providing cheaper archival solutions.",
        },
        {
          product: "Denodo Integration",
          product_owner: "Atul Singh",
          manager: "Dinesh Kopadda",
          location: "Bangalore",
          email: "Atul_Singh@dell.com",
          description: "Denodo plugins and integration for faster database access.",
        },
         {
          product: "BlackDuck vulnerabilities removal ",
          product_owner: "Siva Dhandhekar",
          manager: "Ramesh Jampula",
          location: "Hyderabad",
          email: "Siva_Dhandhekar@dell.com",
          description: "Improving code quality before movement to production.",
        },
         {
          product: "SAP team",
          product_owner: "Jake Harris",
          manager: "James Stewart",
          location: "Round Rock",
          email: "Jake_Harris@dell.com",
          description: "Maintaining and managing SAP integrations across Dell.",
        },
         {
          product: "Project Zero",
          product_owner: "Ranjeetha Raja",
          manager: "Dinesh Kopadda",
          location: "Bangalore",
          email: "Ranjeetha_Raja@dell.com",
          description: "Managing and keeping checks on data extractions in Dell.",
        },
         {
          product: "Jarvis",
          product_owner: "Alfonzo Loha",
          manager: "Patrick O'Lio",
          location: "Malaysia",
          email: "Alfonzo_Loha@dell.com",
          description: "Chatbot for sales insights.",
        },
         {
          product: "Incident Miner",
          product_owner: "Marie Frankling",
          manager: "Thomas Sujai",
          location: "Bangalore",
          email: "Marie_Frankling@dell.com",
          description: "Automating incident approval and increasing the efficiency of the process.",
        },
         {
          product: "Near Real Time (NRT)",
          product_owner: "Chandra Sujana",
          manager: "Eric Wolf",
          location: "Mexico",
          email: "Chandra_Sujana@dell.com",
          description: "Increasing data access speed and updating of workspaces.",
        },
         {
          product: "Sales Insights",
          product_owner: "Vijay Kokatapatti",
          manager: "Soma Murthy",
          location: "Bangalore",
          email: "Atul_singh@dell.com",
          description: "Platform to get crucial sales insights of Dell APJC ",
        }
      ],
    };
  },
  methods: {
    openDialogBox(product_details) {
      this.openedItem = product_details;
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