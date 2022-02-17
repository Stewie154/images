<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>
        {{isLoggedIn}}
        <div class="right menu">
            <a class="ui item" @click="login" href="#">
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