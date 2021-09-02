<template>
    <!-- <div class="contact-background"> -->
        <div class="contact">
            <h3 class="heading-tertiary">{{ $t('contact.title') }}</h3>
            <div class="separator"></div>
            <p class="paragraph-primary--italic margin-bottom-medium" v-html="$t(
                'contact.infoText', {
                    'email': '<a class=\'text-link\' href=\'mailto:' + $t('email') + '\'>' + $t('email') + '</a>'
                })">
        </p>
            <form @submit.prevent="sendEmail" class="form" >
                <div class="form__fields">
                    <div class="form__group form__group--name">
                        <input type="text" 
                                name="name" 
                                id="name" 
                                v-model="name" 
                                class="form__input paragraph-primary" 
                                :placeholder="$t('contact.name')" 
                                required>
                    </div>
                    <div class="form__group form__group--phone">
                        <input type="text" 
                                name="phone" 
                                id="phone" 
                                v-model="phone" 
                                @input="acceptNumber" 
                                class="form__input paragraph-primary" 
                                :placeholder="$t('contact.phone')" 
                                required>
                    </div>
                    <div class="form__group form__group--gender">
                        <select name="gender" id="gender" v-model="gender" class="form__input form__input--select paragraph-primary" required>
                            <option value="" disabled selected>{{$t('contact.gender')}}</option>
                            <option :value="$t('contact.gender.male')">{{ $t('contact.gender.male')}}</option>
                            <option :value="$t('contact.gender.female')">{{ $t('contact.gender.female')}}</option>
                        </select>
                        <ArrowDown class="form__select-icon"/>
                    </div>
                    <div class="form__group form__group--retreat">
                        <select name="retreat" id="retreat" v-model="retreat" class="form__input form__input--select paragraph-primary" required>
                            <option value="" disabled selected>{{$t('contact.retreat')}}</option>
                            <!-- <option :value="$t('retreat1.title')">{{ $t('retreat1.title')}}</option> -->
                            <option :value="$t('retreat2.title')">{{ $t('retreat2.title')}}</option>
                            <option :value="$t('retreat3.title')">{{ $t('retreat3.title')}}</option>
                            <option :value="$t('retreat4.title')">{{ $t('retreat4.title')}}</option>
                        </select>
                        <ArrowDown class="form__select-icon"/>
                    </div>
                    <div class="form__group form__group--info">
                        <select name="infoSource" id="infoSource" v-model="infoSource" class="form__input form__input--select paragraph-primary">
                            <option value="" disabled selected>{{$t('contact.infoSource')}}</option>
                            <option :value="$t('contact.infoSource.oum')">{{ $t('contact.infoSource.oum')}}</option>
                            <option :value="$t('contact.infoSource.email')">{{ $t('contact.infoSource.email')}}</option>
                            <option :value="$t('contact.infoSource.web')">{{ $t('contact.infoSource.web')}}</option>
                            <option :value="$t('contact.infoSource.advert')">{{ $t('contact.infoSource.advert')}}</option>
                            <option :value="$t('contact.infoSource.social')">{{ $t('contact.infoSource.social')}}</option>
                            <option :value="$t('contact.infoSource.friends')">{{ $t('contact.infoSource.friends')}}</option>
                            <option :value="$t('contact.infoSource.other')">{{ $t('contact.infoSource.other')}}</option>
                        </select>
                        <ArrowDown class="form__select-icon"/>
                    </div>
               
                    <div class="form__group form__group--email">
                        <input type="email" name="email" id="email" v-model="email" class="form__input paragraph-primary" :placeholder="$t('contact.email')">
                    </div>
                    <div class="form__group form__group--city">
                        <input type="text" name="city" id="city" v-model="city" class="form__input paragraph-primary" :placeholder="$t('contact.city')">
                    </div>
                    <div class="form__group form__group--comment">
                        <textarea type="text" name="comment" id="comment" v-model="comment" class="form__input form__input--textarea paragraph-primary" :placeholder="$t('contact.comment')"></textarea>
                    </div>
                    <div class="form__group form__group--agreement">
                        <input type="checkbox" name="agreement" id="agreement" class="form__input form__input--checkbox" checked>
                        <label for="" class="paragraph-primary">{{ $t('contact.agreement') }}</label>
                    </div>
                </div>
                
                <div class="form__btn">
                    <AppButton type="submit"
                            btn-style="button--action"
                            >
                        <h4 class="paragraph-fourth">{{ $t('contact.sendRequest') }}</h4>
                    </AppButton>
                </div>
                <transition name="fade">
                    <p v-if="showSentMsg" class="paragraph-primary--success form__info-msg">{{ $t('contact.success') }}</p>
                    <p v-if="showErrorMsg" class="paragraph-primary--error form__info-msg">{{ $t('contact.error') }}</p>
                </transition>
                <p class="paragraph-small--italic">{{ $t('contact.prepayment') }}</p>
            </form>
        </div>
    <!-- </div> -->
    
