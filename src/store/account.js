

const accountModule = {
    namespaced: true,
    state: {
        account: sessionStorage.getItem('account')
            ? JSON.parse(sessionStorage.getItem('account')) : []

    },
    mutations: {
        // CHECK_LOGIN(state, account) {
        //     axios.post('customers/check_login', account)
        //     .then(res => {
        //          if (res.data.length > 0) {
        //             state.account = res.data
        //             sessionStorage.setItem('account', JSON.stringify(res.data))
        //         }
        //     });
        // },
        async LOGOUT() {
            sessionStorage.removeItem('account')
            console.log('OK')   


        },
        getAccount(state) {
            state.account = sessionStorage.getItem('account')
            ? JSON.parse(sessionStorage.getItem('account')) : []
        }

    },

    actions: {
        // checkLogin({ commit }, account) {
        //     commit('CHECK_LOGIN', account)
        // },
        logout({ commit }) {
            commit('LOGOUT')
        },
        getAccount({commit}) {
            commit('getAccount');
        }

    }
};
export default accountModule;