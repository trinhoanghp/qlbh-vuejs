<template >
    <div>          
        <main class="main__content_wrapper">
            <!-- Start breadcrumb section -->
            <BreadcrumbPage title='Product Details' />
            <!-- End breadcrumb section -->
   
            <!-- Start product details section -->
            <section class="product__details--section section--padding">
                <div class="container">
                    <div class="row row-cols-lg-2 row-cols-md-2">
                        <div class="col">
                            <div class="product__details--media">
                                <div class="product__media--preview  ">
                                    <div class="swiper-wrapper ">        
                                        <swiper class="top-swiper" :style="{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff'
                                            }" :modules="modules" :space-between="10" :loop="true" :thumbs="{ swiper: thumbsSwiper }">
                                             <!-- Thêm ảnh đại diện vào -->
                                             <swiper-slide class="slide" >
                                                <div class="product__media--preview__items">
                                                    <a class="product__media--preview__items--link "
                                                        data-gallery="product-media-preview" ><img
                                                            class="product__media--preview__items--img" :src="products.image_path"
                                                            alt="product-media-img"></a>
                                                    
                                                </div>
                                                </swiper-slide>
                                                <swiper-slide class="slide" v-for="image in product_image" :key="image.id">

                                                    <div class="product__media--preview__items">
                                                        <a class="product__media--preview__items--link glightbox"
                                                            data-gallery="product-media-preview" ><img
                                                                class="product__media--preview__items--img" v-bind:src="image.image_detail_path"
                                                                alt="product-media-img"></a>
                                                    </div>
                                         </swiper-slide>
                                       </swiper>
                                    </div>
                                </div>
                                <div class="product__media--nav ">
                                    <div class="swiper-wrapper">
                                    
                                        <swiper class="thumbs-swiper" :modules="modules" :navigation="true" :space-between="10" :loop="true" :slides-per-view="4"
                                            :watch-slides-progress="true" :prevent-clicks="false" :prevent-clicks-propagation="false"
                                            @swiper="setThumbsSwiper">
                                            <swiper-slide class="slide" >
                                                <div class="product__media--nav__items">
                                                    <img class="product__media--nav__items--img" :src="products.image_path"
                                                        alt="product-nav-img">
                                                </div>
                                         </swiper-slide>
                                            <swiper-slide class="slide" v-for="image in product_image" :key="image.id">
                                                <div class="product__media--nav__items">
                                                    <img class="product__media--nav__items--img" v-bind:src="image.image_detail_path"
                                                        alt="product-nav-img">
                                                </div>
                                      </swiper-slide>
                                      </swiper>
                                    </div>
                                    <div class="swiper__nav--btn swiper-button-next"></div>
                                    <div class="swiper__nav--btn swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product__details--info">
                                <!-- <form action="#"> -->
                                    <h2 class="product__details--info__title mb-15">{{products.name}}</h2>
                                    <div class="product__details--info__price mb-10">
                                        <span class="current__price">${{products.sale_price}}</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">${{products.price}}</span>
                                    </div>

                                    <p v-html="products.content" class="product__details--info__desc mb-15"></p>
                                    <div class="product__variant">
                                        <div class="product__variant--list mb-10">
                                        <fieldset class="variant__input--fieldset">
                                            <legend class="product__variant--title mb-8">Color :</legend>
                                            <span class="m-2" v-for="color in product_color" :key="color.id">
                                             <input  :id="'color'+ color.id" name="color" type="radio" :value="color.value" v-model="choose_color" >
                                            <label :style="{'background-color':color.value}" class="variant__color--value " :for="'color'+ color.id" title=""></label> 
                                              </span>
                                        </fieldset>
                                    </div>
                                        <div class="product__variant--list mb-15">
                                        <fieldset class="variant__input--fieldset">
                                            <legend class="product__variant--title mb-8">Size :</legend>
                                            <span class="m-2" v-for="size in product_size" :key="size.id">
                                            <input :id="'size'+ size.id" name="size"  type="radio" :value="size.value" v-model="choose_size">
                                             <label class="variant__size--value " :for="'size'+ size.id">{{size.value}}</label>
                                            </span>

                                        </fieldset>
                                        
                                    </div>
                                        <div class="product__variant--list quantity d-flex align-items-center mb-20">
                                            <div class="quantity__box">
                                                <button type="button"
                                                    class="quantity__value quickview__value--quantity decrease"
                                                    aria-label="quantity value" value="Decrease Value" v-on:click="quantityAdd--">-</button>
                                                <label>
                                                    <input type="number" class="quantity__number quickview__value--number" v-model="quantityAdd"  />
                                                    </label>
                                                <button type="button"
                                                    class="quantity__value quickview__value--quantity increase"
                                                    aria-label="quantity value" value="Increase Value" v-on:click="quantityAdd++">+</button>
                                            </div>
                                            
                                            <button @click="addtoCart()" class="quickview__cart--btn primary__btn" type="">Add To
                                                Cart</button>
                                            <v-alert class="m-2 text-success">{{alertaddCart}}</v-alert>
                                                
                                        </div>
                                     
                                        <div class="product__details--info__meta">
                                            <div class="product__details--info__meta--list"><strong>Category:</strong>
                                                <span>{{products.category}}</span> </div>
                                            <div class="product__details--info__meta--list">
                                                <strong>Tag:</strong>
                                                <span class="btn btn-secondary  m-2" v-for="tag in product_tag"
                                                    :key="tag.id">
                                                    <a href="#"> {{tag.name}}</a>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                   
                                    <div class="guarantee__safe--checkout">
                                        <h5 class="guarantee__safe--checkout__title">Guaranteed Safe Checkout</h5>
                                        <img class="guarantee__safe--checkout__img" src="/img/other/safe-checkout.png"
                                            alt="Payment Image">
                                    </div>
                                <!-- </form> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>


       
            <!-- Start product section -->
           <product-list-component></product-list-component>/>
            <!-- End product section -->
         
            <!-- Start shipping section -->
            <shipping-component />
            <!-- End shipping section -->
          
               
            
             
            
        </main>

    </div>
