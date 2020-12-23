<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <img src="../assets/images/logo_black.svg" alt="logo Groupomania" class="logo">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/login" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="/signup" class="nav-link">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss">
.logo {
  width: 15%;
}
</style>