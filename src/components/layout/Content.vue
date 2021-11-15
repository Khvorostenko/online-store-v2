<template>
  <v-main class="custom-content">
    <transition
      mode="out-in"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <router-view></router-view>
    </transition>
  </v-main>
</template>

<script>

export default {};
</script>

<style lang="sass" scoped>
.custom-content
    background-image: url("../../img/section-1-bg.png")
    background-size: cover
    background-attachment: fixed
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
</style>
