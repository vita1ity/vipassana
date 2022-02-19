<template>
    <div class="retreat-schedule">
      <h3 class="heading-tertiary">{{ $t('retreat.schedule.title') }}</h3>
      <div class="separator"></div>

      <div class="retreat-info margin-bottom-medium" 
          v-for="retreat in retreatsInfo" 
          :key="retreat.id"
          >
        <p class="paragraph-primary--bold">{{ retreat.date }}</p>
        <p class="teachers">
          <span class="paragraph-primary" 
              v-for="(teacher, index) in retreat.teachers" 
              :key="teacher"
              >
              {{teacher}}<!--
              !--><span class="paragraph-primary" 
                  v-if="index != retreat.teachers.length - 1">,
            </span>
          </span>
        </p>
        
        <p class="paragraph-primary" >
          <a class="text-link" target="_blank" :href="retreat.location.url">{{ retreat.location.name }}</a>  
        </p>
        
      </div>

    </div>
</template>
<script>

export default {
    data() {
      return {
        retreatsInfo: [
          {
            id: 1,
            date: this.$t('retreat.schedule.date1'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.vika')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          },
          {
            id: 2,
            date: this.$t('retreat.schedule.date2'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.vika')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          },
          {
            id: 3,
            date: this.$t('retreat.schedule.date3'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.vika')
            ],
            location: {
              name: this.$t('retreat.location3'),
              url: 'https://goo.gl/maps/wQgv8ZDcsmTVWawEA'
            } 
          },
          {
            id: 4,
            date: this.$t('retreat.schedule.date4'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.vika')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          },
          {
            id: 5,
            date: this.$t('retreat.schedule.date5'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.vika')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          },
          {
            id: 6,
            date: this.$t('retreat.schedule.date6'),
            teachers: [
              this.$t('teacher.yana'),
              this.$t('teacher.vika'),
              this.$t('teacher.oleg')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          },
          {
            id: 7,
            date: this.$t('retreat.schedule.date7'),
            teachers: [
              this.$t('teacher.oleg'),
              this.$t('teacher.yana')
            ],
            location: {
              name: this.$t('retreat.location1'),
              url: 'https://goo.gl/maps/z7wHprE4nJp2q3vB6'
            } 
          }
        
        ]
      }
    }
}
</script>
<style lang="sass" scoped>
.retreat-schedule 
  margin: 10rem 6rem 10rem 6rem
  grid-column: col-start 2 / col-end 7
  //width: 75%
  justify-self: center
  
  @include respond(tab-port) 
    grid-column: center-start / center-end
    margin: 10rem 3rem 5rem 3rem

  @include respond(phone) 
    grid-column: full-start / full-end
    margin: 10rem 3rem 5rem 3rem

.retreat-info
  display: flex
  flex-direction: column
  align-items: center
</style>