<template>
  <div class="mb-11 navigation">
    <v-app-bar dense dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title @click="followToHome"
        ><img src="../../img/logo-nike.png" alt="logo" class="logo"
      /></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-list-item-group
          active-class="text--accent-4"
          class="d-flex flex-row"
        >
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            @click="followLink(link.url)"
          >
            <v-list-item-title>{{ $t(link.title) }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn @click="followToCart" icon>
              <v-icon color="white">mdi-cart</v-icon>
              {{ itemInCart }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      width="300"
      absolute
      top
      temporary
      dark
    >
      <v-bottom-navigation v-model="value">
        <v-btn value="Ru" @click="localeRu">
          Ru
        </v-btn>

        <v-btn value="En" @click="localeEn">
          En
        </v-btn>
      </v-bottom-navigation>
      <range-price></range-price>
    </v-navigation-drawer>
  </div>
</template>

<script>
import RangePrice from "./range-price.vue";
export default {
  name: "AppBar",
  components: {
    'range-price': RangePrice
  },
  props: {
    links: Array,
  },
  data() {
    return {
      drawer: false,
      value: "En",
    };
  },
  methods: {
    followLink(link) {
      this.$router.push(link).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    followToCart() {
      this.$router.push("/cart").catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    followToHome() {
      this.$router.push("/").catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    localeRu() {
      this.$i18n.locale = "ru";
      this.drawer = false;
    },
    localeEn() {
      this.$i18n.locale = "en";
      this.drawer = false;
    },
  },
  computed: {
    itemInCart() {
      return this.$store.getters.ITEMSINCART;
    },
  },
};
</script>

<style lang="sass" scoped>
.logo
  cursor: pointer
.navigation
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
</style>
