<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>
        <div class="right menu">
            <div v-if="isLoggedIn">
                Galleries button 
                upload button 
                logout button 
            </div>
            <a v-else class="ui item" @click="login" href="#">
                Login
            </a>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['login'])
    }
</script>