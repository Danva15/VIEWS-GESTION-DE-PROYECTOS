<template>
  <div class="login-container">
    <div class="header">
      <div class="logo">
        <img src="@/assets/lobo blanco.png" alt="Linex Logo" />
        <span class="linex-text">LINEX</span>
      </div>
    </div>

    <div class="login-box">
      <h2>CREATE AN ACCOUNT</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="name" placeholder="Name Complete" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />

        <button type="submit" >REGISTER</button>
      </form>
      <p class="signup-text" @click="inicio"><a href="#">LOG IN</a></p>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      console.log("User registered successfully", this.name, this.email);
    },
    inicio() {
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('@/assets/fondo.jpg') no-repeat center center/cover;
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
  background: rgba(212, 192, 192, 0.7);
  padding: 25px;
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
  border-radius: 25px;
  border: none;
  font-size: 16px;
  text-align: center;
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

.signup-text {
  margin-top: 10px;
}

.signup-text a {
  color: #00ffcc;
}
</style>
