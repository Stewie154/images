<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        name: 'AppHeader',
        methods: mapActions(['login'])
    }
</script>