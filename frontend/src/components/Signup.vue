<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control" v-model="firstName" placeholder="First Name" required>
        </div>

        <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" required>
        </div>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="example@gmail.com" required>
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Your password" required>
        </div>

        <button class="btn btn-primary btn-block">Sign Up</button>

    </form>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            await axios.post('api/auth/signup', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }, 
            { headers: {'Content-Type': 'application/json'} });

            this.$router.push('/login');
        }
    }
}
</script>