<template>

    <div>
        <h3 v-if="user">Hi, Mister</h3>
        <h3 v-if="!user">Hello</h3>
    </div>

</template>

<script>

import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'));
    },
        async created() {
        const response = await axios.get('http://localhost:3000/api', {
                    email: this.email,
                    password: this.password
                }, 
                { headers: {'Content-Type': 'application/json'} });
                
                localStorage.setItem('user', response.data);

        this.user = response.data;
    },
    computed: {
        ...mapGetters(['user'])
    }
     
}
</script>