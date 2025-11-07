<template>
  <div class="login-container">
    <img src="@/assets/images/LoginRobot.png" alt="VORTEX" class="logoRobot" />
    <div class="form-group">
      <input class="account" type="email" placeholder="Account Email" />
    </div>
    <div class="form-group">
      <input class="password" type="password" placeholder="Password" />
    </div>
    <button type="submit" class="login-btn">log in</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.logoRobot {
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
}

.login-container {
  height: 424px;
  width: 480px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}

.form-group input {
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #4e96df;
}

.login-btn {
  height: 40px;
  width: 100%;
  background-color: #4e96df;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
  margin-top: 40px;
}

.login-btn:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

.account {
  height: 56px;
  width: 366px;
  margin: 0 auto;
  display: block;
}

.password {
  height: 56px;
  width: 366px;
  margin: 0 auto;
  display: block;
}
</style>