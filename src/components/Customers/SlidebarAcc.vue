<template>
    <div>
        <div class="account__left--sidebar">
                <h2 class="account__content--title h3 mb-20">My Profile</h2>
                <ul class="account__menu">
                    <li class="account__menu--list"><router-link to="/account">Dashboard</router-link></li>
                    <li class="account__menu--list"><router-link to="/address-account">Infomation</router-link></li>
                    <li class="account__menu--list"><a @click="logoutAccount()">Log Out</a></li>
                </ul>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'SildebarAccComponent',
        methods:{
            logoutAccount(){
                this.$store.dispatch('account/logout')
                document.location.href = "/";
                
                }
                }   
}
</script>
