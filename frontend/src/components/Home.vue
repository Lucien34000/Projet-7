<template>

    <div>
        <h3 v-if="user">Hi, {{ user.firstName }} {{ user.lastName }}</h3>
        <h3 v-if="!user">Hello</h3>
    </div>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            user: null
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'));
    },
    async created() {
        const response = await axios.get('api/auth/');

        this.user = response.data;

    }
}
</script>