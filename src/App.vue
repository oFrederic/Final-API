<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Final Fantasy Browser</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list dense rounded>
        <v-list-item
          v-for="platform in platforms"
          :key="platform"
          @click="onPlatformClick(platform)"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ platform }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <v-col v-for="game in games" :key="game" cols="4">
            <v-img :src="game.img" max-width="100%" height="auto"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.getGames();
  },

  data: () => ({ drawer: null }),

  computed: {
    games() {
      return this.$store.state.displayedGames;
    },
    platforms() {
      return this.$store.state.platforms;
    },
  },

  methods: {
    getGames() {
      this.$store.dispatch('loadGames');
    },
    onPlatformClick(platform) {
      if (platform === 'All') {
        this.$store.dispatch('clearFilter');
      } else {
        this.$store.dispatch('setFilter', platform);
      }
    },
  },
};
</script>
