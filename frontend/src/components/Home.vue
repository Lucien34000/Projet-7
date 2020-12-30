<template>

    <div>
        <h3 v-if="user">Hi, Mister</h3>
        <h3 v-if="!user">Hello</h3>
    </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    
    computed: {
        ...mapGetters(['user'])
    },

     
}
</script>