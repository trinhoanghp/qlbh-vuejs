<template>
    <div>
        <main class="main__content_wrapper">
        
        <!-- Start breadcrumb section -->
        <BreadcrumbPage title='Blog'/>
        <!-- End breadcrumb section -->

        <!-- Start blog section -->
        <section class="blog__section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <h2 class="section__heading--maintitle">From The Blog</h2>
                </div>
                <div class="blog__section--inner">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-sm-u-2 row-cols-1 mb--n30">
                        <div class="col mb-30" v-for="blog in Blogs" :key="blog.id">
                            <div class="blog__items">
                                <div class="blog__thumbnail">
                                    <a class="blog__thumbnail--link" :href="'/blog-detail/' + blog.id"><img class="blog__thumbnail--img" :src="blog.image_path" alt="blog-img"></a>
                                </div>
                                <div class="blog__content">
                                    <span class="blog__content--meta">{{blog.created_at}}</span>
                                    <h3 class="blog__content--title"><a :href="'/blog-detail/' + blog.id">{{blog.name}}  </a></h3>
                                    <a class="blog__content--btn primary__btn" :href="'/blog-detail/' + blog.id">Read more </a>
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
      name: "BlogComponent",
      components: {
        ShippingComponent,
        BreadcrumbPage
       
      },
      data(){
        return{
            Blogs:[]
        }
      },
      async mounted() {
            let res = await  axios.get('blogs')
            this.Blogs = res.data;
        },
       
    
    };
</script>
    

