<template>
  <header>
    <app-bar :links="links"></app-bar>
  </header>
</template>

<script>
import AppBar from "../ui/app-bar";

export default {
  name: "Header",
  components: {
    AppBar,
  },
  data: () => ({
    drawer: false,
    links: [
      {
        title: "Men",
        icon: "",
        url: "/men",
      },
      {
        title: "Women",
        icon: "",
        url: "/women",
      },
      {
        title: "Boys",
        icon: "",
        url: "/boys",
      },
      {
        title: "Girls",
        icon: "",
        url: "/girls",
      },
      // {
      //   title: "Search",
      //   icon: "search",
      //   url: "/search",
      // },
      // {
      //   title: "Add Product",
      //   icon: "add",
      //   url: "/addProduct",
      // },
      // {
      //   title: "Login",
      //   icon: "person",
      //   url: "/login",
      // },
    ],
  }),
  props: {
    source: String,
  },
  computed: {
    cartCount() {
      return this.$store.getters.CARTCOUNT;
    },
  },
};
</script>

<style lang="sass"></style>
