<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="index in 5" :key="index" cols="12" sm="4">
        <!-- <v-card class="mx-auto" max-width="374" @click="openDialogBox(ad)"> -->
        <v-card class="mx-auto" max-width="374">
          <v-img
            height="200"
            :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
          ></v-img>

          <v-card-text>
            <div><span class="text-button">Title</span></div>
            <div class="text-truncate">Description</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <div class="subtitle-2">
              <span class="font-weight-regular button"
                >118 Members • 5 Events</span
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
          <v-col>
            <app-campaign-dialog-box
              :campaignData="openedItem"
              :visible="showDialog"
              @close="showDialog=false"
            ></app-campaign-dialog-box>
          </v-col>
        </v-row> -->
  </v-container>    
</template>

<script>
// import CampaignDialogBox from "./CampaignDialogBox";
export default {
  //   components: {
  //     "app-campaign-dialog-box": CampaignDialogBox,
  //   },
  data() {
    return {
      openedItem: {
        img: "",
        title: "",
        description: "",
        author: "",
        target_points: 0,
        achieved_points: 0,
        date: "",
      },
      showDialog: false,
    };
  },
  methods: {
    openDialogBox(ad_detail) {
      this.openedItem = ad_detail;
      this.showDialog = true;
    },
  },
  computed: {
    campaigns() {
      return this.$store.getters.campaigns;
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