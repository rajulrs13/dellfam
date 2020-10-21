<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="primary"
          centered
          icons-and-text
          show-arrows
          dense
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            My Team
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Service Centres
            <v-icon>mdi-hammer-wrench</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Offices & Warehouses
            <v-icon>mdi-office-building-marker-outline</v-icon>
          </v-tab>
          <v-tab href="#tab-4">
            Products
            <v-icon>mdi-animation</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="nn">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-container fluid>
                <iframe
                  src="https://www.atlistmaps.com/map/3be36dfc-0ea3-48c4-a520-5e09e8aed3bf?share=true"
                  allow="geolocation"
                  width="100%"
                  height="420px"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </v-container>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-container fluid>
                <iframe
                  src="https://www.atlistmaps.com/map/6cb0c732-b48f-4f2e-afa2-e51233317ad4?share=true"
                  allow="geolocation"
                  width="100%"
                  height="420px"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </v-container>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-card flat>
              <v-container fluid>
                <iframe
                  src="https://www.atlistmaps.com/map/d7de213b-f8b9-430e-a653-e95328840497?share=true"
                  allow="geolocation"
                  width="100%"
                  height="420px"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </v-container>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-4">
            <v-card flat>
              <app-product-table></app-product-table>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsTable from "@/components/Home/ProductsTable";
export default {
  components: {
    "app-product-table": ProductsTable,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style>
</style>