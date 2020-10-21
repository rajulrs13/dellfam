<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-row>
        <v-col cols="12" class="text-center">
          <div>
            <img height="88" width="88" :src="logo" />
          </div>
          <span
            class="d-inline-block text-truncate font-weight-regular body-2"
            style="max-width: 196px"
            >{{ username }}</span
          >
          <br />
          <span
            class="d-inline-block text-truncate font-weight-light caption"
            style="max-width: 196px"
            >{{ email }}</span
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div v-if="user_id != ''">
        <v-list dense flat>
          <v-list-item-group color="primary">
            <v-list-item link to="/" :disabled="loading">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link :disabled="loading" to="/groups">
              <v-list-item-icon>
                <v-icon>mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Groups</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link :disabled="loading" to="/events">
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Events</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link :disabled="loading" to="/gaming">
              <v-list-item-icon>
                <v-icon>mdi-gamepad-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Game Zone</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link :disabled="loading" to="/book">
              <v-list-item-icon>
                <v-icon>mdi-briefcase-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Book Workspace</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              :disabled="loading"
              to="/approvals"
              v-if="role == 'manager'"
            >
              <v-list-item-icon>
                <v-icon>mdi-playlist-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Approvals</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :disabled="loading" to="/forums">
              <v-list-item-icon>
                <v-icon>mdi-forum-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Discussion Forums</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-list-item link :disabled="loading" to="/donate">
              <v-list-item-icon>
                <v-icon>mdi-wallet-giftcard</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Events</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
            <!-- <v-list-item link :disabled="loading" to="/redeem">
              <v-list-item-icon>
                <v-icon>mdi-basket</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Redeem</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>
        <v-list dense>
          <v-list-item @click="logout()" :disabled="loading">
            <v-list-item-icon>
              <v-icon color="error">mdi-power</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-else>
        <v-row>
          <v-col cols="12" class="text-center">
            <div class="subheading font-weight-light text-xs-center">
              A portal for
              <br />
              <span class="primary--text">Recognizing and Rewarding</span>
            </div>
            <div class="subheading font-weight-light text-xs-center">
              performances & hard work
            </div>
            <br />
            <div class="subheading font-weight-light text-xs-center">
              Please
              <span class="primary--text">Login</span> to Continue
            </div>
            <div class="subheading font-weight-light text-xs-center"></div>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link :disabled="loading" to="/">
        <span class="font-weight-regular title white--text">Dell Reimagined</span>
      </router-link>
      <!-- <v-spacer></v-spacer>
      <router-link :disabled="loading" to="/redeem" v-if="user_id != ''">
        <v-icon size="16">mdi-star-circle</v-icon>
        <span class="font-weight-regular button white--text"
          >&nbsp;{{ points }}&nbsp;&nbsp;</span
        >
        <span class="font-weight-regular button white--text">Points</span>
      </router-link> -->
    </v-app-bar>
    <v-main>
      <!-- <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import logo from "./assets/logo.png";
export default {
  name: "App",
  data: () => ({
    logo: logo,
    drawer: true,
    username: "Anushree Avasthi",
    email: "Anushree_Avasthi@Dell.com",
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    user_id() {
      return this.$store.getters.user_id;
    },
    // username() {
    //   return this.$store.getters.username;
    // },
    // email() {
    //   return this.$store.getters.email;
    // },
    points() {
      return this.$store.getters.points;
    },
    role() {
      return this.$store.getters.role;
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
  watch: {
    error(err) {
      if (!!err) {
        setTimeout(() => this.$store.commit("clearError"), 3000);
      }
    },
    success(con) {
      if (!!con) {
        setTimeout(() => this.$store.commit("clearSuccess"), 4000);
      }
    },
  },
};
</script>
