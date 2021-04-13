<template>
    <!-- Wrap the slider in div with overflow hidden to hide scrollbars -->
    <div class="wrapper">

        <!-- The slider itself is a flex grid -->
        <div class="img-ticker" 
            :class="{ 'img-ticker__animation--reversed': reversed,
                        'img-ticker__animation': !reversed}">


            <!-- Original set of images -->
            <div v-for="img in images" :key="img" class="img-ticker__img-box">
                <img class="img-ticker__img" :src="require(`~/static/images/gallery/${img}.jpg`)">
            </div>
            
            <!-- Copy set of images -->
            <div v-for="img in images" :key="`${img}1`" class="img-ticker__img-box">
                <img class="img-ticker__img" :src="require(`~/static/images/gallery/${img}.jpg`)">
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: ['reversed', 'images']
}
</script>
<style lang="sass" scoped>
.wrapper
    overflow: hidden    
.img-ticker 
    display: flex
    
    //animation: ticker-kf 12s linear infinite alternate
    
    width: 100%
    margin-bottom: 7.5rem


    &__animation
        animation: ticker-kf 16s linear infinite
        justify-content: flex-start
    &__animation--reversed
        animation: ticker-kf-reversed 16s linear infinite
        justify-content: flex-end
       

    &:hover 
        animation-play-state: paused

    &__img-box
        flex: 0 0 calc(33vw - 6rem)

        margin: 0 3rem
        border-radius: 2rem
        //box-shadow: 0 1rem .5rem rgba($color-black, .1)
        box-shadow: $main-shadow
        width: calc(33vw - 6rem)
        height: calc(33vw - 6rem)
    &__img
        border-radius: 2rem
        width: 100%
        height: 100%
        object-fit: cover

</style>