<template>
    <div class="teachers">
        <h3 class="heading-tertiary">{{ $t('teachers.title') }}</h3>
        <div class="separator"></div>
        <div class="teachers__container">
            <div class="teacher" @click="modalOpened = 'oleg'" v-animate-onscroll="'animate-fade-slow-1'">
                <img src="~/static/images/teachers/oleg.jpg" alt="Oleg Vasilev" class="teacher__img">
                <p class="paragraph-small">{{ $t('teacher.oleg') }}</p>
            </div>
            <div class="teacher" @click="modalOpened = 'yana'" v-animate-onscroll="'animate-fade-slow-2'">
                <img src="~/static/images/teachers/yana.jpg" alt="Yana Motytska" class="teacher__img">
                <p class="paragraph-small">{{ $t('teacher.yana') }}</p>
            </div>
            <div class="teacher" @click="modalOpened = 'vika'" v-animate-onscroll="'animate-fade-slow-3'">
                <img src="~/static/images/teachers/vika.jpg" alt="Victoria Feer" class="teacher__img">
                <p class="paragraph-small">{{ $t('teacher.vika') }}</p>
            </div>
        </div>

        <TeacherModals @emitCloseModal="closeModal" :modalOpened="modalOpened" />
        
    </div>
</template>
<script>


import TeacherModals from '@/components/Modals/TeacherModals'

export default {
    components: {
        TeacherModals
    },
    data() {
        return {
            modalOpened: null
        }
    },
    methods: {
        closeModal() {
            this.modalOpened = null
        }
    }
}
</script>
<style lang="sass" scoped>
.teachers
    grid-column: center-start / center-end
    margin-bottom: $margin-btm-container

    @include respond(tab-port)
        flex-direction: column
        align-items: center
        margin-bottom: $margin-btm-container-mobile

    &__container 
        display: flex
        justify-content: space-between
        flex-wrap: wrap

        @include respond(tab-port)
            flex-direction: column
            align-items: center

.teacher
    background-color: $color-white
    box-shadow: $main-shadow
    
    padding: 1.8rem
    
    display: flex
    flex-direction: column
    align-items: center
    border-radius: 1rem

    transition: .5s

    &:not(:last-child)
        @include respond(tab-port)
            margin-bottom: 8rem

    &:hover
        transform: scale(1.05) translateY(-.5rem)
        box-shadow: $main-shadow-hover
        cursor: pointer
    
    &__img
        width: 15vw
        height: 15vw
        object-fit: cover
        margin-bottom: 1.7rem


        @include respond(tab-land)
            width: 20vw
            height: 20vw

        @include respond(tab-port)
            width: 40vw
            height: 40vw

        @include respond(phone-small)
            width: 70vw
            height: 70vw

</style>