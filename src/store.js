import  {createStore} from 'vuex'; 
import cartModule from './store/cart'
import accountModule from './store/account'
import productModule from './store/product'
const store = createStore({
   modules: {
    cart: cartModule,
    account: accountModule,
    product: productModule,
   }
})
export default store;