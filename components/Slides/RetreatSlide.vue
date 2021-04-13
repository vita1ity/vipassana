<template>
    
    <div class="slide">
         <div class="slide__content">
            <h4 class="heading-fourth--white margin-bottom-medium align-center">{{ title }}</h4>
            <div class="separator--white margin-bottom-big"></div>
            <div class="slide__main-area">
                <div class="slide__left-box">
                    <p class="paragraph-primary--white line-height--big margin-bottom-medium"
                        v-html="$t('retreat.teachers', {
                            'teacher1': '<a class=\'text-link\' @click=&quot;modalOpened=\'oleg\'&quot; href=\'#\'>' + teacher1 + '</a>',
                            'teacher2': '<a class=\'text-link\' href=\'#\'>' + teacher2 + '</a>',
                        })"
                    > 
                        <!-- {{ $t('retreat.teachers', { teacher1: teacher1, teacher2: teacher2}) }} -->
                    </p>
                    <h4 class="heading-fourth--white margin-bottom-smaller">
                        {{ $t('retreat.priceIncludes') }}
                    </h4>
                    <ul class="slide__list slide__list--no-points">
                        <li class="paragraph-primary--white slide__list-item">
                            {{ $t('retreat.priceIncludes.living') }}
                        </li>
                        <li class="paragraph-primary--white slide__list-item">
                            {{ $t('retreat.priceIncludes.yoga') }}
                        </li>
                        <li class="paragraph-primary--white slide__list-item">
                            {{ $t('retreat.priceIncludes.meal') }}
                        </li>
                    </ul>
                    
                </div>
                <div class="slide__right-box">
                    <div class="slide__price-box">
                        <h4 class="heading-fourth--white margin-bottom-smaller">
                            {{ $t('retreat.price.title') }}
                        </h4>
                        <ul class="slide__list">
                            <li class="paragraph-primary--white slide__list-item">
                                {{ $t('retreat.price.four', {price: price4}) }}
                            </li>
                            <li class="paragraph-primary--white slide__list-item">
                                {{ $t('retreat.price.three', {price: price3}) }}
                            </li>
                            <li class="paragraph-primary--white slide__list-item">
                                {{ $t('retreat.price.two', {price: price2}) }}
                            </li>
                        </ul>
                    </div>
                    <div class="slide__comment-box">
                        <p class="paragraph-primary--white ">{{ $t('retreat.transport') }}</p>
                        <p class="paragraph-primary--white">{{ comment }}</p>    
                    </div>
                    
                </div>
            </div>
            <!-- <TeacherModals @emitCloseModal="closeModal" :modalOpened="modalOpened" /> -->
        </div>
    </div>
    
</template>
<script>
// import Parallax from 'vue-parallaxy'
// import TeacherModals from '@/components/Modals/TeacherModals'

export default {
    // components: {
    //     TeacherModals,
    //     Parallax
    // },
    data() {
        return {
            modalOpened: null
        }
    },
    props: ['title', 'teacher1', 'teacher2', 'price4', 'price3', 'price2', 'comment'],
    
    // computed: {
    //     cssProps() {
    //         return {
    //            '--img-url': `url(${require('~/static/images/retreat/' + this.img)})`
    //         }
    //     }
    // },
    // methods: {
    //     closeModal() {
    //         this.modalOpened = null
    //     }
    // }
}
</script>
<style lang="sass" scoped>

.slide
    display: grid
    grid-template-columns: $main-grid
    //grid-column: center-start / center-end
    justify-content: center
    align-items: center

    height: 100%
    width: 100%
    position: relative
    
    background-size: cover
    background-position: top
    background: linear-gradient(rgba($color-primary-darker, .75), rgba($color-primary-darker, .75))
    // background: linear-gradient(rgba($color-primary-darker, .75), rgba($color-primary-darker, .75)), var(--img-url)
    // background-size: cover
    // background-position: center

    //background-attachment: fixed
    &__content
        grid-column: center-start / center-end
        margin: 0 3rem
        //animation: appearRight 2s ease

        //padding: 17rem 6rem  

        // @include respond(tab-port)
        //     margin: 0 3rem
        @include respond(tab-port)
            grid-column: full-start / full-end
    &__main-area
        display: flex
        justify-content: center

        @include respond(tab-middle)
            flex-direction: column
            align-items: center

    &__left-box
        margin-right: 7.5rem
        @include respond(tab-middle)
            margin-bottom: 5rem
            margin-right: 0
            display: flex
            align-items: center
            justify-content: center
            flex-direction: column
    &__right-box
        
    &__price-box
        background-color: rgba($color-shadow, .18)
        border-radius: 1rem
        padding: 7rem 12rem 5rem 5rem
        margin-bottom: 5rem

        @include respond(phone-small)
            padding: 4rem 2rem 2rem 2rem
    &__list
        list-style-position: inside
        &--no-points
            list-style-type: none
    
    &__list-item
        line-height: 3rem
        white-space: nowrap
    
    &__comment-box
        padding-left: 5rem
        line-height: 3rem


</style>