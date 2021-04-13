<template>
    <div class="gallery">
        <Ticker :images="galleryImages1"/>
        <Ticker reversed="true" :images="galleryImages2"/>
    </div>    
</template>
<script>
import Ticker from '@/components/Landing/Ticker'
export default {
    components: {
        Ticker
    },
    data() {
        return {
            galleryImages1: ['gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6'],
            galleryImages2: ['gallery7', 'gallery8', 'gallery9', 'gallery10', 'gallery11', 'gallery12'],
        }
    }
}
</script>

<style lang="sass" scoped>
.gallery
    grid-column: full-start / full-end    

    @include respond(tab-land)
        display: none
</style>