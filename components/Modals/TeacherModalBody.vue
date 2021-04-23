<template>
    <div class="teacher-modal">
        <img :src="require(`~/static/images/teachers/${img}`)" alt="Teacher Image" class="teacher-modal__img margin-bottom-medium ">
        <h4 class="heading-fourth--modal margin-bottom-small">{{ name }}</h4>
        <p class="paragraph-primary--modal margin-bottom-big">{{ subtitle }}</p>
        <p class="paragraph-primary margin-bottom-big" v-html="text"></p>
        <p class="paragraph-primary align-center margin-bottom-smaller">{{ $t('teacher.modal.write') }}</p>
        <div class="teacher-modal__social-box">
            <a :href="telegram" class="teacher-modal__link"><TelegramIcon class="teacher-modal__icon"/></a>
            <a :href="viber" class="teacher-modal__link"><ViberIcon class="teacher-modal__icon"/></a>
            <a :href="fb" class="teacher-modal__link"><FacebookIcon class="teacher-modal__icon"/></a>
        </div>
    </div>
</template>
<script>
import FacebookIcon from '~/assets/icons/contacts/facebook.svg?inline'
import TelegramIcon from '~/assets/icons/contacts/telegram.svg?inline'
import ViberIcon from '~/assets/icons/contacts/viber.svg?inline'
export default {
    props: ['img', 'name', 'subtitle', 'text', 'telegram', 'viber', 'fb'],
    components: {
        FacebookIcon, 
        TelegramIcon,
        ViberIcon
    },
    
}
</script>
<style lang="sass" scoped>
.teacher-modal
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    
    &__img
        width: 100%
        height: 30vh
        object-fit: cover
        background-position: bottom

    &__social-box
        display: flex
        justify-content: center
        align-items: center

    &__link
        text-decoration: none
        &:not(:last-child)
            margin-right: 6rem

    &__icon
        transition: .4s all
        fill: $color-secondary
        width: 5rem
        height: 5rem
        
        &:hover
            filter: brightness(130%)
            cursor: pointer

</style>