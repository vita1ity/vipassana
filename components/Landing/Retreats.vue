<template>
    <div class="retreats">
        <!-- CAROUSEL -->

        <vueper-slides :parallax="true" 
                        :parallax-fixed-content="true" 
                        :touchable="true" 
                        class="no-shadow" 
                        :transition-speed="700">
     
            <template v-slot:arrow-left>
                <ArrowLeft class=""/>
            </template>

            <template v-slot:arrow-right>
                <ArrowRight class=""/>
            </template>
            <vueper-slide class="slide-outer" 
                        v-for="(slide, i) in slides" :key="i"
                        :image="slide.image"
                        >
                <template v-slot:content>
                    <RetreatSlide :img="slide.img" 
                        :title="slide.title"
                        :teacher1="slide.teacher1"
                        :teacher2="slide.teacher2"
                        :price4="slide.price4"
                        :price3="slide.price3"
                        :price2="slide.price2"
                        :comment="slide.comment"
                        />        
                </template>
            </vueper-slide>
        </vueper-slides>
        
    </div>    
</template>
<script>

import ArrowLeft from '~/assets/icons/arrow-left.svg?inline'
import ArrowRight from '~/assets/icons/arrow-right.svg?inline'
import RetreatSlide from '@/components/Slides/RetreatSlide'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        ArrowLeft,
        ArrowRight,
        RetreatSlide,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            slides: [
            
                // {
                //     title: this.$t('retreat1.title'),
                //     image: require('@/static/images/retreat/retreat6.jpg'),
                //     teacher1: this.$t('teacher.oleg'),
                //     teacher2: this.$t('teacher.yana'),
                //     price4: "6000",
                //     price3: "6000",
                //     price2: "6500",
                //     comment: ""
                //     //comment: this.$t('retreat2.comment')
                // },
                {
                    title: this.$t('retreat2.title'),
                    image: require('@/static/images/retreat/retreat7.jpg'),
                    teacher1: this.$t('teacher.oleg'),
                    teacher2: this.$t('teacher.yulya'),
                    price4: "10000",
                    price3: "10000",
                    price2: "10500",
                    comment: ""
                    //comment: this.$t('retreat2.comment')
                },
                {
                    title: this.$t('retreat3.title'),
                    image: require('@/static/images/retreat/april2022.jpg'),
                    teacher1: this.$t('teacher.oleg'),
                    teacher2: this.$t('teacher.vika'),
                    price4: "6000",
                    price3: "6000",
                    price2: "6500",
                    comment: ""
                    //comment: this.$t('retreat2.comment')
                },
                   {
                    title: this.$t('retreat4.title'),
                    image: require('@/static/images/retreat/may-2022.jpg'),
                    teacher1: this.$t('teacher.oleg'),
                    teacher2: this.$t('teacher.vika'),
                    price4: "10000",
                    price3: "10000",
                    price2: "10500",
                    comment: ""
                    //comment: this.$t('retreat2.comment')
                },
                
            ]
        }
    }
}
</script>
<style lang="sass" scoped>
.retreats 
    grid-column: full-start / full-end
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%)
    margin: 5rem 0

    //for testing
    //height: 50rem
    width: 100%
    //position: relative

    @include respond(tab-port)
        clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%)

    

</style>