</template>
<script>

import AppButton from '@/components/Controls/AppButton'
import ArrowDown from '~/assets/icons/arrow-down.svg?inline'

import emailjs from 'emailjs-com'

const MAIL_SERVICE = "vipassana_mail"
const MAIL_TEMPLATE = "vipassana_template"
const MAIL_USER_ID = "user_ZRcCFgw4iVBD96pqwLyAJ"

export default {
    components: {
        AppButton,
        ArrowDown
    },
    data() {
        return {
            name: '',
            phone: '',
            gender: '',
            retreat: '',
            infoSource: '',
            email: '',
            city: '',
            comment: '',
            showSentMsg: false,
            showErrorMsg: false,
        }

    },
    methods: {
        acceptNumber() {
            let x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        },
        sendEmail(e) {
            console.log('sendRequest')
             
            try {
                emailjs.sendForm(MAIL_SERVICE, MAIL_TEMPLATE, e.target, MAIL_USER_ID, {
                    name: this.name,
                    phone: this.phone,
                    gender: this.gender,
                    retreat: this.retreat,
                    infoSource: this.infoSource,
                    email: this.email,
                    city: this.city,
                    comment: this.comment
                })

            } catch(error) {
                console.log({error})
                this.showErrorMsg = true
                setTimeout(() => {
                    this.showErrorMsg = false
                }, 3000)
            }
            this.showSentMsg = true
            setTimeout(() => {
                this.showSentMsg = false
                this.name = '',
                this.phone = '',
                this.gender = '',
                this.retreat = '',
                this.infoSource = '',
                this.email = '',
                this.city = '',
                this.comment = ''
            }, 3000)
        }

    }
}
</script>
<style lang="sass" scoped>
.contact
    grid-column: center-start / center-end
    margin-top: 10rem   
    margin-bottom: 28rem

    @include respond(tab-land)
        margin-bottom: 20rem
    @include respond(tab-port)
        margin-bottom: 18rem
    @include respond(phone)
        grid-column: full-start / full-end
        margin: 5rem 3rem 16rem 3rem

.form
    &__fields
        display: grid
        grid-template-columns: repeat(2, minmax(0, 1fr))
        grid-template-rows: repeat(6, min-content)
        row-gap: 2.5rem
        column-gap: 4rem
        position: relative

    &__group
        position: relative

        &--name
            grid-column: 1 / 2
            grid-row: 1 / 2

        &--phone
            grid-column: 1 / 2
            grid-row: 2 / 3

        &--gender
            grid-column: 1 / 2
            grid-row: 3 / 4

        &--retreat
            grid-column: 1 / 2
            grid-row: 4 / 5

        &--info
            grid-column: 1 / 2
            grid-row: 5 / 6

        &--email
            grid-column: 2 / 3
            grid-row: 1 / 2

        &--city
            grid-column: 2 / 3
            grid-row: 2 / 3

        &--comment
            grid-column: 2 / 3
            grid-row: 3 / span 3 
        
        &--agreement
            grid-column: 1 / span 2
            grid-row: 6 / 7

            display: flex
            justify-content: flex-start

        @include respond(phone)
            grid-column: 1 / span 2
            grid-row: auto

    &__input, 
        width: 100%
        height: 100%

        background-color: $color-white
        border: 1px solid $color-border
        border-radius: .5rem
        padding: 1.2rem 3rem
        transition: .4s
        backface-visibility: hidden
        outline: none

        &:hover
            outline: none
            border-color: $color-secondary

        &:focus
            
            //outline: 1px solid $color-secondary
            //outline-style: auto
            border-color: $color-secondary
            box-shadow: 0 0 1rem rgba($color-secondary, .5)

        &:focus:invalid
            color: #2c3e50
            border-color: rgba($color-error, .5)
            box-shadow: 0 0 1rem rgba($color-error, .5)

        &::placeholder 
            
            color: $color-text-dark
            font-family: Arial, sans-serif
            font-size: 1.8rem
            letter-spacing: 1px
            text-align: justify
            transform: translate3d(0, 1px, 0)

        &--select 
            appearance: none
            &:hover
                cursor: pointer

        &--textarea
            resize: none

        &--checkbox
            width: 2rem
            margin-right: 2.5rem
    &__select-icon
        position: absolute
        top: 50%
        right: 2rem 
        transform: translateY(-50%)
        height: 1rem
        width: auto
        fill: $color-text-dark

    &__btn
        display: flex
        justify-content: center
        margin: 4rem 0 2rem 0

    &__info-msg
        text-align: center
        margin-bottom: 2rem
        //transition: all .5s

.fade-enter-active, .fade-leave-active
    transition: opacity .5s
.fade-enter, .fade-leave-to 
    opacity: 0
        
</style>