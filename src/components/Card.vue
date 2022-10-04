<template>
    <div>
        <main class="main__content_wrapper">
        
        <!-- Start breadcrumb section -->
        <breadcrumb-page :title="'Shopping Card'"/>
        <!-- End breadcrumb section -->

        <!-- cart section start -->
        <section class="cart__section section--padding">
            <div class="container-fluid">
                <div class="cart__section--inner">
                    <form action="#" > 
                        <h2 class="cart__title mb-40">Shopping Cart</h2>
                        <div class="row justify-content-center">
                            <div class="col-lg-8 ">
                                <div class="cart__table">
                                    <table class="cart__table--inner">
                                        <thead class="cart__table--header">
                                            <tr class="cart__table--header__items">
                                                <th class="cart__table--header__list">Product</th>
                                                <th class="cart__table--header__list">Price</th>
                                                <th class="cart__table--header__list">Quantity</th>
                                                <th class="cart__table--header__list">Total</th>
                                            </tr>
                                        </thead>
                                      
                                        <tbody class="" v-if="cartItems.length == 0"> 
                                                <h3 class="m-5 text-center">Your cart is empty</h3> 
                                        </tbody>
                                        <tbody class="cart__table--body">
                                            <tr class="cart__table--body__items" v-for="item in cartItems" :key="item.id">
                                                <td class="cart__table--body__list">
                                                    <div class="cart__product d-flex align-items-center">
                                                        <button @click="removeItem(item)" class="cart__remove--btn" aria-label="search button" type="button">
                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                        </button>
                                                        <div class="cart__thumbnail">
                                                            <a :href="'product-detail/' + item.product.id"><img class="border-radius-5" :src="item.product.image_path" alt="cart-product"></a>
                                                        </div>
                                                        <div class="cart__content">
                                                            <h4 class="cart__content--title"><a :href="'product-detail/' + item.product.id">{{item.product.name}}</a></h4>
                                                            <span class="cart__content--variant">Color: 
                                                                    <svg :style="{'fill':item.color}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                                                    <circle cx="8" cy="8" r="8"/>
                                                                    </svg>
                                                            </span>
                                                            <span class="cart__content--variant">Size: {{item.size}}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="cart__table--body__list">
                                                    <span class="cart__price"> ${{item.product.sale_price}}</span>
                                                </td>

                                                <td class="cart__table--body__list">
                                                    <form action="" method="get">
                                                    <div class="quantity__box">
                                                        <button v-on:click="item.quantity--"  @click="updateItem(item)" type="button" class="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                        <label>
                                                            <input type="number" class="quantity__number quickview__value--number" @change="updateItem(item)" v-model="item.quantity" >
                                                        </label>
                                                        <button v-on:click="item.quantity++" @click="updateItem(item)" type="button" class="quantity__value quickview__value--quantity increase"     aria-label="quantity value" value="Increase Value">+</button>
                                                     
                                                    </div>
                                                </form>
                                                <span style="color:red">{{ this.error['quantity']}}</span>
                                                </td>
                                                <td class="cart__table--body__list">
                                                    <span class="cart__price end">${{item.product.sale_price * item.quantity }}</span>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td> <strong>GRAND TOTAL:</strong></td>
                                                <td > <strong> $ {{getToTal}}</strong> </td>
                                            </tr>
                                        </tfoot>
                                   
                                    </table> 
                                    <div class="continue__shopping d-flex justify-content-between">
                                        <router-link class="cart__summary--footer__btn primary__btn checkout" to="/shop">Continue shopping</router-link>
                                        <button @click="clearCart()" class="cart__summary--footer__btn primary__btn checkout" href="#">Clear Cart</button>
                                        <router-link class="cart__summary--footer__btn primary__btn checkout" to="/checkout">Check Out</router-link>
               
                                       
                                    </div>
                                </div>
                            </div>
                         
                        </div> 
                    </form> 
                </div>
            </div>     
        </section>
        <!-- cart section end -->

        <!-- Start product section -->
        <product-list-component/>
        <!-- End product section -->

        <!-- Start shipping section -->
       <shipping-component/>
        <!-- End shipping section -->

    </main>

    </div>
</template>
<script>
    import ShippingComponent from './includes/Shipping.vue';
    import BreadcrumbPage from './includes/BreadcrumbPage.vue';
    import ProductListComponent from './includes/ProductList.vue';
    export default {
        name: 'CardComponent',
        components: {
        ShippingComponent,
        ProductListComponent,
        BreadcrumbPage
      
    },
    data() {
        return {
            products:[],
            error:[]
        }
    },
    methods: {
        updateItem(item){
            if(item.quantity > 0){
            this.error =[];
            this.$store.dispatch('cart/updateCart',{
                product: item.product, 
                quantity: item.quantity,
            })}
            else{
                this.error['quantity'] = 'Quantity > 0'
            }
        },
        removeItem(item){
            this.$store.dispatch('cart/removeProductinCART',{
                product: item.product, 
                size: item.size, 
                color: item.color, 
            })
         
        },
        clearCart(){
            this.$store.dispatch('cart/clearCart')
        }
            
       
    },
    computed:{
            cartItems(){     
                return this.$store.state.cart.cartList;
            },
            getToTal(){   
                return this.$store.getters['cart/TOTAL_CART'];
            } ,    
        
         
    } 
    }
    
</script>