</template>
<script >

import { defineComponent } from 'vue'
import SwiperCore, {Navigation, Thumbs,Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Thumbs]);
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import axios from 'axios';
import ShippingComponent from './includes/Shipping.vue';
import ProductListComponent from './includes/ProductList.vue';
import BreadcrumbPage from './includes/BreadcrumbPage.vue';
export default defineComponent({
    name: "ProductDetailComponent",
    url: import.meta.url,
    components: {
        ShippingComponent,
        ProductListComponent,
        BreadcrumbPage,
        Swiper,
        SwiperSlide,
    },   
    data() {
        return {
            profesional:null,
            quantityAdd : 1,
            choose_color:'',
            choose_size:'',
            thumbsSwiper: null,
            modules: [ Navigation,Autoplay],
            products: [],
            product_tag: [],
            product_image: [],     
            product_color: [],     
            product_size: [],     
            alertaddCart:''
        }
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },

        addtoCart(){
            this.alertaddCart=''
            if(this.choose_color !='' && this.choose_size != ''){
            this.$store.dispatch('cart/addProductToCart',{
                product: this.products, 
                quantity: this.quantityAdd, 
                size: this.choose_size, 
                color: this.choose_color, 
            })
            console.log(this.$store.state.cart.cartList)
            this.alertaddCart='Add success'
        }else
             this.alertaddCart='Choose size, color please!!!'
           
         
        }
    },
   async mounted() {
        let product_id = this.$route.params.id;
        let res = await  axios.get('products/' + product_id)
                this.products = res.data['0'];
        let res2 = await  axios.get('products/showTag/' + product_id)
               this.product_tag = res2.data;
        let res3 = await axios.get('products/showImage/' + product_id)
                this.product_image = res3.data;     
        let res4 = await axios.get('products/showAttr/' + product_id)
            this.product_color = res4.data.filter(function (u) {
                return u.name == "color";
        });   
        this.product_size = res4.data.filter(function (u) {
                return u.name == "size";
        });   
                 
    },
    
 
});
</script>
<script>

</script>

