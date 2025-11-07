<template>
  <header class="login-header">
    <div class="logo-container">
      <img src="@/assets/images/VortexLogin.png" alt="VORTEX" class="logo" />
      <div class="brand-text">
        <h1 class="brand-title">License Portal Customer Service Robot</h1>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.login-header {
  background-color: #000;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  height: 40px;
  width: auto;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-title {
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
}

.brand-subtitle {
  color: #cccccc;
  font-size: 12px;
  margin: 0;
  font-weight: 300;
}
</style>