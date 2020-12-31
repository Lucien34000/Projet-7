<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="dataLogin.email" placeholder="Email" required/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="dataLogin.password" placeholder="Password" required>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
        <p v-if="msg" class="text-danger mt-4"> {{ message }} </p>
    </form>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                dataLogin: {
                    email: null,
                    password: null
                },
                dataLog: "",
                msg: false,
                message: ""
            }
        },
        methods: {
            handleSubmit() {
                this.dataLog = JSON.stringify(this.dataLogin);
                axios.post('http://localhost:3000/api/login', this.dataLog, { headers: {'Content-Type': 'application/json'}})
                    .then(response => {
                        let login = JSON.parse(response.data);
                        localStorage.userId = login.userId;
                        localStorage.token = login.token;
                        localStorage.moderation = login.moderation;
                        this.$store.dispatch('user', response.data);
                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.log(error);
                        this.message = error;
                        this.msg = true;
                    })
            }
        }
    }
</script>