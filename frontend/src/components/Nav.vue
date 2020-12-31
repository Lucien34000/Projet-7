<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/"><img src="../assets/images/logo_black.svg" alt="logo Groupomania" class="logo"></router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Signup</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="user">
            <li class="nav-item">
              <router-link to="/login" class="nav-link" @click="handleLogout">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'Nav',
    methods: {
      async handleLogout() {
        await axios.post("http://localhost:3000/api/", {
          userId: this.userId,
          token: this.token,
          moderation: this.moderation
        },
        { headers: {'Content-Type': 'application/json'}});
        
          localStorage.clear();
          this.$store.dispatch('user', null);
          this.$router.push('/login');
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>

<style lang="scss">
.logo {
  width: 30%;
}
</style>