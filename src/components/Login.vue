
<template  >
  <div>
    <main class="main__content_wrapper">
      <!-- Start breadcrumb section -->
      <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
          <div class="row row-cols-1">
            <div class="col">
              <div class="breadcrumb__content text-center">
                <h1 class="breadcrumb__content--title text-white mb-25">
                  Login
                </h1>
                <ul
                  class="
                    breadcrumb__content--menu
                    d-flex
                    justify-content-center
                  "
                >
                  <li class="breadcrumb__content--menu__items">
                    <a class="text-white" href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb__content--menu__items">
                    <span class="text-white">Login</span>
                  </li>
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
          <form action="#" method="POST" @submit.prevent="onSubmit()">
            <div class="login__section--inner">
              <div class="row row-cols-md-2 row-cols-1">
                <div class="col-8 mx-auto">
                  <div class="account__login">
                    <div class="account__login--header mb-25">
                      <h2 class="account__login--header__title h3 mb-10">
                        Login
                      </h2>
                      <p class="account__login--header__desc">
                        Login if you area a returning customer.
                      </p>
                    </div>
                    <div class="account__login--inner">
                      <input
                        class="account__login--input"
                        placeholder="Email Addres"
                        v-model="model.email"
                        type="text"
                      />
                      <span style="color: red"> {{ error["email"] }}</span>
                      <input
                        class="account__login--input"
                        placeholder="Password"
                        v-model="model.password"
                        type="password"
                      />
                      <span style="color: red"> {{ error["password"] }}</span>
                      <div
                        class="
                          account__login--remember__forgot
                          mb-15
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div
                          class="account__login--remember position__relative"
                        >
                          <input
                            class="checkout__checkbox--input"
                            v-model="model.remember_me"
                            id="check1"
                            type="checkbox"
                          />
                          <span class="checkout__checkbox--checkmark"></span>
                          <label
                            class="
                              checkout__checkbox--label
                              login__remember--label
                            "
                            for="check1"
                          >
                            Remember me</label
                          >
                        </div>
                        <button class="account__login--forgot" type="submit">
                          Forgot Your Password?
                        </button>
                      </div>
                      <div class="text-center m-2">
                        <h4 style="color: red">{{ error["fail"] }}</h4>
                      </div>
                      <button
                        class="account__login--btn primary__btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div class="account__login--divide">
                        <span class="account__login--divide__text">OR</span>
                      </div>

                      <p class="account__login--signup__text">
                        Don't Have an Account?
                        <router-link
                          to="/register"
                          style="color: blue"
                          type="submit"
                          >Sign up now</router-link
                        >
                      </p>
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
      <section
        class="shipping__section2 shipping__style3 section--padding pt-0"
      >
        <div class="container">
          <div
            class="
              shipping__section2--inner shipping__style3--inner
              d-flex
              justify-content-between
            "
          >
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="/img/other/shipping1.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Shipping</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="/img/other/shipping2.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Payment</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="/img/other/shipping3.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Return</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
              </div>
            </div>
            <div class="shipping__items2 d-flex align-items-center">
              <div class="shipping__items2--icon">
                <img src="/img/other/shipping4.png" alt="" />
              </div>
              <div class="shipping__items2--content">
                <h2 class="shipping__items2--content__title h3">Support</h2>
                <p class="shipping__items2--content__desc">
                  From handpicked sellers
                </p>
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
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      error: [],
    };
  },
  mounted() {
    this.$store.dispatch('account/getAccount');
  },
  methods: {
    async   onSubmit(){
        await  axios.post('customers/check_login',this.model)
            .then(
                (res) =>{
                   if(res.data.length > 0)
                   {
                    document.location.href = "/account";
                    sessionStorage.setItem("account",JSON.stringify(res.data[0]))
                }
                else
                {
                    this.error['fail'] = 'Login failed. Please try again!'
                }
                }
            )
            .catch((err) => console.log(err));
        }
  },
};
</script>

