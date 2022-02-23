<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item" href="">Galleries</a>
                <a class="item" href="">Upload</a>
                <a class="item" href="">Logout</a>
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

<style scoped>
    .horizontal {
        display: flex;
    }
</style>