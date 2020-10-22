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
    };
  },
  methods: {
    openDialogBox(product_details) {
      this.openedItem = product_details;
      this.showDialog = true;
    },
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