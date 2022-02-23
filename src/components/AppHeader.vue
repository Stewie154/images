<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item" href="/">
            Image Storage
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item" href="">Galleries</router-link>
                <router-link to="/upload" class="item" href="">Upload</router-link>
                <a class="item" href="" @click="logout">Logout</a>
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
        methods: mapActions(['login', 'logout'])
    }
</script>

<style scoped>
    .horizontal {
        display: flex;
    }
</style>