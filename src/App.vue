<template>
<v-app>
<Header/>
<Content/>
<Footer/>
</v-app>
</template>

<script>
import Footer from './components/layout/Footer'
import Content from './components/layout/Content'
import Header from './components/layout/Header'
export default {
    name:'App',
    components:{
        Header,
        Content,
        Footer
    },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>



