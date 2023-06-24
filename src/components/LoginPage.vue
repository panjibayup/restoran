<template>
  <div class="login">
    <NavbarPage />
  </div>
  <div class="container">
    <div class="padding" data-aos="zoom-in" data-aos-duration="1500">
      <div class="card">
        <h4 class="card-title mb-1 text-center" style="color: green">Masuk</h4>
        <p class="card-text text-center mb-3" style="color: #9b9b9b">Silahkan masuk terlebih dahulu</p>
        <div class="register">
          <input type="text" v-model="email" placeholder="Username atau Email" />
          <input type="password" v-model="password" placeholder="Password" />
          <router-link to="/forgot-password" class="link">Lupa password?</router-link>
          <button v-on:click="login" type="submit" class="btn btn-block">Masuk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarPage from "../components/NavbarPage.vue";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`https://alive-seasoned-summer.glitch.me/users?email=${this.email}&password=${this.password}`);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ path: "/menu" });
        this.$toast.success("Kamu Berhasil Masuk", {
          type: "success",
          position: "top-right",
          duration: 4000,
          dismissible: true,
        });
      } else {
        this.$toast.error("Email dan Password Harus di isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
      console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/menu" });
    }
  },
  components: { NavbarPage },
};
</script>

<style scoped>
.card {
  margin: auto;
  margin-top: 150px;
  width: 350px;
  padding: 20px;
  border: none;
  border-radius: 20px;
  margin-bottom: 2rem;
  -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  -webkit-transition: all 0.3s ease-in-out, 0s, color 0s, border-color 0s;
  transition: all 0.3s ease-in-out, 0s, color 0s, border-color 0s;
}
.col-12 img {
  width: 160px;
  margin-bottom: -130px;
  margin-top: 80px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid green;
  border-radius: 20px;
}
.register label {
  width: 300px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.register button {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
}
.link {
  text-decoration: none;
  color: green;
  padding-left: 10px;
  font-size: 14px;
}
.btn {
  background-color: green;
  color: #fff;
  font-weight: 500;
}
</style>

<!-- <style scoped>
.container-fluid {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
  background-position: bottom;
  background-image: url(../assets/bg-login.png);
}
.auth-wrapper.auth-v1 {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
}

.auth-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
}
.col-12 img {
  width: 180px;
}
.card {
  border: none;
  margin-bottom: 2rem;
  -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  -webkit-transition: all 0.3s ease-in-out, 0s, color 0s, border-color 0s;
  transition: all 0.3s ease-in-out, 0s, color 0s, border-color 0s;
}
</style> -->
