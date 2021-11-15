<template>
  <v-container class="mt-4" v-if="empty">
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        d-inline-block
        v-for="(item, index) in cart"
        :key="index"
      >
        <v-card class="elevation-18 mb-2 pa-3 mr-2">
          <v-img :src="item.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ item.title }}</div>
              <h4>{{ item.price }} $</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :to="'/product/' + item.id">{{$t('To order')}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="deleteItemCart(item)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout row>
      <v-flex xs12 class="d-flex justify-center">
        <img src="../../img/empty.png" alt="empty">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      emptyCart: false,
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    empty() {
      return this.$store.getters.ITEMSINCART;
    },
  },
  methods: {
    deleteItemCart(item) {
      this.$store.commit("DeleteItemCart", item);
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: #ffffff;
}
</style>
