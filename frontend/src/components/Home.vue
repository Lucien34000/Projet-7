<template>

    <div>
        <h3 v-if="users">Hi, {{ users.firstName }} {{ users.lastName }}</h3>
        <h3 v-if="!users">Hello</h3>    
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
    async created() {
        const response = await axios.get('api/auth/', 
            { headers: {'Content-Type': 'application/json'} });

        console.log(response);
    }
}
</script>