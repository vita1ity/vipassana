<template>
    <!-- <div class="slide" :style='cssProps'> -->
        
    <parallax class="slide agile__slide" :speed-factor=".3">
        <img :src="require('@/static/images/hero/' + img)" 
            alt="Slide Background" 
            class="slide-background"
            @load="onLoaded"
            v-show="loaded"
        >
        <pulse-loader :loading="!loaded" class="spinner" :color="color"></pulse-loader>

            <!-- <img :srcset="`require('@/static/images/hero/${img}') 500w, require('@/static/images/hero/${imgMob}') 2000w`" 
                sizes="100vw"
                alt="Slide Background" 
                class="slide-background"> -->
        <!-- <img :srcset="this.heroSrcset" 
                sizes="(max-width: 600px) 500px, (max-width: 1200px) 1200px, 100vw"
                alt="Slide Background" 
                class="slide-background"> -->
    </parallax> 
        
    <!-- <img :src="require('@/static/images/' + img)" alt="Slide Background" class="slide-background"> -->
    <!-- </div> -->
</template>
<script>
import Parallax from 'vue-parallaxy'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    props: [
        'img', 'imgMob'
    ],
    components: {
      Parallax,
      PulseLoader
    },
    data() {
        return {
            loaded: false,
            color: '#5131EC'
        }
    },
    computed: {
        cssProps() {
            return {
                '--img-url': 'url(@/static/images/' + this.img + ')',
            }
        },
        heroSrcset () {
            return `${require(`@/static/images/hero/${this.imgMob}`)} 500w, ${require(`@/static/images/hero/${this.img}`)} 2000w`
        }
        
    },
    methods: {
        onLoaded() {
            this.loaded = true
        }
    }

}
</script>
<style lang="sass" scoped>
.slide-background
    //background-url: var(--img-url)
    // background-image: url('@/static/images/buddha.jpg')
    // background-size: cover
    width: 100%
    height: auto
    object-fit: cover
.slide
    display: flex
    align-items: center
    height: 100vh !important
    object-fit: cover
    width: 100%
    position: relative

.spinner
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    color: $color-primary !important
    fill: $color-primary
    //background-color: rgba($color-white, .3)
    
</style>