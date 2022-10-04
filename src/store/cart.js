
const cartModule = {
    namespaced: true,
    state() {
        return {
            cartList: localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart')) : [],

        }

    },
    getters: {
        TOTAL_CART(state) {
            let toTal = 0;
            state.cartList.forEach(item => {
                toTal += (item.product.sale_price * item.quantity)
            });
            return toTal;
        }

    },
    mutations: {

        ADD_TO_CART(state, { product, quantity,size,color }) {
            let productInCart = state.cartList.find(item => {
                return item.product.id === product.id && item.size == size && item.color == color ;
            })

            if (productInCart) {
                productInCart.quantity += quantity
                localStorage.setItem('cart', JSON.stringify(state.cartList))
                return;
            }
            state.cartList.push({
                product,
                quantity,
                size,
                color,
            })
            localStorage.setItem('cart', JSON.stringify(state.cartList))

        },
        REMOVE_PRODUCT_CART(state, { product,size,color }) {
            // localStorage.removeItem()      
            state.cartList = state.cartList.filter(item => {
                return item.product.id !== product.id || item.size !== size || item.color !== color
            },
            )

            localStorage.setItem('cart', JSON.stringify(state.cartList))
        },
        UPDATE_PRODUCT_CART(state, { product, quantity }) {
            let productInCart = state.cartList.find(item => {
                return item.product.id === product.id;
            })
            if (productInCart) {
                productInCart.quantity = quantity
                localStorage.setItem('cart', JSON.stringify(state.cartList))
                return;
            }

        },
        CLEAR_CART() {
            // localStorage.setItem('cart',[])  
            localStorage.removeItem('cart')
        },



    },
    actions: {
        addProductToCart({ commit }, { product, quantity,size,color }) {
            commit('ADD_TO_CART', { product, quantity,size,color })
        },
        removeProductinCART({ commit }, {product,size,color}) {
            commit('REMOVE_PRODUCT_CART', {product,size,color})
        },
        updateCart({ commit }, { product, quantity }) {
            commit('UPDATE_PRODUCT_CART', { product, quantity })
        },
        clearCart({ commit }) {
            commit('CLEAR_CART')
        },


    }
};
export default cartModule;