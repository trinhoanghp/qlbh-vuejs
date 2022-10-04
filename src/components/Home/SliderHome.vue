<template >
    <div>
        <!--  :pagination="{ clickable: true }" --> 
             <div class="" >
                <swiper
                    class="swiper"
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="30"
                    :loop="true"
                   
                    :navigation="true"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false
                    }"
                >
                <swiper-slide v-for="slide in Sliders"
                        :key="slide.id" >
                        <div class="hero__slider--items home2__slider--bg " v-bind:style="{
                              'background-image': 'url(' + slide.image_path + ')',
                            }">
                            <div class="container-fluid">
                                <div class="hero__slider--items__inner hero__slider--bg2__inner">
                                    <div class="slider__content">
                                        <p class="slider__content--desc desc1 text__secondary2 mb-15"> Big Offer 50% off
                                        </p>
                                        <h2 class="slider__content--maintitle h1">{{slide.name}} <br>
                                            Summer Sale</h2>
                                        <p class="slider__content--desc desc2 d-sm-2-none mb-40">Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit, sed do <br> eiusmod tempor incididunt ut
                                            labore et dolore magna</p>
                                        <a class="bg__secondary2 slider__btn primary__btn" href="shop.html">Show
                                            Collection
                                            <svg class="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg"
                                                width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path
                                                    d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                                                    transform="translate(-4 -4)" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
   
 
             </swiper>
            </div>
       
    </div>
</template>
<script>
import { defineComponent } from "vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
export default defineComponent({
    name: "SilderHomeComponent",
    url: import.meta.url,
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay],
        };
    },
    data() {
        return {
            Sliders: [],
        };
    },
  async  mounted() {
      let res = await  axios.get("sliders")
            this.Sliders = res.data.filter(function (u) {
                return u.type == "slider";
 
        });
    },
});
</script>
<style>
    .swiper-button-next, .swiper-rtl, .swiper-button-prev {
        color:var(--secondary-color);
    }

</style>
