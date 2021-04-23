<template>
     <div class="results jarallax">
        
        <div class="results__left-box">
            <AsanaIcon class="results__icon"/>
            <h4 class="heading-fourth--white margin-bottom-smaller">{{ $t('results.heading1') }}</h4>
            <ul class="results__list">
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text1') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text2') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text3') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text4') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text5') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.text6') }}</li>
            </ul>

        </div>
        <div class="results__right-box">
            <h4 class="heading-fourth--white margin-bottom-smaller">{{ $t('results.heading2') }}</h4>
            <ul class="results__list results__list--no-points">
                <li class="results__list-item paragraph-primary--white">{{ $t('results.practice1') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.practice2') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.practice3') }}</li>
                <li class="results__list-item paragraph-primary--white">{{ $t('results.practice4') }}</li>
            </ul>
        </div>
        
    </div>
      
</template>
<script>
import AsanaIcon from '~/assets/icons/asana.svg?inline'
export default {
    data: () => ({
        bgImg: "retreat3.jpg",
        friction: 1 / 1000
    }),
    components: {
        AsanaIcon
    }
}
</script>
<style lang="sass" scoped>


.results
    grid-column: center-start / full-end
    position: relative

    background-image: linear-gradient(rgba($color-primary-darker, .78), rgba($color-primary-darker, .78)), url(~/static/images/fog-1500.jpg)
    //background: linear-gradient(rgba($color-primary-darker, .78), rgba($color-primary-darker, .78))
    background-size: cover
    background-position: center

    display: flex
    justify-content: flex-start
    align-items: center
    padding: 6rem 13.5rem
    margin-bottom: $margin-btm-container

    border-top-left-radius: 1rem
    border-bottom-left-radius: 1rem
    box-shadow: $main-shadow

    @include respond(tab-land) 
        padding: 6rem 10rem 
    
    @include respond(tab-middle) 
        grid-column: full-start / full-end
        margin-bottom: $margin-btm-container-mobile
        padding: 6rem
        justify-content: center

    @include respond(tab-small) 
        flex-direction: column

    @include respond(phone) 
        padding: 6rem 3rem

    //animation: appearRight 2s ease-out

    &__left-box
        margin-right: 7.5rem

        @include respond(tab-port) 
            //margin-right: 5rem

        @include respond(tab-small)
            display: flex
            flex-direction: column
            margin-right: 0
            margin-bottom: 8rem

    &__right-box
        background-color: rgba($color-shadow, .18)
        border-radius: 1rem
        height: 90%
        padding: 10.7rem 20rem 5rem 5rem

        @include respond(tab-land) 
            padding: 10rem 15rem 5rem 5rem

        // @include respond(tab-small)
            
        //     margin-right: 0
        //     margin-bottom: 8rem

    &__icon
        fill: $color-white
        height: 7rem
        width: auto
        margin-bottom: 5rem
    &__list
        list-style-position: inside

        &--no-points
            list-style-type: none

    &__list-item
        line-height: 3rem


        
</style>