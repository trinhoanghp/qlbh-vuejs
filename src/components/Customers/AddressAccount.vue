<template>
    <div>
        <main class="main__content_wrapper">

<!-- Start breadcrumb section -->
<breadcrumb-page title="My Account"/>
<!-- End breadcrumb section -->

<!-- my account section start -->
<section class="my__account--section section--padding">
    <div class="container">
        <div class="my__account--section__inner border-radius-10 d-flex">
            <sildebar-acc-component/>
            <div class="account__wrapper">
                <div class="account__content" >
                    <h3 class="account__content--title mb-20" >Infomation</h3>
                    <div class="account__details two">
                        <form action="" method="post" @submit.prevent="updateAccount()">
                            <div class="form-group">
                            <label for="">Email:</label>
                            <input type="text"
                                class="form-control"  id="" aria-describedby="helpId" placeholder="" v-model="model.email" readonly>
                                <span style="color:red"> </span> 
                            </div>
                            <div class="form-group">
                            <label for="">Name:</label>
                            <input type="text"
                                class="form-control"  id="" aria-describedby="helpId" placeholder="" v-model="model.name" >
                                <span style="color:red"> {{error['name']}}</span> 
                            </div>
                            <div class="form-group">
                            <label for="">Phone:</label>
                            <input type="number"
                                class="form-control" id="" aria-describedby="helpId" placeholder=""  v-model="model.phone" >
                                <span style="color:red"> {{error['phone']}}</span>
                            </div>
                            <div class="form-group">
                            <label for="">Address:</label>
                            <input type="text"
                                class="form-control"  id="" aria-describedby="helpId" placeholder=""   v-model="model.address">
                                <span style="color:red"> {{error['address']}}</span>
                            </div>
                            <p style="color:red"> {{error['update']}}</p>
                            <div class="account__details--footer d-flex">
                                <button @click="updateAccount()" class="account__details--footer__btn" type="button">Update</button>
                                <!-- <button class="account__details--footer__btn" type="button">Cancel</button> -->
                            </div>
                      </form>
                    </div>    
                </div>
               
            </div>
        </div>
    </div>
</section>
<!-- my account section end -->

<!-- Start shipping section -->
<shipping-component/>
<!-- End shipping section -->

</main>
    </div>
</template>

<script>
    import axios from 'axios';
    import ShippingComponent from '../includes/Shipping.vue';
    import BreadcrumbPage from '../includes/BreadcrumbPage.vue';
    import SildebarAccComponent from './SlidebarAcc.vue';
    export default {
        name: 'AddressAccountComponent',
        components: {
        ShippingComponent,
        BreadcrumbPage,  
        SildebarAccComponent
      },
      data() {
        return {
            Customers: [],
            model: {
                id:'',
                name:'',
                email:'',
                phone:'',
                address:'',
            },
            error:[]
         } 
     },

     computed:{
        accountLogin(){    
            return this.$store.state.account.account;
        } 
    },
    mounted() {
        this.model.id = this.accountLogin.id
        this.model.name = this.accountLogin.name
        this.model.phone = this.accountLogin.phone
        this.model.email = this.accountLogin.email
        this.model.address = this.accountLogin.address
    },
    methods:{
        validate(){
            let isValid = true;
            this.error =[];            
            if(this.model.name == ''){
                this.error['name'] = 'Enter your name.'
                isValid = false;
               
            } else if ( this.model.name.length < 3){
                this.error['name'] = 'Name must be at least 3 characters long.'
                isValid = false;
            } else if (this.model.name.length > 30) {
                this.error['name'] = 'Name must be up to 30 characters long.'
                isValid = false;
            }
           
            if(this.model.phone == ''){
                this.error['phone'] = 'Enter your mobile phone number.'
                isValid = false;
            }
            if(this.model.address == ''){
                this.error['address'] = 'Enter your address.'
                isValid = false;
            }
            return  isValid;
        },
       async updateAccount(){
             if(this.validate())
             {  
                await axios.put('customers/'+ this.model.id,this.model)
                 this.error['update'] = 'Update success!'
                sessionStorage.setItem('account',JSON.stringify(this.model))
                this.$store.dispatch('account/getAccount');
                }
            }
    }


 
}

</script>

