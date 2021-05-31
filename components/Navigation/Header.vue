<template>
    <FixedHeader :threshold="60" 
                 :headerClass="'header__sticky'" 
                 :fixedClass="'header__fixed'"
                 >

        <div class="header animate-top">
            <!-- <nuxt-link to="/" class="logo ">
                <img src="~/assets/icons/oum-logo-image.png" class="logo__img animate-fade" alt="Oum Logo"> 
            -->
                <!-- <OumLogo /> -->
            <!-- </nuxt-link> --> 

            <a href="" v-scroll-to="'#start'"         
                class="logo" 
                >
                <img src="~/assets/icons/oum-logo-image.png" class="logo__img animate-fade" alt="Oum Logo">
            </a>


            <!-- <div class="mobile-menu__wrapper" v-click-outside.self="toggleMenu"> -->
                
            <!-- MOBILE MENU -->
            <div class="mobile-menu" >
                <MenuIcon @click.stop="toggleMenu" ref="mobileMenu"/>
            </div>

            <!-- MOBILE NAVIGSTION -->
            <transition name="slide">
                <nav class="navigation--mobile" v-click-outside="toggleMenu"
                    v-if="openMobileMenu"
                    >

                    <a href="#" v-scroll-to="{
                            el: '#about',
                            onStart: onStart
                        }" 
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('aboutRetreat') }}
                    </a>

                    <a href="" v-scroll-to="{
                            el: '#events',
                            onStart: onStart
                        }"                      
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('events') }}
                    </a>

                    <a href="" v-scroll-to="{
                            el: '#program',
                            onStart: onStart
                        }"                       
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('program') }}
                    </a>

                    <a href="" v-scroll-to="{
                            el: '#reviews',
                            onStart: onStart
                        }"                       
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('reviews') }}
                    </a>

                    <!-- <a href="" v-scroll-to="'#gallery'"
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('gallery') }}
                    </a> -->

                    <a href="" v-scroll-to="{
                            el: '#teachers',
                            onStart: onStart
                        }"                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('teachers') }}
                    </a>

                    <a href="" v-scroll-to="{
                            el: '#application',
                            onStart: onStart
                        }"          
                        class="navigation__link paragraph-tertiary--bigger" 
                        activeClass="navigation__link--active"
                        >
                        {{ $t('application') }}
                    </a>
                </nav>
                        
            </transition>
            <!-- </div> -->

            <!-- DESKTOP NAVIGATION -->
            <nav class="navigation">
            
                <a href="" v-scroll-to="'#about'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('aboutRetreat') }}
                </a>

                <a href="" v-scroll-to="'#events'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('events') }}
                </a>

                <a href="" v-scroll-to="'#program'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('program') }}
                </a>

                <a href="" v-scroll-to="'#reviews'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('reviews') }}
                </a>

                <a href="" v-scroll-to="'#gallery'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('gallery') }}
                </a>

                <a href="" v-scroll-to="'#teachers'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('teachers') }}
                </a>

                <a href="" v-scroll-to="'#application'"         
                    class="navigation__link paragraph-tertiary" 
                    activeClass="navigation__link--active"
                    >
                    {{ $t('application') }}
                </a>

            </nav>  
            

            <nav class="lang-switch">
                <nuxt-link :to="switchLocalePath('ua')" 
                            class="lang-switch__link" 
                            :class="{ 'lang-switch__link--active': lang === 'ua'}"
                            @click="lang = 'ua'"
                            >
                    <UkrainianFlag class="lang-switch__flag" @click="lang = 'ua'"/>
                </nuxt-link>
                <nuxt-link :to="switchLocalePath('ru')" 
                            class="lang-switch__link" 
                            :class="{ 'lang-switch__link--active': lang === 'ru'}"
                            @click="lang = 'ru'"
                            >
                    <RussianFlag class="lang-switch__flag" @click="lang = 'ru'"/>
                </nuxt-link> 
            </nav>
        </div>
        
    </FixedHeader>
     
</template>
<script>
import OumLogo from '~/assets/icons/oum-logo.svg?inline'
import UkrainianFlag from '~/assets/icons/ukrainian-flag.svg?inline'
import RussianFlag from '~/assets/icons/russian-flag.svg?inline'
import MenuIcon from '~/assets/icons/menu.svg?inline'
import FixedHeader from 'vue-fixed-header'

export default {
    components: { 
        OumLogo, 
        UkrainianFlag,
        RussianFlag,
        MenuIcon,
        FixedHeader
    },
    data() {
        return {
            lang: this.$root.$i18n.locale,
            openMobileMenu: false,
            // scrollOptions: {
            //     easing: 'ease-in',
            //     lazy: false,
            //     offset: -60,
            //     force: true,
            //     cancelable: true,
            //     onStart: function(element) {
            //         // scrolling started
            //         this.toggleMenu()
            //     }
            // }
        }
    },
    methods: {
        toggleMenu() {
            this.openMobileMenu = !this.openMobileMenu
            console.log('toggle menu: ' + this.openMobileMenu)
        },
        onStart() {
            console.log('scrolling')
            this.toggleMenu()
        }
    }
}
</script>
<style lang="sass" scoped>
    .header
        opacity: 0
        transition: .5s
        &__sticky
            //background-color: rgba($color-primary, .64)
            background: linear-gradient( to right, rgba($color-header-1, .7), rgba($color-header-2, .7) 40%, rgba($color-header-3, .7)) 
            
            height: 8rem
            width: 100vw
            position: fixed
            top: 0
            left: 0
            z-index: 10

            display: flex
            align-items: center
            justify-content: space-between
            
            padding: 0 9.4rem

            transition: .4s

            @include respond(tab-land) 
                padding: 0 4rem

            @include respond(phone) 
                padding: 0 2rem


        &__fixed
            position: fixed
            left: 0
            top: 0
            height: 6rem
            width: 100vw

    .logo
        height: 60%

        @include respond(tab-port) 
            display: none

        &__img
            height: 100%
            width: auto
            opacity: 0

    .navigation

        display: flex

        @include respond(tab-port) 
            display: none

        &__link 
            padding: 2.5rem
            transition: .3s

            &:link, &:visited 
                text-decoration: none
            
            &:hover 
                color: $color-secondary
            
            &--active 
                color: $color-secondary

                &:hover 
                    cursor: default
                    color: $color-secondary
            

        &--mobile
            position: absolute
            top: 0
            left: 0
            width: 100%
            display: flex
            flex-direction: column
            background: linear-gradient( to right, rgba($color-header-1, .9), rgba($color-header-2, .9) 40%, rgba($color-header-3, .9)) 
            padding: 6rem 0 2rem 0
            z-index: 1
    
    .mobile-menu

        display: none
        align-items: center
        justify-content: center
        //visibility: hidden
        width: 4rem
        height: 4rem
        fill: rgba($color-white, .7)
        transition: .3s
        position: relative
        z-index: 10

        @include respond(tab-port) 
            //visibility: visible
            display: flex
            align-items: center
            justify-content: center

        &:hover
            fill: $color-white
            cursor: pointer
    
    .lang-switch

        display: flex
        align-items: center
        
        &__link
            &:not(:last-child)
                margin-right: 1rem
            
            border-radius: 50%
            border: .2rem solid transparent
            transition: .3s
            //padding: .2rem
            opacity: .8
            width: 2.5rem
            height: 2.5rem
            display: flex
            align-items: center
            justify-content: center

            &:hover, &--active
                border: .2rem solid $color-text
                opacity: .8
        &__flag
            display: flex
            
            

</style>