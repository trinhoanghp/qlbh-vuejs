<template>
    <div>
        <main class="main__content_wrapper">
        
        <!-- Start breadcrumb section -->
        <BreadcrumbPage title='Blog Detail'/>
        <!-- End breadcrumb section -->

        <!-- Start blog section -->
        <section class="blog__details--section section--padding">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-9 col-xl-8 col-lg-8">
                        <div class="blog__details--wrapper">
                            <div class="entry__blog">
                                <div class="blog__post--header mb-30">
                                    <h2 class="post__header--title mb-15">{{Blogs.name}}</h2>
                                    <p class="blog__post--meta">Posted: {{Blogs.created_at}}</p>                                     
                                </div>
                                
                                <div v-html="Blogs.content"  class="blog__details--content">
                                 
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-4">
                        <div class="blog__sidebar--widget left widget__area">
                        
                            <div class="single__widget widget__bg">
                               <h2 class="widget__title h3">New Products</h2>
                                <div class="product__grid--inner">
                                    <div class="
                product__items product__items--grid
                d-flex
                align-items-center
              " v-for="newPro in newProducts" :key="newPro.id">
              <div class="product__items--grid__thumbnail position__relative">
                <a class="product__items--link" :href="'product-detail/' + newPro.id">
                  <img class="product__items--img product__primary--img" :src="newPro.image_path" alt="product-img" />
                  <img class="product__items--img product__secondary--img" :src="newPro.image_path" alt="product-img" />
                </a>
              </div>
              <div class="product__items--grid__content">
                <h3 class="product__items--content__title h4">
                  <a :href="'product-detail/' + newPro.id">{{newPro.name}}</a>
                </h3>
                <div class="product__items--price">
                  <span class="current__price">${{newPro.sale_price}}</span>
                  <span class="price__divided"></span>
                  <span class="old__price">${{newPro.price}}</span>
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
            </div>
        </section>
        <!-- End blog section -->

        <!-- Start shipping section -->
        <shipping-component/>
        <!-- End shipping section -->
    </main> 
    </div>
</template>

<script>
    import axios from 'axios';
    import ShippingComponent from './includes/Shipping.vue';
    import BreadcrumbPage from './includes/BreadcrumbPage.vue';
    export default {
      name: "BlogdetailComponent",
      components: {
        ShippingComponent,
        BreadcrumbPage
       
      },
      data(){
        return{
            Blogs:[],
            newProducts:[],
        }
      },
      async mounted() {
         let blog_id = this.$route.params.id;
            let res = await  axios.get('blogs/' + blog_id)
            this.Blogs = res.data[0];
        let res2 = await   axios.get('products/newProduct/5') 
        this.newProducts = res2.data;
        },
    
    };
</script>
    

