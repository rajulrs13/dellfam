<template>
  <v-container>
    <v-row>
      <v-col v-for="(post, i) in posts" :key="i">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-1">{{ post.date }}</div>
              <v-list-item-title class="headline mb-1">{{
                post.headline
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                post.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80"
              ><img :src="post.img"
            /></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn icon>
              <v-icon color="error">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="warning">mdi-bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="success">mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          date: "20/10/2020",
          headline: "Headline 1",
          description: "Greyhound divisely hello coldly fonwderfully",
          img: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>