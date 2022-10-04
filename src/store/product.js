
import axios from "axios";
const productModule = {
    namespaced: true,
    state: {
        productList: []
    },
    getters: {
        // searchName(){
        //     return this.state.product.productList.filters(data => data.toLowerCase()).includes()
        // }

    },
    mutations: {
      async  GET_PRODUCT(state) {
            let res = await axios.get("products");
            state.productList = res.data;
        }
    },
    actions: {
        getProduct({ commit }) {
            commit('GET_PRODUCT');
        }


    }
};
export default productModule;