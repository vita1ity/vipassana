<template>
    <div class="hero-area">

    <!-- CAROUSEL -->
    <client-only placeholder="Loading...">
     <agile :initial-slide="0" :autoplay="true" :autoplay-speed="5000" :speed="2500" fade :pauseOnHover="false" :options="sliderOptions">
      <HeroSlide img="buddha2000X1333.jpg" imgMob="buddha500X333.jpg"/>
      <HeroSlide img="mountains2000X1333.jpg" imgMob="mountains500X333.jpg"/>
      <HeroSlide img="oum_chanting2000X1333.jpg" imgMob="oum_chanting500X333.jpg"/>
      <HeroSlide img="oleg_virabhadra2000X1333.jpg" imgMob="oleg_virabhadra500X333.jpg"/>
      <HeroSlide img="books2000X1333.jpg" imgMob="books500X333.jpg"/>
      <!-- <HeroSlide img="tree_meditation2000X1333.jpg" imgMob="tree_meditation500X333.jpg"/> -->
      <HeroSlide img="winter_mountains2000X1333.jpg" imgMob="winter_mountains500X333.jpg"/>

      <template slot="prevButton">
        <ArrowLeft class="agile__nav-icon"/>
      </template>
      <template slot="nextButton">
        <ArrowRight class="agile__nav-icon"/>
      </template>
    </agile>
    </client-only>

    <div class="hero-area__box">
      <div class="hero-area__logo-box animate-left">
          <div class="hero-area__line"></div>
          <OumLogo class="hero-area__logo"/>
          <div class="hero-area__line"></div>
      </div>
      <h1 class="heading-primary margin-bottom-medium animate-right">{{ $t('title') }}</h1>
      <h2 class="heading-secondary animate-fade">{{ $t('subtitle') }}</h2>

    </div>

    <a href="#" v-scroll-to="'#application'" 
      class="hero-area__btn animate-bottom button--action button--centered-abs"
      >
      <h4 class="paragraph-fourth">{{ $t('apply') }}</h4>
    </a>
    <!-- <AppButton type="button"
                class="hero-area__btn animate-bottom"
                btn-style="button--action button--centered-abs"
                v-scroll-to="'#application'"
                >
      <h4 class="paragraph-fourth">{{ $t('apply') }}</h4>
    </AppButton> -->

  </div>  
</template>
<script>
import HeroSlide from '@/components/Slides/HeroSlide'
import AppButton from '@/components/Controls/AppButton'

import ArrowLeft from '~/assets/icons/arrow-left.svg?inline'
import ArrowRight from '~/assets/icons/arrow-right.svg?inline'
import OumLogo from '~/assets/icons/logo_OUM.svg?inline'

export default {
  data() {
    return {
      sliderOptions: {
            navButtons: false,
            
            responsive: [
                // {
                //     breakpoint: 600,
                //     settings: {
                //         dots: false
                //     }
                // },
                
                {
                    breakpoint: 900,
                    settings: {
                        navButtons: true,
                    }
                }
            ]
        }
    }
  },
    components: {
        AppButton,
        HeroSlide,
        ArrowLeft,
        ArrowRight,
        OumLogo,
    },
    methods: {
        moveToApplication() {
            console.log('move to application')
        }
  },
}
</script>
<style lang="sass" scoped>

.hero-area
  height: 100vh
  width: 100%
  position: relative

  &__box
    position: absolute
    top: 45%
    left: 50%
    width: 90%
    transform: translateX(-50%) translateY(-50%)
    
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    @include respond(tab-port) 
      width: 80%

  &__logo-box
      display: flex
      align-items: center
      margin-bottom: 3.8rem

  &__line
      width: 12rem
      height: .4rem
      background-color: $color-white
      //border-top: .4rem solid $color-white
      border-radius: .4rem

      @include respond(phone)
        width: 8rem

  &__logo
      width: 11rem
      height: 11rem
      margin: 0 3.6rem
      fill: $color-white
  
  &__btn
    position: absolute
    bottom: 15%
    left: 50%
    display: flex
    align-items: center
    justify-content: center
    text-decoration: none
    //transform: translateX(-50%)

</style>