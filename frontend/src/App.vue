<template>
  <div class="app">
    <Nav />

    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>  
</template>

<script>
  import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  *{
    box-sizing: border-box;
  }

  body {
    background: center / cover no-repeat url("./assets/images/paris.jpg")!important ;
    min-height: 100vh;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

  .auth-wrapper {
    display: flex;
    text-align: left;
    place-content: center;
    margin-top: 8%;
  }

  .auth-wrapper h3 {
    text-align: center;
  }

  .auth-inner {
    width: 450px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 10px;
  }

  .auth-wrapper .form-control:focus {
    border-color: #1a70e0;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password, .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a {
    color: #1a70e0;
  }
</style>

