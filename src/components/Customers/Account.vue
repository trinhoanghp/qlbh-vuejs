<template>
    <div>
        <main class="main__content_wrapper">
            <!-- Start breadcrumb section -->
            <breadcrumb-page title="My Account" />
            <!-- End breadcrumb section -->

            <!-- my account section start -->
            <section class="my__account--section section--padding">
                <div class="container">
                    <div class="my__account--section__inner border-radius-10 d-flex">
                        <sildebar-acc-component />
                        <div class="account__wrapper">
                            <div class="account__content">
                                <h2 class="account__content--title h3 mb-20">Orders History</h2>
                                <div class="account__table--area">
                                    <table class="account__table ">
                                        <thead class="account__table--header">
                                            <tr class="account__table--header__child">
                                                <th class="account__table--header__child--items">
                                                    Order
                                                </th>
                                                <th class="account__table--header__child--items">
                                                    Date
                                                </th>
                                                <th class="account__table--header__child--items">
                                                    Status
                                                </th>
                                                <th class="account__table--header__child--items">
                                                    Total
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody class="account__table--body mobile__none" v-for="order in Orders"
                                            :key="order.id">
                                            <tr class="account__table--body__child">
                                                <td class="account__table--body__child--items">
                                                    {{ order.id }}
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    {{ order.created_at }}
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    {{ order.status == 1 ? "Completed" : "Processing" }}
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    $ {{ order.total }}
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    <button style="
                                                        font-size: 1.2rem;
                                                        line-height: 3.2rem;
                                                        height: 3.2rem;
                                                        padding: 0 1.5rem;
                                                        " class="primary__btn border-radius-5" @click="showDetail(order.id)" >
                                                        Detail
                                                    </button>                                                 
                                                </td>  
                                            </tr>
                                            <tr class="account__table--body__child" >
                                                <!-- <td  style="width:100%"     class="col-md-12 text-right"> Order detail</td> -->
                                                <td colspan="5" style="display:none" :id="'order'+ order.id">
                                                    <table class="table table-striped" v-if="array[order.id]">

                                                        <thead style="background-color:rgb(183, 158, 140,0.5) ;">
                                                            <tr >
                                                                <th>STT</th>
                                                                <th>Name</th>
                                                                <th>Size</th>
                                                                <th>Color</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(or,index) in array[order.id]" :key="index">
                                                                <td>{{index + 1}}</td>
                                                                <td>{{or.product_name}}</td>
                                                                <td>{{or.size}}</td>
                                                                <td>
                                                                    <svg :style="{'fill':or.color}"
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        class="bi bi-circle-fill" viewBox="0 0 16 16">
                                                                        <circle cx="8" cy="8" r="8" />
                                                                    </svg>
                                                                </td>
                                                                <td>${{or.price}}</td>
                                                                <td>{{or.quantity}}</td>
                                                                <td>${{or.price * or.quantity}}</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody class="account__table--body mobile__block">
                                            <tr class="account__table--body__child" v-for="order in Orders"
                                                :key="order.id">
                                                <td class="account__table--body__child--items">
                                                    <strong>Order</strong>
                                                    <span>{{ order.id }}</span>
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    <strong>Date</strong>
                                                    <span>{{ order.created_at }}</span>
                                                </td>
                                                <td class="account__table--body__child--items">
                                                    <strong>Payment Status</strong>
                                                    <span>{{
                                                    order.status == 1 ? "Completed" : "Processing"
                                                    }}</span>
                                                </td>

                                                <td class="account__table--body__child--items">
                                                    <strong>Total</strong>
                                                    <span>$ {{ order.total }}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button trigger modal -->
            </section>
            <!-- my account section end -->

            <!-- Start shipping section -->
            <shipping-component />
            <!-- End shipping section -->
        </main>
    </div>
</template>

<script>
import axios from "axios";
import ShippingComponent from "../includes/Shipping.vue";
import BreadcrumbPage from "../includes/BreadcrumbPage.vue";
import SildebarAccComponent from "./SlidebarAcc.vue";
export default {
    name: "AccountComponent",
    components: {
        ShippingComponent,
        BreadcrumbPage,
        SildebarAccComponent,
    },
    data() {
        return {
            customer_id: "",
            Orders: [],
            OrderDetail: [],
            array:[]
            
        };
    },
    async mounted() {
        this.customer_id = this.accountLogin.id;
        let res = await axios.get("orders/" + this.customer_id);
        this.Orders = res.data;
    },
    methods: {
        logoutAccount() {
            this.$store.dispatch("account/logout");
            // this.$router.push('/');
            this.$router.go("/");
        },
        async showDetail(id) {
            let res4 = await axios.get("orderdetail");
            this.OrderDetail = res4.data;

            this.array[id] = this.OrderDetail.filter((OrDetail) => {
                return OrDetail.order_id == id;

            });
            console.log(this.array[id]);
            let x = document.getElementById('order' + id)
           
            if (x.style.display == "none") {
                x.style.display = "revert";
            } else {
                x.style.display = "none";
            }


        },
    },
    computed: {
        cartItems() {
            return this.$store.state.cart.cartList;
        },
        accountLogin() {
            return this.$store.state.account.account;
        },
    },
};
</script>
