<template>
<div justify-center>
    <v-carousel :show-arrows="false"  cycle hide-delimiters max dark interval="2000" class="mt-5 elevation-0">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" class="custom-carousel">
        </v-carousel-item>
    </v-carousel>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: require("@/img/Nike-big-logo.png")
                },
                {
                    src: require("@/img/just-do-it.png")
                },
                {
                    src: require("@/img/nike-3.png")
                }
            ]
        };
    }
};
</script>

<style lang="css">
.custom-carousel {
    max-width: 800px;
    margin: auto;
}
</style>
