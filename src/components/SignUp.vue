<template>
  <div class="daftaran">
    <NavbarPage />
    <div class="container">
      <div class="padding" data-aos="zoom-in" data-aos-duration="1500">
        <div class="card">
          <h4 class="card-title mb-1 text-center" style="color: green">Daftar</h4>
          <p class="card-text text-center mb-3" style="color: #9b9b9b">Daftarkan akun kamu terlebih dahulu</p>
          <div class="register">
            <input type="text" v-model="name" placeholder="Nama" />
            <input type="text" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <router-link to="/masuk" class="link">Sudah punya akun? Masuk</router-link>
            <button v-on:click="signUp" type="submit" class="btn btn-block">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <section id="section-login">
    <div class="container-fluid">
      <div class="container container-login">
        <div class="auth-wrapper auth-v1 px-2 mt-5">
          <div class="row auth-inner">
            <div class="d-flex justify-content-center col-12">
              <img src="../assets/logo-komerce-new-tag.19fad26f.png" alt="komerce" />
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="card text-white mt-2">
                  <div class="card-body">
                    <h4 class="card-title mb-1 text-center text-black">Sign Up</h4>
                    <p class="card-text text-center mb-2 text-black">Silahkan buat akun kamu terlebih dahulu</p>

                    <span>
                      <form class="auth-login-form mt-2">
                        <div class="form-group" role="group">
                          <label for="login-email" class="d-block text-black">Nama</label>
                          <div>
                            <span label="Nama">
                              <input type="text" id="login-email" name="login-email" placeholder="Nama" v-model="name" class="form-control is-invalid" arial-invalid="true" />
                              <small class="text-danger">Mohon masukkan nama</small>
                            </span>
                          </div>
                        </div>
                        <div class="form-group" role="group">
                          <label for="login-email" class="d-block text-black">Email</label>
                          <div>
                            <span label="Email">
                              <input type="text" id="login-email" name="login-email" placeholder="panji@gmail.com" v-model="email" class="form-control is-invalid" arial-invalid="true" />
                              <small class="text-danger">Mohon masukkan email</small>
                            </span>
                          </div>
                        </div>
                        <div class="form-group" role="group">
                          <label for="login-email" class="d-block text-black">Password</label>
                          <div>
                            <span label="Password">
                              <input type="password" id="login-password" name="login-password" placeholder="Password" v-model="password" class="form-control is-invalid" arial-invalid="true" />
                              <small class="text-danger">Mohon masukkan password kamu</small>
                            </span>
                            <div class="d-flex justify-content-left text-left">
                              <router-link to="/login">Sudah punya akun? Masuk</router-link>
                            </div>
                          </div>
                        </div>

                        <button v-on:click="signUp" type="submit" class="btn btn-primary btn-block">Sign Up</button>
                      </form>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import axios from "axios";
import NavbarPage from "../components/NavbarPage.vue";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("https://alive-seasoned-summer.glitch.me/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ path: "/menu" });
        this.$toast.success("Akun berhasil dibuat", {
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
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/menu" });
    }
  },
  components: { NavbarPage, NavbarPage },
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
.col-12 h3 {
  width: 160px;
  margin-bottom: -130px;
  margin-top: 80px;
  font-weight: 700;
  color: green;
  display: inline;
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
