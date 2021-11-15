<template>
  <v-container class="mt-4">
    <v-layout row wrap v-if="loading">
      <v-flex
        xs12
        sm6
        md4
        d-inline-block
        v-for="(product, id) in products"
        :key="id"
      >
        <v-card class="mb-2 pa-3 mr-2" elevation="12" outlined>
          <v-img :src="product.src" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{ product.title }}</div>
              <h3 class="font-weight-black">{{ product.price }} $</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :to="'/product/' + product.id"
              >{{$t('To order')}}</v-btn
            >
            <v-btn
              @click="AddToCart(product)"
              :loading="!loading"
              :disabled="product.disable"
              color="black"
            >
              <v-icon color="white">mdi-cart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <Loader v-else />
    <Snackbar/>
  </v-container>
</template>

<script>
import Loader from "../ui/Loader"
import Snackbar from '../ui/Snackbar'
export default {
  components: {
    Loader,
    Snackbar
  },
  data() {
    return {
    };
  },

  computed: {
    products() {
      return this.$store.getters.MEN;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    AddToCart(product) {
      this.$store.commit("AddToShoppingCart", product);
      this.$store.commit("SetSnackbar", true)
      product.disable = true;
    },
  },
};
</script>

<style lang="css" scoped></style>
