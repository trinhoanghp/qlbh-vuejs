<template>
  <div class="">
    
    <main class="main__content_wrapper" >

    <!-- Start slider section -->
        <silder-home-component/>
    <!-- End slider section -->

  
    <!-- Start product section -->
    <section class="product__section section--padding color-scheme-2 pt-0">
        <div class="container-fluid">
            <div class="section__heading text-center mb-35">
                <h2 class="section__heading--maintitle style2">Summer collection</h2>
            </div>
            <div class="product__section--inner">
           <product-home-component></product-home-component>
            </div>
        </div>
    </section>
    <!-- End product section -->
    
    <!-- Start banner section -->
    <section class="banner__section banner__discount section--padding color-scheme-2 pt-0">
        <div class="container-fluid">
            <div class="banner__discount--inner position__relative" v-for="slide in Sliders" :key="slide.id">
                <div v-if="slide.type == 'banner'"  >
                    <div class="banner__items  position__relative">
                        <a class="banner__items--thumbnail " href="/shop"><img class="banner__items--thumbnail__img" :src="slide.image_path" alt="banner-img"></a>
                    </div>
                    <div class="banner__discount--content text-center">
                        <span class="banner__discount--content__subtitle">{{slide.name}}</span>
                        <h2 class="banner__discount--content__title h3">{{slide.description}}</h2>
                        <a class="banner__discount--content__link" href="/shop">SHOP NOW</a>
                    </div>
              </div>
            </div>
        </div>
    </section>
    <!-- End banner section -->

    <!-- Start grid product section -->
    <section class="product__section section--padding color-scheme-2 pt-0">
        <div class="container-fluid">
            <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
                <div class="col mb-30">
                    <div class="banner__items position__relative"  v-for="slide in Sliders" :key="slide.id">
                        <a v-if="slide.type =='newproduct'"  class="banner__items--thumbnail width-100 " href="/shop"><img class="banner__items--thumbnail__img width-100" :src="slide.image_path"  alt="banner-img">
                            <div class="banner__items--content__style3">
                                <span class="banner__items--content__style3--subtitle text-white">{{slide.name}}</span>
                                <h2 class="banner__items--content__style3--title text-white h3"> {{slide.description}}</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col mb-30">
                    <div class="product__grid--wrapper">
                        <div class="product__grid--heading mb-30">
                            <h2 class="product__grid--heading__maintitle position__relative">New products</h2>
                        </div>
                        <div class="product__grid--inner">
                            <div class="product__items product__items--grid d-flex align-items-center" v-for="newPro in newProducts" :key="newPro.id">
                                <div class="product__items--grid__thumbnail position__relative" >
                            
                                    <a class="product__items--link" :href="'product-detail/' + newPro.id">
                                        <img class="product__items--img product__primary--img" :src="newPro.image_path" alt="product-img">
                                        <img class="product__items--img product__secondary--img" :src="newPro.image_path" alt="product-img">
                                    </a>
                                </div>
                                <div class="product__items--grid__content">
                                    <h3 class="product__items--content__title h4"><a :href="'product-detail/' + newPro.id">{{newPro.name}}</a></h3>
                                    <div class="product__items--price">
                                        <span class="current__price">${{newPro.sale_price}}</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">${{newPro.price}}</span>
                                    </div>
                                    <!-- <ul class="">
                                        <span class="product__items--content__subtitle">{{ newPro.category}}</span>   
                                    </ul> -->
                                    <ul class="rating product__rating d-flex">
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div class="col mb-30">
                    <div class="banner__items position__relative" v-for="slide in Sliders" :key="slide.id">
                        <a v-if="slide.type =='bestseller'" class="banner__items--thumbnail md-width-100" href="/shop"><img class="banner__items--thumbnail__img md-width-100" :src="slide.image_path" alt="banner-img">
                            <div class="banner__items--content__style3">
                                <span class="banner__items--content__style3--subtitle text-white">{{slide.name}}</span>
                                <h2 class="banner__items--content__style3--title text-white h3"> {{slide.description}}</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col mb-30">
                    <div class="product__grid--wrapper">
                        <div class="product__grid--heading mb-30">
                            <h2 class="product__grid--heading__maintitle position__relative">Bestsellers</h2>
                        </div>
                        <div class="product__grid--inner">
                            <div class="product__items product__items--grid d-flex align-items-center" v-for="bestSeller in bestSellers" :key="bestSeller.key">
                                <div class="product__items--grid__thumbnail position__relative">
                                    <a class="product__items--link" :href="'product-detail/' + bestSeller.id">
                                        <img class="product__items--img product__primary--img" :src="bestSeller.image_path" alt="product-img">
                                        <img class="product__items--img product__secondary--img" :src="bestSeller.image_path" alt="product-img">
                                    </a>
                                </div>
                                <div class="product__items--grid__content">
                                    <h3 class="product__items--content__title h4"><a :href="'product-detail/' + bestSeller.id">Women White T-Shirt</a></h3>
                                    <div class="product__items--price">
                                        <span class="current__price">${{bestSeller.sale_price}}</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">${{bestSeller.price}}</span>
                                    </div>
                                    <ul class="rating product__rating d-flex">
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li class="rating__list">
                                            <span class="rating__list--icon">
                                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End grid product section -->

    <!-- Start contact section -->
    <section class="contact__section section--padding color-scheme-2">
        <div class="container-fluid">
            <div class="section__heading text-center mb-50">
                <h2 class="section__heading--maintitle style2">Get in touch</h2>
            </div>
            <div class="contact__section--inner">
                <div class="row">
                    <div class="col-lg-5 col-md-5">
                        <div class="home__contact--info">
                            <div class="home__contact--info__items d-flex">
                                <div class="home__contact--info__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                        <path id="ic_account_balance_24px" d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" fill="currentColor"></path>
                                    </svg> 
                                </div>
                                <div class="contact__info--content">
                                    <h3 class="contact__info--content__title mb-5">Address</h3>
                                    <div class="" v-for="st in Settings" :key="st.id">
                                      <p class="contact__info--content__desc" v-if="st.key == 'address_info'">{{st.value}}</p>
                                     </div>
                                </div>
                            </div>
                            <div class="home__contact--info__items d-flex">
                                <div class="home__contact--info__icon" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.568" height="31.128" viewBox="0 0 31.568 31.128">
                                        <path id="ic_phone_forwarded_24px" d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div class="contact__info--content"  >
                                    <h3 class="contact__info--content__title mb-5">Phone</h3>
                                    <div class="" v-for="st in Settings" :key="st.id">
                                      <p class="contact__info--content__desc" v-if="st.key == 'phone_info'"><a href="tel:+01234-567890">{{st.value}}</a></p>
                                     </div>
                                </div>
                            </div>
                            <div class="home__contact--info__items d-flex">
                                <div class="home__contact--info__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                        <path id="ic_email_24px" d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" fill="currentColor"></path>
                                    </svg>  
                                </div>
                                <div class="contact__info--content">
                                    <h3 class="contact__info--content__title mb-5">E-mail</h3>
                                    <div class="" v-for="st in Settings" :key="st.id">
                                      <p class="contact__info--content__desc" v-if="st.key == 'email_info'"><a href="mailto:info@example.com">{{st.value}}</a></p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                        <div class="home__contact--map">
                            <div class="" v-for="st in Settings" :key="st.id">
                                      <div  class="contact__info--content__desc" v-if="st.key == 'map_info'" >
                                        <div v-html="st.value"></div>
                                     </div>
                                     </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End contact section -->

    <!-- Start blog section -->
    <blog-home-component/>
        <!-- End blog section -->

</main>

  </div>
</template>

<script>
import axios from 'axios';
import SilderHomeComponent from './Home/SliderHome';
import BlogHomeComponent from './Home/BlogHome';
import ProductHomeComponent from './Home/ProductHome';

  export default {
  name: 'HomeComponent',
  components: {
    SilderHomeComponent,
    BlogHomeComponent,
    ProductHomeComponent,

       
       
      },

  data() {
    return {
        Sliders: [],
        newProducts: [],
        bestSellers: [],
        Settings: [],
    } 
  },
  async mounted() {
   let res = await axios.get('sliders')    // banner newproduct bestseller
    this.Sliders = res.data;
    let res2 = await axios.get('products/newProduct/3') 
    this.newProducts = res2.data;
    let res4 = await axios.get('products/bestSeller/3') 
    this.bestSellers = res4.data;
    let res3 = await axios.get('settings')
    this.Settings = res3.data;
  }  
}
</script>

<style >
    .product__badge--new {
    height: 1.5rem;
    line-height: 2rem;
    padding: 0 7px;
    font-weight: 300;
    background:green;
    color: var(--white-color);
    border-radius: 6px 0 6px;
    font-size: 1rem;
}

</style>
