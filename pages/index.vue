<template>
 <div class="container">

  <HeroArea />

  <div class="grid">
    
    <About id="about"/>

    <Retreats id="events"/>

    <div class="grid--gradient">
      <Techniques id="program"/>

      <Results/>

      <Schedule />
    </div>
  
     <Reviews id="reviews"/>
    
    <Gallery id="gallery"/>
  
    
      
    <Teachers id="teachers"/>
    
    <div class="background">
      <Contact id="application"/>
    </div>
   
  </div>

 </div>

</template>

<script>

import HeroArea from "@/components/Landing/HeroArea"
import About from "@/components/Landing/About"
import Retreats from "@/components/Landing/Retreats"
import Techniques from "@/components/Landing/Techniques"
import Schedule from "@/components/Landing/Schedule"
import Reviews from "@/components/Landing/Reviews"
import Gallery from "@/components/Landing/Gallery"
import Results from "@/components/Landing/Results"
import Teachers from "@/components/Landing/Teachers"
import Contact from "@/components/Landing/Contact"

export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  components: { 
    HeroArea,
    About,
    Retreats,
    Techniques,
    Schedule,
    Reviews,
    Gallery,
    Results,
    Teachers,
    Contact
  },
  
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()

  //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
  //   })
  // }
}
</script>

<style lang="sass">

.container 
  margin: 0 auto
  position: relative

.grid
  display: grid
  //grid-template-columns: [full-start] minmax(4rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(4rem, 1fr) [full-end]
  grid-template-columns: $main-grid
  grid-template-rows: repeat(4, min-content)

  &--gradient
    display: grid
    //grid-template-columns: [full-start] minmax(4rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(4rem, 1fr) [full-end]
    grid-template-columns: $main-grid
    grid-template-rows: repeat(2, min-content)

    background: linear-gradient(to bottom, $color-white, $color-light-gradient)
    grid-column: full-start / full-end

    padding-bottom: 20rem
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%)

    @include respond(tab-port)
      padding-bottom: 10rem
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%)

.background
  display: grid
  grid-template-columns: $main-grid
  grid-column: full-start / full-end
  background-color: $color-light-gradient

.fade-enter-active 
    animation: fadeIn 1s ease-out 1.25s


.fade-leave-active 
  animation: fadeIn 1s ease-out 1.25s reverse

</style>
