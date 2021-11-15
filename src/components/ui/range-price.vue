<template>
  <div class="range">
    <h4>{{$t('Price')}}:</h4>
    <v-range-slider v-model="range" :max="max" :min="min"></v-range-slider>
    <h4>{{$t('from')}} {{ range[0] }}$ {{$t('to')}} {{ range[1] }}$</h4>
    <v-btn rounded block @click="filterPriceRange">{{$t('Search')}}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 450,
      range: [0,0],
    };
  },
  methods: {
    filterPriceRange(){
      this.$store.commit('RangePrice', this.range)
    }
  },
};
</script>

<style lang="sass" scoped>
.range
    padding: 10px
    h4
        color: #ffffff
        padding-bottom: 15px
    span
        color: #ffffff
        font-size: 15px
</style>
