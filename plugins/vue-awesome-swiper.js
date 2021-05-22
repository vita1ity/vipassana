import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// // import style (<= Swiper 5.x)
 import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, { 
   
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
    
 })