<template>
    <button
        class="button"
        :class="btnStyle"
        v-bind="$attrs"
        v-on="$listeners"><slot />
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        btnStyle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass">
.button 
    transform: translateY(var(--y, 0))
    
    &--centered-abs
        transform: translate(-50%, var(--y, 0))

    // Action Button styles
    &--action 
        outline: none
        position: relative
        border: none
        background-color: unset
        border-radius: 4rem
        background: linear-gradient(75deg, rgba($color-primary, var(--op1, .85)), rgba($color-secondary, var(--op2, .85)) 40%) var(--x, 0)/ 200%
        
        width: 25rem
        height: 5rem

        text-align: center

        transition: .5s all

        &:focus 
            border: none
            outline: none

        &:hover 
            cursor: pointer
            box-shadow: $main-shadow
            //transform: translateY(-3px)
            --x: 35%
            --op1: 1
            --op2: 1
            --y: -3px

        &:active
            box-shadow: 0 0.5rem 1rem rgba($color-black, .2)
            //transform: translateY(-1px)
            --y: -1px
</style>