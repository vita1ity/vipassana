<template>
    <div class="reviews">
        <h3 class="heading-tertiary">{{ $t('reviews.title') }}</h3>
        <div class="separator"></div>
        <div class="reviews__video-wrapper"> 
            <iframe class="reviews__video" width="800" height="480" src="https://www.youtube.com/embed/3pyOsjeVZ0Y" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="separator"></div>
        <carousel class="carousel" 
                :per-page="1" 
                :mouse-drag="false" 
                easing="ease"
                >
            <slide class="carousel__slide">
                <div class="review">
                    <img src="~/static/images/review-photo.jpg" alt="" class="review__photo">
                    <div class="review__textbox">
                        <h5 class="heading-fifth margin-bottom-smaller">{{$t('reviews.title1')}}</h5>
                        <p class="paragraph-primary margin-bottom-small">{{$t('reviews.text1')}}</p>
                        <span class="heading-secondary-smaller text-align-right">{{$t('reviews.name1')}}</span>
                    </div>
                    
                </div>
            </slide>
            <slide>
                <div class="review">
                    <img src="~/static/images/review-photo.jpg" alt="" class="review__photo">
                    <div class="review__textbox">
                        <h5 class="heading-fifth margin-bottom-smaller">{{$t('reviews.title2')}}</h5>
                        <p class="paragraph-primary margin-bottom-small">{{$t('reviews.text2')}}</p>
                        <span class="heading-secondary-smaller text-align-right">{{$t('reviews.name2')}}</span>
                    </div>
                    
                </div>
            </slide>
            <slide>
                <div class="review">
                    <img src="~/static/images/review-photo.jpg" alt="" class="review__photo">
                    <div class="review__textbox">
                        <h5 class="heading-fifth margin-bottom-smaller">{{$t('reviews.title3')}}</h5>
                        <p class="paragraph-primary margin-bottom-small">{{$t('reviews.text3')}}</p>
                        <span class="heading-secondary-smaller text-align-right">{{$t('reviews.name3')}}</span>
                    </div>
                    
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>


export default {
    
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
        border-radius: 50%
        margin-right: 3.3rem

        @include respond(tab-port)
            align-self: flex-end
            height: 10rem
            width: 10rem

    &__textbox

</style>