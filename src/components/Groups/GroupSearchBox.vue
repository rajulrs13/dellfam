<template>
  <v-toolbar flat>
    <v-toolbar-title
      ><span class="font-weight-light">Browse Groups</span></v-toolbar-title
    >
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Type Here..."
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        "ATX Adventure Photography Group",
        "Apache Flink India ",
        "Austin NLP",
        "Austin Wildlife lovers",
        "Bangalore Data science",
        "Business Owners and masterminds",
        "Couchbase Malaysia",
        "Delhi Hydroponics Club",
        "English Espanol Conversation Club",
        "People making portraits",
        "Planet Earth",
        "Product Marketers of Austin",
        "Pune Dance and fine art",
        "PyData Hyderabad",
        "PyLadies",
        "Rainbow Hearts",
        "Responsible Humans",
        "Solar Revolution",
        "TF Blockchain",
        "Toastmasters Dell Ireland chapter",
        "Tri-state ski club",
      ],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>