<template>
  <v-container fluid class="bg animate__animated animate__fadeInDown">
    <v-layout wrap>
      <v-flex xs12 sm12 md6>
        <v-img :src="item.src"> </v-img>
        <v-btn icon class="back" @click="followBack">
          <v-icon light top x-large title="Back">
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm12 md6 class="pl-3">
        <v-card-title primary-title>
          <div>
            <h1>{{ item.title }}</h1>
            <h2>{{ item.price }}$</h2>
          </div>
        </v-card-title>
        <v-card-text>
          <p>{{ item.description }}</p>
        </v-card-text>
        <v-overflow-btn
          v-model="sizeItem"
          dense
          filled
          :items="size"
          counter
          :label="$t('Please select a size')"
        ></v-overflow-btn>
        <Order :item="item" :size="sizeItem" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Order from "../ui/order-form";
export default {
  props: {
    id: [Number, String],
  },
  components: {
    Order,
  },
  data: () => ({
    size: [
      "US 7(ru 39)",
      "US 7.5(ru 39.5)",
      "US 8(ru 40)",
      "US 8.5(ru 41)",
      "US 9(ru 41.5)",
      "US 9.5(ru 42)",
      "US 10(ru 43)",
      "US 11(ru 44)",
    ],
    sizeItem: "none",
  }),
  computed: {
    item() {
      const id = this.$route.params.id;
      return this.$store.getters.PRODUCTBYID(id);
    },
  },
  methods: {
    followBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="sass" scoped>
.bg
  background: #ffffff
  width: 100%
  height: 100%

h2
  color: green
  margin-top: 50px

p
  font-size: 16px

.back
  position: absolute
  top: 30px
  left: 30px
</style>
