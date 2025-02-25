<template>
  <div class="login-container">
    <!--<div class="header">
      <div class="logo">
        <img src="@/assets/lobo blanco.png" alt="Linex Logo" />
        <span class="linex-text">LINEX</span>
      </div>
    </div>-->
    <div class="login-box">
      <h2>LOGIN</h2>
      <form @submit.prevent="handleLogin">
        <label>Email Address :</label>
        <input type="email" v-model="email" required />

        <label>Password :</label>
        <input type="password" v-model="password" required />

        <div class="forgot-password" @click="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">LOGIN</button>
      </form>
      <p class="signup-text" @click="signup">Don't have an account? <a href="#">Sign Up now</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  if (email.value && password.value) {
    console.log('Logging in with', email.value, password.value);
    router.push('/dashboard'); // ✅ Redirige al Dashboard si las credenciales están llenas
  } else {
    alert('Por favor, ingrese sus credenciales.');
  }
};

const forgot = () => {
  router.push('/password');
};

const signup = () => {
  router.push('/register');
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /*background: url('@/assets/fondo.jpg') no-repeat center center/cover;*/
  position: relative;
}

.header {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 80px;
  margin-right: 10px;
}

.linex-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.login-box {
  background: rgba(204, 177, 177, 0.7);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  width: 350px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.login-box h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

button:hover {
  background-color: lightgray;
}

.forgot-password {
  text-align: right;
  margin-bottom: 10px;
}

.forgot-password a {
  color: #00ffcc;
}

.signup-text {
  margin-top: 10px;
}

.signup-text a {
  color: #00ffcc;
}
</style>
