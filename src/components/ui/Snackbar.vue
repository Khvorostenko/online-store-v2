<template>
  <v-snackbar v-model="snackbar" timeout="1000" top light>
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  data() {
    return {
      text: "Product added to cart!",
    };
  },
  computed:{
      snackbar:{
          get(){
              return this.$store.state.snackbar
          },
          set(){

          }
      }
  }
};
</script>
