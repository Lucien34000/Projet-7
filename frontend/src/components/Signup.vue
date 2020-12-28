<template>
    <form @submit.prevent="sendSignUp">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control" v-model="dataSignUp.firstName" placeholder="First Name" required>
        </div>

        <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-model="dataSignUp.lastName" placeholder="Last Name" required>
        </div>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="dataSignUp.email" placeholder="example@gmail.com" required>
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="dataSignUp.password" placeholder="Your password" required>
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
            dataSignUp : {
                firstName: null,
                lastName: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        sendSignUp() {
            if ((this.dataSignUp.email !== null || this.dataSignUp.firstName !== null || this.dataSignUp.lastName !== null || this.dataSignUp.password !== null)) {
                axios.post("http://localhost:3000/api/auth/signup", this.dataSignUp)
                .then((response) => {
                    console.log(response);
                    this.$router.push('/login');
                })
                .catch((error) => console.log(error));
            } else {
                alert( " Le mot de passe n'est pas bon.")
            }
            
        }
    }
}
</script>