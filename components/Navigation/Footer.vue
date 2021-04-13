<template>
    <div class="footer ">
        <div class="footer__content grid">
            <OumLogo class="footer__logo"/> 
            <div class="footer__inner">
                <div class="footer__contacts">
                    <h5 class="heading-fifth--light">
                        {{ $t('footer.contact.title') }}
                    </h5>
                    <div class="separator--second"></div>
                    <div class="footer__links-box">
                        <a href="whatsapp://send?phone=380668853728&text=" target="_blank" class="footer__link">
                            <WhatsAppIcon class="footer__icon"/>
                            <span class="paragraph-small--white">WhatsApp</span>
                        </a>
                        <a href="tg://resolve?domain=@oleg_oum_kiev" target="_blank" class="footer__link">
                            <TelegramIcon class="footer__icon"/>
                            <span class="paragraph-small--white">Telegram</span>
                        </a>
                        <a href="viber://chat?number=%2B380668853728" target="_blank" class="footer__link">
                            <ViberIcon class="footer__icon"/>
                            <span class="paragraph-small--white">Viber</span>
                        </a>
                    </div>
                </div>
                <div class="footer__social">
                    <h5 class="heading-fifth--light">
                        {{ $t('footer.social.title') }}
                    </h5>
                    <div class="separator--second"></div>
                    <div class="footer__links-box">
                        <a href="https://www.facebook.com/olegoum/" target="_blank" class="footer__link">
                            <FacebookIcon class="footer__icon"/>
                            <span class="paragraph-small--white">Facebook</span>
                        </a>
                        <a href="https://www.youtube.com/user/mahadevavideo" target="_blank" class="footer__link">
                            <YoutubeIcon class="footer__icon"/>
                            <span class="paragraph-small--white">Youtube</span>
                        </a>
                        <a href="tg://resolve?domain=oumkiev" target="_blank" class="footer__link">
                            <TelegramIcon class="footer__icon"/>
                            <span class="paragraph-small--white">Telegram</span>
                        </a>
                    </div>
                    
                </div>
                
                <hooper class="footer__carousel" :autoPlay="true" :playSpeed="5000" :transition="1000">
                    <slide v-for="(slide, i) in slides" :key="i" class="footer__slide">    
                        <h2 class="footer__slide-title heading-secondary-smaller--white margin-bottom-">
                            {{ slide.title }}
                        </h2>
                        <p class="footer__slide-author paragraph-primary--white">{{ slide.content }}</p>
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    
                </hooper>
                   
            </div>   
            
        </div>
        <div class="footer__bottom-line">
            <p class="paragraph-small--white">
                &copy; {{ $t('footer.copyright') }}, 2021
            </p>
        </div>
    </div>
</template>
<script>
import OumLogo from '~/assets/icons/logo_OUM.svg?inline'
import FacebookIcon from '~/assets/icons/contacts/facebook.svg?inline'
import TelegramIcon from '~/assets/icons/contacts/telegram.svg?inline'
import ViberIcon from '~/assets/icons/contacts/viber.svg?inline'
import WhatsAppIcon from '~/assets/icons/contacts/whatsapp.svg?inline'
import YoutubeIcon from '~/assets/icons/contacts/youtube.svg?inline'

// import VueSlickCarousel from 'vue-slick-carousel'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { Hooper, Slide, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';

// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        OumLogo,
        FacebookIcon,
        TelegramIcon,
        ViberIcon,
        WhatsAppIcon,
        YoutubeIcon,
        // VueperSlides,
        // VueperSlide,
        // VueSlickCarousel,
        Hooper,
        Slide,
        HooperPagination
    },
    data() {
        return {
            slides: [
                {
                    title: this.$t('footer.wisdom1.text'),
                    content: this.$t('footer.wisdom1.author')
                },
                {
                    title: this.$t('footer.wisdom2.text'),
                    content: this.$t('footer.wisdom2.author')
                },
                {
                    title: this.$t('footer.wisdom3.text'),
                    content: this.$t('footer.wisdom3.author')
                }

            ]
        }
    }
}
</script>
<style lang="sass" scoped>
.footer
    //height: 50rem
    background-color: rgba($color-primary-darker, .8)
    width: 100%
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%)
    margin-top: -8rem
    padding-top: 8rem
    position: relative
    overflow: hidden

    @include respond(tab-small)
        clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%)
        
        padding-top: 0

    @include respond(phone)
        clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%)
        
    &__content
        width: 100%
        height: 100%
        align-content: center
        padding: 10rem 0
        position: relative

        @include respond(tab-land)
            padding: 7rem 0
        // @include respond(tab-port)
        //     padding: 0
        @include respond(tab-small)
            clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%)
            padding: 14rem 0 0 0
        @include respond(phone)
            clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%)
            padding: 12rem 0 0 0
    &__inner
        grid-column: center-start / center-end
        display: grid
        grid-template-columns: repeat(4, minmax(0, 1fr))
        column-gap: 4rem
        row-gap: 8rem
        align-items: center

        @include respond(tab-middle)
            grid-column: full-start / full-end
            padding: 0 6rem
        @include respond(tab-small)
            justify-content: center

        @include respond(phone)
            padding: 0 3rem

    &__contacts
        grid-column: 1 / 2
        @include respond(tab-small)
            grid-column: 1 / span 2
            display: flex
            flex-direction: column
            align-items: center

        @include respond(phone-small)
            grid-column: 1 / span 4
            //margin-bottom: 6rem
        
    &__social
        grid-column: 2 / 3
        @include respond(tab-small)
            grid-column: 3 / span 2
            display: flex
            flex-direction: column
            align-items: center
            
        @include respond(phone-small)
            grid-column: 1 / span 4
            //margin-bottom: 6rem

    &__links-box
        display: flex
        flex-direction: column
        align-items: flex-start
    &__link
        display: flex
        align-items: center
        justify-content: flex-start
        
        &:not(:last-child)
            margin-bottom: 2rem

        &:link
            text-decoration: none

        &:hover .footer__icon
            filter: brightness(130%)

    &__icon
        transition: .4s all
        fill: $color-secondary
        margin-right: 1.5rem
    
    &__carousel
        grid-column: 3 / span 2
        //align-self: center

        @include respond(tab-small)
            grid-column: 1 / span 4
            margin-bottom: 6rem

    &__slide
        display: flex
        alifn-items: center
        justify-content: center
        flex-direction: column
    &__slide-title
        margin-bottom: 1rem
    &__slide-author
        align-self: flex-end
        margin-bottom: 2rem
    &__logo
        position: absolute
        bottom: 0
        right: 0
        transform: translate(50%, 0)
        height: 70rem
        width: 70rem
        fill: rgba($color-white, .2)

    &__bottom-line
        width: 100%
        border-top: 1px solid $color-primary-additional
        text-align: center
        display: flex
        justify-content: center
        align-items: center
        padding: 2rem 0        

      
</style>