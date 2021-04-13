<template>
    <div class="techniques">
      <div class="card card--1">
        <div class="card__info">
          
          <div class="card__icon-box" v-animate-onscroll="'animate-fade-1'">
            <MeditationIcon class="card__icon"/>
            <div class="card__circle"></div>  
          </div>
          <h4 class="heading-fourth card__title">{{$t('techniques.title.meditation')}}</h4>
          <p class="paragraph-primary2 card__text">{{$t('techniques.text.meditation')}}</p>
        </div>
        <a href="https://www.oum.ru/yoga/meditatsiya/meditatsiya/" target="_blank" 
          class="text-link card__link">
            {{$t('techniques.more')}} 
            <ArrowUpRight class="card__arrow"/></a>
      </div>
      <div class="card card--2">
        <div class="card__info">
          
          <div class="card__icon-box" v-animate-onscroll="'animate-fade-2'">
            <MaunaIcon class="card__icon"/>
            <div class="card__circle"></div>  
          </div>
          <h4 class="heading-fourth card__title">{{$t('techniques.title.mauna')}}</h4>
          <p class="paragraph-primary2 card__text">{{$t('techniques.text.mauna')}}</p>
        </div>
        <a href="https://www.oum.ru/yoga/osnovy-yogi/mauna/" target="_blank" 
          class="text-link card__link">
            {{$t('techniques.more')}} 
            <ArrowUpRight class="card__arrow"/></a>
      </div>
      <div class="card card--3">
        <div class="card__info">
          <div class="card__icon-box" v-animate-onscroll="'animate-fade-3'">
            <PranayamIcon class="card__icon"/>
            <div class="card__circle"></div>  
          </div>
          
          <h4 class="heading-fourth card__title">{{$t('techniques.title.pranayam')}}</h4>
          <p class="paragraph-primary2 card__text">{{$t('techniques.text.pranayam')}}</p>
        </div>
        <a href="https://www.oum.ru/yoga/pranayama/dykhanie-kontrol-nad-energiey-i-put-k-bessmertiyu/" target="_blank" 
          class="text-link card__link">
            {{$t('techniques.more')}} 
            <ArrowUpRight class="card__arrow"/></a>
      </div>
      <div class="card card--4">
        <div class="card__info">
          
          <div class="card__icon-box" v-animate-onscroll="'animate-fade-1'"> 
            <AsanaIcon class="card__icon"/>
            <div class="card__circle"></div>  
          </div>
          <h4 class="heading-fourth card__title">{{$t('techniques.title.asana')}}</h4>
          <p class="paragraph-primary2 card__text">{{$t('techniques.text.asana')}}</p>
        </div>
        <a href="https://www.oum.ru/yoga/asany/" target="_blank" 
          class="text-link card__link">
            {{$t('techniques.more')}} 
            <ArrowUpRight class="card__arrow"/></a>
      </div>
      <div class="card card--5">
        <div class="card__info">
          
          <div class="card__icon-box" v-animate-onscroll="'animate-fade-2'">
            <OmIcon class="card__icon"/>
            <div class="card__circle"></div>  
          </div>
          <h4 class="heading-fourth card__title">{{$t('techniques.title.om')}}</h4>
          <p class="paragraph-primary2 card__text">{{$t('techniques.text.om')}}</p>
        </div>
        <a href="https://www.oum.ru/yoga/mantry/mantra-om/" target="_blank" 
          class="text-link card__link">
            {{$t('techniques.more')}} 
            <ArrowUpRight class="card__arrow"/>
        </a>
      </div>
    </div>
</template>
<script>

import MeditationIcon from '~/assets/icons/meditation.svg?inline'
import MaunaIcon from '~/assets/icons/mauna.svg?inline'
import PranayamIcon from '~/assets/icons/pranayam.svg?inline'
import AsanaIcon from '~/assets/icons/asana.svg?inline'
import OmIcon from '~/assets/icons/om.svg?inline'
import ArrowUpRight from '~/assets/icons/arrow-up-right.svg?inline'
import { techniquesUrl } from '@/common/vars'
//import VueAnimateOnScroll from 'vue-animate-onscroll'

export default {
    components: {
        MeditationIcon,
        MaunaIcon,
        PranayamIcon,
        AsanaIcon,
        OmIcon,
        ArrowUpRight
    }
}
</script>
<style lang="sass" scoped>

.techniques
  //background: linear-gradient(to bottom, $color-white, $color-light-gradient)
  padding: 10rem 2rem 0 2rem
  margin-bottom: 20rem
  display: grid
  grid-template-columns: repeat(6, 1fr)
  grid-template-rows: repeat(2, min-content)
  row-gap: 6rem
  column-gap: 6rem

  grid-column: cards-start / cards-end

  @include respond(tab-port) 
    margin-bottom: 10rem
    padding: 5rem 2rem 0 2rem

  @include respond(phone) 
    grid-column: full-start / full-end
    margin-bottom: 10rem

.card

  background-color: $color-white
  box-shadow: $cards-shadow
  padding: 4rem
  transition: .4s
  display: flex
  flex-direction: column
  justify-content: space-between

  &:hover
    transform: scale(1.05) translateY(-.5rem)
    box-shadow: $cards-shadow-hover


  &--1
    grid-column: 1 / span 2
  
  &--2
    grid-column: 3 / span 2

  &--3
    grid-column: 5 / span 2

  &--4
    grid-column: 2 / span 2
    grid-row: 2 / span 1

  &--5
    grid-column: 4 / span 2
    grid-row: 2 / span 1

  @include respond(tab-land)
    grid-column: 1 / span 6

  @include respond(tab-port)
    padding: 2rem

  &__icon-box
    height: 6rem
    margin-bottom: 4rem
    position: relative

  &__icon
    height: inherit
    width: auto
    fill: $color-primary

  &__circle
    position: absolute  
    bottom: 0
    left: 0
    height: 4rem
    width: 4rem
    background-color: rgba($color-secondary, .4)
    border-radius: 50%
    z-index: 10

  &__title
    margin-bottom: 3rem

  &__text
    margin-bottom: 4rem

  &__link
    font-size: 1.8rem

  &__arrow
    margin-left: .5rem
    height: 1.4rem
    width: auto

</style>