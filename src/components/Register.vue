<template>
    <div>
        <main class="main__content_wrapper">
        
        <!-- Start breadcrumb section -->
        <section class="breadcrumb__section breadcrumb__bg">
            <div class="container">
                <div class="row row-cols-1">
                    <div class="col">
                        <div class="breadcrumb__content text-center">
                            <h1 class="breadcrumb__content--title text-white mb-25">Account Page</h1>
                            <ul class="breadcrumb__content--menu d-flex justify-content-center">
                                <li class="breadcrumb__content--menu__items"><a class="text-white" href="index.html">Home</a></li>
                                <li class="breadcrumb__content--menu__items"><span class="text-white">Account Page</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End breadcrumb section -->

        <!-- Start login section  -->
        <div class="login__section section--padding">
            <div class="container-fluid">
                <form action="" method="POST" @submit.prevent="onSumit()" >
                    <div class="login__section--inner">
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="col-8 mx-auto " >
                                <div class="account__login register">
                                    <div class="account__login--header mb-25 text-center">
                                        <h2 class="account__login--header__title h3 mb-10">Create an Account</h2>
                                        <p class="account__login--header__desc">Register here if you are a new customer</p>
                                    </div>
                                    <div class="account__login--inner">
                                        <input class="account__login--input" placeholder="Name"   type="text"  v-model="model.name" > 
                                         <span style="color:red"> {{error['name']}}</span> 
                                        <input class="account__login--input" placeholder="Email" type="text" v-model="model.email">
                                        <span style="color:red"> {{error['email']}}</span>
                                        <input class="account__login--input" placeholder="Phone" type="number" v-model="model.phone">
                                        <span style="color:red"> {{error['phone']}}</span>
                                        <input class="account__login--input" placeholder="Address" type="text" v-model="model.address">
                                        <span  style="color:red"> {{error['address']}}</span>
                                        <input class="account__login--input" placeholder="Password" type="password" v-model="model.password">
                                        <span style="color:red"> {{error['password']}}</span>
                                        <input class="account__login--input" placeholder="Confirm Password"  type="password"  v-model="model.confirmpassword">
                                        <span style="color:red"> {{error['cfpassword']}}</span>
                                        <div class="account__login--remember position__relative mb-3">
                                            <input class="checkout__checkbox--input" id="checkterms" type="checkbox" name="checkterms">
                                            <span class="checkout__checkbox--checkmark"></span>
                                            <label class="checkout__checkbox--label login__remember--label" for="checkterms" >
                                                I have read and agree to the terms & conditions</label>
                                            </div>
                                            <span style="color:red"> {{error['checkterms']}}</span>
                                        <button class="account__login--btn primary__btn mb-10" type="submit" >Submit & Register</button>
                                        <p class="account__login--signup__text">You have an Account? <router-link to="/login" style="color:blue">Login now</router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>     
        </div>
        <!-- End login section  -->

        <!-- Start shipping section -->
        <section class="shipping__section2 shipping__style3 section--padding pt-0">
            <div class="container">
                <div class="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
                    <div class="shipping__items2 d-flex align-items-center">
                        <div class="shipping__items2--icon">
                            <img src="/img/other/shipping1.png" alt="">
                        </div>
                        <div class="shipping__items2--content">
                            <h2 class="shipping__items2--content__title h3">Shipping</h2>
                            <p class="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div class="shipping__items2 d-flex align-items-center">
                        <div class="shipping__items2--icon">
                            <img src="/img/other/shipping2.png" alt="">
                        </div>
                        <div class="shipping__items2--content">
                            <h2 class="shipping__items2--content__title h3">Payment</h2>
                            <p class="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div class="shipping__items2 d-flex align-items-center">
                        <div class="shipping__items2--icon">
                            <img src="/img/other/shipping3.png" alt="">
                        </div>
                        <div class="shipping__items2--content">
                            <h2 class="shipping__items2--content__title h3">Return</h2>
                            <p class="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                    <div class="shipping__items2 d-flex align-items-center">
                        <div class="shipping__items2--icon">
                            <img src="/img/other/shipping4.png" alt="">
                        </div>
                        <div class="shipping__items2--content">
                            <h2 class="shipping__items2--content__title h3">Support</h2>
                            <p class="shipping__items2--content__desc">From handpicked sellers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End shipping section -->

    </main>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'RegisterComponent',
        data() {
        return {
            Customers: [],
            model: {
                name:'',
                email:'',
                phone:'',
                address:'',
                password:'',
                confirmpassword:''
            },
            error:[]
         } 
     },
    async  mounted() {
        let res = await  axios.get('customers')
             this.Customers = res.data;
    },  
    methods:{
        validate(){
            let isValid = true;
            this.error =[];  
            let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let emailRegx = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
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
            if(this.model.email == ''){
                this.error['email'] = 'Enter your email.'
                isValid = false;
            } else if (!emailRegx.test(this.model.email)){
                this.error['email'] = 'Email is not in the correct format.'
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
            if(this.model.password == ''){
                this.error['password'] = 'Enter your password.'
                isValid = false;
            } else 
            if( !passwordRegx.test(this.model.password))
            {
                this.error['password'] = 'Password must contain 1 lowercase character, 1 uppercase character, 1 number, 1 special character among numbers, at least 8 characters long.'
                isValid = false;
            }
            if(this.model.confirmpassword == '' ){
                this.error['cfpassword'] = 'Enter your Confirm password ';
                isValid = false;
            } else if(this.model.password !== this.model.confirmpassword) {
                this.error['cfpassword'] = ' Confirm password  same as password'
                isValid = false;
            } else
            if( !passwordRegx.test(this.model.confirmpassword))
            {
                this.error['cfpassword'] = 'Confirm password must contain 1 lowercase character, 1 uppercase character, 1 number, 1 special character among numbers, at least 8 characters long.';
                isValid = false;
            }
            if(!document.getElementById('checkterms').checked)
            {
                this.error['checkterms'] = 'You must agree to the Terms & Condition';	
                isValid = false;
            }
            return    isValid;
        },
      async  onSumit(){
             if(this.validate())
             {
                let res = await   axios.post('customers',this.model)
                        console.log(res.data);   
                        this.$router.push('/login');
             }
        },
    }
}
 
</script>

