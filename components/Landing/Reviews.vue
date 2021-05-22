<template>
    <div class="reviews">
        <h3 class="heading-tertiary">{{ $t('reviews.title') }}</h3>
        <div class="separator"></div>
        <div class="reviews__video-wrapper"> 
            <iframe class="reviews__video" width="800" height="480" src="https://www.youtube.com/embed/3pyOsjeVZ0Y" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="separator"></div>
        <client-only>
            <carousel class="carousel" 
                    :per-page="1" 
                    :mouse-drag="false" 
                    easing="ease"
                    :adjustableHeight="true"
                    adjustableHeightEasing="ease"
                    >
                <slide class="carousel__slide" v-for="slide in slides" :key="slide.id">
                    <div class="review">
                        <img :src="slide.image" alt="" class="review__photo">
                        <div class="review__textbox">
                            <h5 class="heading-fifth margin-bottom-smaller" v-html="slide.title"></h5>
                            <p class="paragraph-primary margin-bottom-small" v-html="slide.text"></p>
                            <span class="heading-secondary-smaller text-align-right">{{ slide.name }}</span>
                        </div>
                        
                    </div>
                </slide>
            </carousel>
        </client-only>
    </div>
</template>
<script>


export default {
    data() {
        return {
            slides: [
                {
                    id: 1,
                    img: 'review1.jpg',
                    image: require('@/static/images/reviews/review1.jpg'),
                    title: this.$t('reviews.title1'),
                    text: this.$t('reviews.text1'),
                    name: this.$t('reviews.name1')
                },
                {
                    id: 2,
                    img: 'review2.jpg',
                    image: require('@/static/images/reviews/review2.jpg'),
                    title: this.$t('reviews.title2'),
                    text: this.$t('reviews.text2'),
                    name: this.$t('reviews.name2')
                },
                {
                    id: 3,
                    img: 'review3.jpg',
                    image: require('@/static/images/reviews/review3.jpeg'),
                    title: this.$t('reviews.title3'),
                    text: this.$t('reviews.text3'),
                    name: this.$t('reviews.name3')
                },
                {
                    id: 4,
                    img: 'review4.jpg',
                    image: require('@/static/images/reviews/review4.jpg'),
                    title: this.$t('reviews.title4'),
                    text: this.$t('reviews.text4'),
                    name: this.$t('reviews.name4')
                },
                {
                    id: 5,
                    img: 'review5.jpg',
                    image: require('@/static/images/reviews/review5.jpeg'),
                    title: this.$t('reviews.title5'),
                    text: this.$t('reviews.text5'),
                    name: this.$t('reviews.name5')
                },
                {
                    id: 6,
                    img: 'review6.jpg',
                    image: require('@/static/images/reviews/review6.jpeg'),
                    title: this.$t('reviews.title6'),
                    text: this.$t('reviews.text6'),
                    name: this.$t('reviews.name6')
                },
                {
                    id: 7,
                    img: 'review7.jpg',
                    image: require('@/static/images/reviews/review7.jpeg'),
                    title: this.$t('reviews.title7'),
                    text: this.$t('reviews.text7'),
                    name: this.$t('reviews.name7')
                }
            ]
        }
    }
}
</script>
<style lang="sass" scoped>
.reviews
    grid-column: full-start / full-end
    display: flex
    flex-direction: column
    align-items: center
    margin: 8rem 0 20rem 0

    @include respond(tab-port)
        margin: 4rem 0 10rem 0
    
    &__video-wrapper
        margin-bottom: 4rem
        position: relative
        padding-bottom: 36%
        box-shadow: $main-shadow
        
        height: 0
        width: calc(60% - 6rem)

        @include respond(tab-land)
            width: calc(90% - 6rem)
            padding-bottom: 52%

        @include respond(phone)
            width: calc(100% - 6rem)
            padding-bottom: 52%
    &__video
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        
.carousel
    width: 60%

    @include respond(tab-land)
        width: 80%

    @include respond(phone)
        width: 90%
    &__slide
        //padding: 0 3rem


.review
    display: flex

    @include respond(tab-port)
        flex-direction: column

    &__photo
        height: 18rem
        width: 18rem
        object-fit: cover
        border-radius: 50%
        margin-right: 3.3rem

        @include respond(tab-port)
            align-self: flex-end
            height: 10rem
            width: 10rem

    &__textbox

</style>