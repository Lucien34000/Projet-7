<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" required/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" required>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('api/auth/login', {
                email: this.email,
                password: this.password
            }, 
            { headers: {'Content-Type': 'application/json'} });

            console.log(response)
        }
    }
}
</script>