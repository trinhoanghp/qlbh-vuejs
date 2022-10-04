<template >
    <div>

    
    <div class="blog__section section--padding color-scheme-2 pt-0" >
        <div class="container-fluid">
            <div class="section__heading text-center mb-40">
                <h2 class="section__heading--maintitle style2">From The Blog</h2>
            </div>
            <div class="blog__section--inner blog__swiper--activation swiper">
                <swiper
                    class="swiper"
                    :modules="modules"
                    :slides-per-view="4"
                    :space-between="30"
                    :grab-cursor="true"
                    :loop="true"
                    :pagination="{ clickable: true }"
                    :navigation="true"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false
                    }"
                >
                <swiper-slide v-for="blog in Blogs"
                        :key="blog.id" >
                        <div class="  blog__items">
                            <div class="blog__thumbnail">
                                <a class="blog__thumbnail--link" href="/blog-detail"><img class="blog__thumbnail--img" :src="blog.image_path" alt="blog-img"></a>
                            </div>
                            <div class="blog__content style2">
                                <span class="blog__content--meta"> {{blog.created_at}}</span>
                                <h3 class="blog__content--title style2"><a href="/blog-detail">{{blog.name}}</a></h3>
                                <a class="blog__content--btn style2 primary__btn" href="#">Read more </a>
                            </div>
                        </div>
                    </swiper-slide>
   
 
             </swiper>
             </div>
            </div>
            </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import {  Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios';
    export default defineComponent( {
        name: 'BlogHomeComponent',
        url: import.meta.url,
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [ Navigation, Autoplay],
            };
        },
        data() {
    return {
        Blogs: [],
      
      
    } 
  },
 async mounted() {
            let res = await  axios.get('blogs')
          this.Blogs = res.data;
        },
       
        
})
</script>
<style>
    .swiper-button-next, .swiper-rtl, .swiper-button-prev {
        color:var(--secondary-color);
    }

</style>
