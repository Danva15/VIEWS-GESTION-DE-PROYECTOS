<template>
  <div class="login-container">
    <div class="header">
      <div class="logo">
        <img src="@/assets/lobo blanco.png" alt="Linex Logo" />
        <span class="linex-text">LINEX</span>
      </div>
    </div>

    <div class="login-box">
      <div class="password-icon">
        <img src="@/assets/contraseña.png" alt="Password Icon" />
      </div>
      <form @submit.prevent="handleResetPassword">
        <input type="password" v-model="newPassword" placeholder="New Password" required />
        <input type="password" v-model="repeatPassword" placeholder="Repeat Password" required />

        <button type="submit">CHANGE PASSWORD</button>
      </form>
      <p class="signup-text" @click="menu"><a href="#">LOG IN AGAIN</a></p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      newPassword: '',
      repeatPassword: ''
    };
  },
  methods: {
    handleResetPassword() {
      if (this.newPassword === this.repeatPassword) {
        console.log("Password changed successfully");
      } else {
        alert("Passwords do not match");
      }
    },
    menu() {
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
  background: rgba(209, 196, 196, 0.7);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  width: 350px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.password-icon {
  text-align: center;
  margin-bottom: 1px;
}

.password-icon img {
  width: 150px;
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
