import { createRouter, createWebHistory } from 'vue-router'
import AboutComponent from './components/About.vue';
import HomeComponent from './components/Home.vue';
import ProductDetailComponent from './components/ProductDetail.vue';
import ProductComponent from './components/Shop.vue';
import BlogComponent from './components/Blog.vue';
import BlogdetailComponent from './components/Blogdetail.vue';
import ContactComponent from './components/Contact.vue';
import LoginComponent from './components/Login.vue';
import RegisterComponent from './components/Register.vue';
import AccountComponent from './components/Customers/Account.vue';
import AddressAccountComponent from './components/Customers/AddressAccount.vue';
// import WishlistAccountComponent from './components/WishlistAccount.vue';
import CardComponent from './components/Card.vue';
import CheckoutComponent from './components/Checkout.vue';
import ErrorComponent from './components/Error.vue';


const routers = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/product-detail/:id', component: ProductDetailComponent },
    { path: '/shop', component: ProductComponent },
    { path: '/blog', component: BlogComponent },
    { path: '/blog-detail/:id', component: BlogdetailComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/login', component: LoginComponent, name: 'login',
     beforeEnter: () => {
        const account = sessionStorage.getItem('account')
            ? JSON.parse(sessionStorage.getItem('account')) : false
        if (account) {
            console.log(account)
            return '/account';
        }

    } },
    {
        path: '/register', component: RegisterComponent,
        beforeEnter: () => {
            const account = sessionStorage.getItem('account')
                ? JSON.parse(sessionStorage.getItem('account')) : false
            if (account) {
                console.log(account)
                return '/account';
            }

        }
    },
    {
        path: '/account', component: AccountComponent, name: 'account',
        beforeEnter: () => {
            const account = sessionStorage.getItem('account')
                ? JSON.parse(sessionStorage.getItem('account')) : false
            if (!account) {
                console.log(account)
                return '/login';
            }

        }
    },
    { path: '/address-account', component: AddressAccountComponent },
    // { path: '/wishlist', component: WishlistAccountComponent },
    { path: '/cart', component: CardComponent },
    {
        path: '/checkout', component: CheckoutComponent,
        beforeEnter: () => {
            const account = sessionStorage.getItem('account')
                ? JSON.parse(sessionStorage.getItem('account')) : false
            if (!account) {
                console.log(account)
                return '/login';
            }

        }
    },
    { path: '/:abc(.*)', component: ErrorComponent },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router