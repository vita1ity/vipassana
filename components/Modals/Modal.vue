<template>
    <transition name="modal-fade" appear>
        <div class="modal-backdrop"
            @click="close">
            <div class="modal"
                @click.stop=""
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
                >
                <header class="modal__header" id="modalTitle">
                    <slot name="header">
                        <h4 class="heading-fifth">{{ title }}</h4>
                        
                        <CloseIcon class="modal__close"
                            @click="close"
                            aria-label="Close modal"
                             />
                    </slot>
                </header>
                <section class="modal__body" id="modalDescription">
                    <slot name="body">
                        I'm the default body!
                    </slot>
                </section>
                <!-- <footer class="modal__footer">
                    <slot name="footer">
                    </slot>
                </footer> -->
            </div>
        </div>
    </transition>
</template>

<script>

import CloseIcon from '~/assets/icons/icon-close.svg?inline'

export default {
    name: 'modal',
    props: ['title'],
    components: {
        CloseIcon
    },

    methods: {
      close() {
        this.$emit('close')
      },
    }
}
</script>

<style lang="sass" scoped>
.modal-backdrop 
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba($color-black, .6)
    backdrop-filter: blur(3px)
    display: flex
    justify-content: center
    align-items: center
    z-index: 200

.modal 
    display: flex
    flex-direction: column
    //border: 1px solid rgba($color-fourth, 0.3);
    width: 50vw
    border-radius: 1rem
    overflow: auto
    max-height: 90vh
    //max-height: 70%;
    //align-items: center
    //justify-content: center
    @include respond(tab-land)
        width: 65vw
    @include respond(tab-port)
        width: 80vw
    @include respond(phone)
        width: 90vw

    &__header 
        background-color: $color-white
        padding: 4rem 4rem 2rem 4rem
        display: flex
        justify-content: space-between

        @include respond(tab-land)
            padding: 3rem 2rem 1rem 2rem     

        @include respond(phone)
            padding: 3rem 3rem 1rem 3rem     

    &__footer 
        //padding: 1.5rem;
        display: flex
        justify-content: flex-end

    &__body 
        background-color: $color-white
        position: relative
        padding: 0 10rem 7rem 10rem
        //padding-right: 1rem

        @include respond(tab-land)
            padding: 0 6rem 6rem 6rem     
        @include respond(phone)
            padding: 0 3rem 3rem 3rem

    &__close 
        opacity: .25
        fill: $color-secondary
        width: 3rem

        &:hover 
            opacity: .5
            cursor: pointer

.modal-fade-enter,
.modal-fade-leave-active 
    opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active 
    transition: opacity .5s ease

</style>