<template>
    <div class="schedule">
        <h3 class="heading-tertiary">{{ $t('schedule.title') }}</h3>
        <div class="separator"></div>
        <div class="timeline">
            <div class="timeline__line" v-for="act in activities" :key="act.index">
                <div class="timeline__circle" :class="{ 'timeline__circle--primary': act.index % 2 != 0,
                             'timeline__circle--secondary': act.index % 2 === 0}"></div>
                <span class="timeline__time paragraph-primary--no-wrap">{{ act.time }}</span> 

                <span class="paragraph-primary--left timeline__activity" v-html="$t(
                    'schedule.activity' + act.index, {
                    'meditation': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/meditatsiya/meditatsiya/\'>' + $t('meditation') + '</a>',
                    'hatha': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/asany/\'>' + $t('hatha') + '</a>',
                    'meditation.concentration': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/osnovy-yogi/kontsentratsiya-vnimaniya/\'>' + $t('meditation.concentration') + '</a>',
                    'pranayam': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/pranayama/dykhanie-kontrol-nad-energiey-i-put-k-bessmertiyu/\'>' + $t('pranayam') + '</a>',
                    'om': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/mantry/mantra-om/\'>' + $t('om') + '</a>'
                    })">
                </span>
                <!-- <span class="timeline__activity paragraph-primary">{{ $t('schedule.activity' + act.index) }}</span> -->
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activities: [
                {
                    index: 1,
                    time: "05:30",
                },
                {
                    index: 2,
                    time: "06:00 - 08:00",
                },
                {
                    index: 3,
                    time: "08:00 - 10:00",
                },
                {
                    index: 4,
                    time: "10:00 - 11:00",
                },
                {
                    index: 5,
                    time: "11:00 - 12:30",
                },
                {
                    index: 6,
                    time: "12:30 - 14:00",
                },
                {
                    index: 7,
                    time: "14:00 - 15:00",
                },
                {
                    index: 8,
                    time: "15:00 - 16:00",
                },
                {
                    index: 9,
                    time: "16:00 - 17:00",
                },
                {
                    index: 10,
                    time: "17:00 - 18:00",
                },
                {
                    index: 11,
                    time: "18:00 - 19:00",
                },
                {
                    index: 12,
                    time: "19:00 - 20:00",
                },
                {
                    index: 13,
                    time: "20:00 - 20:30",
                },
                {
                    index: 14,
                    time: "20:30 - 21:00",
                },
                {
                    index: 15,
                    time: "21:00 - 05:30",
                },


            ]
        }
    }
}
</script>
<style lang="sass" scoped>
.schedule
  //background-color: orangered

  grid-column: col-start 3 / col-end 6
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  padding: 0 3rem

  @include respond(tab-port)
    grid-column: full-start / full-end

.timeline
    position: relative
    &::before
        content: ''
        position: absolute
        width: .4rem
        background-color: rgba($color-primary, .8)
        top: 0
        bottom: 0
        left: 1rem
        z-index: 1

        //margin-left: -3px;
        @include respond(phone-small)
            left: .6rem

    &__line
        display: flex
        justify-content: flex-start
        align-items: center

        &:not(:last-child)
            margin-bottom: 2.5rem

    &__circle
        //position: absolute
        background-color: $color-white
        width: 2.4rem
        height: 2.4rem
        flex: 0 0 auto
        border-radius: 50%
        z-index: 10

        &--primary
            border: .4rem solid rgba($color-primary, .8)
        
        &--secondary
            border: .4rem solid rgba($color-secondary, .8)

        @include respond(phone-small)
            width: 1.8rem
            height: 1.8rem
        
    &__time
        margin: 0 2rem 0 4rem
        @include respond(phone-small)
            margin: 0 1.5rem 0 1.5rem
    &__activity  
</style>