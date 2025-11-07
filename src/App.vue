<template>
  <LoginHeader />
  <div class="login-wrapper">
    <Login />
  </div>
</template>

<script setup>
import LoginHeader from './components/layout/LoginHeader.vue'
import Login from './components/login/Login.vue'
</script>



<style>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
  margin-top: 80px;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-image: url('./src/assets/images/LoginBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: block !important;
  place-items: normal !important;
}

#app {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100vh;
  display: flex !important;
  flex-direction: column;
  max-width: none !important;
  grid-template-columns: none !important;
}
</style>