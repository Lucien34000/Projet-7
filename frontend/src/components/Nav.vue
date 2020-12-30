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
              <router-link href="/" class="nav-link" @click="handleLogout">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'Nav',
    methods: {
      handleLogout() {
        localStorage.removeItem('token');
        this.$store.dispatch('user', null);
        this.$router.push('/');
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