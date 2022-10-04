<template>
    <div>
        <section class="product__section product__section--style3 section--padding">
                <div class="container product3__section--container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle">You may also like</h2>
                    </div>
                    <div class="blog__section--inner blog__swiper--activation swiper">
                    
                        <div class="product__section--inner product__swiper--column4__activation swiper">
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
                        <swiper-slide v-for="proList in productList"
                                :key="proList.id" >
                                   
                                        <div class="product__items ">
                                            <div class="product__items--thumbnail">
                                                <a class="product__items--link" :href="'/product-detail/' + proList.id">
                                                    <img class="product__items--img product__primary--img"
                                                        :src="proList.image_path" alt="product-img">
                                                    <img class="product__items--img product__secondary--img"
                                                        :src="proList.image_path" alt="product-img">
                                                </a>
                                                
                                                <div class="product__badge">
                                                    <span class="product__badge--items sale" style="background-color: red;">Hot</span>
                                                </div>
                                            </div>
                                            <div class="product__items--content">
                                                <span class="product__items--content__subtitle">{{proList.category}}</span>
                                                <h3 class="product__items--content__title h4"><a
                                                        :href="proList.image_path">{{proList.name}}</a></h3>
                                                <div class="product__items--price">
                                                    <span class="current__price">{{proList.sale_price}}</span>
                                                    <span class="price__divided"></span>
                                                    <span class="old__price">{{proList.price}}</span>
                                                </div>
                                        
                                                <ul class="product__items--action d-flex">
                                                    <li class="product__items--action__list">
                                                        <a class="product__items--action__btn add__to--cart" :href="'./' + proList.id">
                                                            <svg class="product__items--action__btn--svg"
                                                                xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443"
                                                                viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787"
                                                                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                                            transform="translate(0 -463.248)"
                                                                            fill="currentColor"></path>
                                                                        <path data-name="Path 16788"
                                                                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                                            transform="translate(-1.191 -466.622)"
                                                                            fill="currentColor"></path>
                                                                        <path data-name="Path 16789"
                                                                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                                            transform="translate(-2.875 -466.622)"
                                                                            fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span class="add__to--cart__text"> + Add to cart</span>
                                                        </a>
                                                    </li>
                                                    <li class="product__items--action__list">
                                                        <a class="product__items--action__btn" href="wishlist.html">
                                                            <svg class="product__items--action__btn--svg"
                                                                xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443"
                                                                viewBox="0 0 512 512">
                                                                <path
                                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                                    fill="none" stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="32"></path>
                                                            </svg>
                                                            <span class="visually-hidden">Wishlist</span>
                                                        </a>
                                                    </li>
                                                
                                                </ul>
                                            </div>
                                        </div>
                                
                            </swiper-slide>
        
                    
                        </swiper>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import SwiperCore, {Navigation, Thumbs,Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Thumbs]);
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
    import axios from "axios";
    export default defineComponent ({
        name:'ProductListComponent',
        components: {
        Swiper,
        SwiperSlide,
    },
        data() {
        return {
            thumbsSwiper: null,
            modules: [ Navigation,Autoplay],
            productList: [], 
        }
    },
        mounted() {
         axios.get('products/showList/6')
            .then(res => {
                this.productList = res.data;
            }
            ).catch((err) => console.log(err));
           
    },
    })
</script>