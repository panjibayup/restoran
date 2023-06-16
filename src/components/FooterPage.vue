<template>
  <footer style="background-color: rgb(231, 255, 231); margin-top: 100px">
    <div class="container">
      <div class="col md-12 text-start">
        <div class="row justify-content-between">
          <div class="col-lg-5 col-md-6 profile">
            <h3 style="font-weight: 600; color: green">Warung Milenial</h3>
            <div class="row mt-3">
              <div class="col-1"><i class="bi bi-geo-alt-fill"></i></div>
              <div class="col-10 offset">Desa Kramat Kecamatan Karangmoncol Kabupaten Purbalingga (53355)</div>
            </div>
            <div class="row">
              <div class="col-1"><i class="bi bi-envelope-fill"></i></div>
              <div class="col-11">wrmilenial@gmail.com</div>
            </div>
            <div class="row">
              <div class="col-1"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-11">085655198971</div>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 company float-right">
            <h3 class="company-title" style="font-weight: 600; color: green">Tempat Makan</h3>
            <ul class="company-link">
              <li><router-link to="/"></router-link></li>
              <li><router-link to="/about">Tentang kami</router-link></li>
              <li><router-link to="/terms" class="">Syarat & Ketentuan</router-link></li>
              <li><router-link to="/privacy" class="">Kebijakan privasi</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
            </ul>
          </div>

          <div class="container mt-5">
            <div class="row row-footer text-center">
              <p class="copyright" style="font-weight: 600; color: green">Copyright 2022 Warung Milenial. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  components: {},
};
</script>

<style scoped>
footer {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff;
}
.row {
  padding: 10px;
}
.profile {
  color: #828282;
}
.profile .profile-image {
  max-width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.profile .row {
  margin-bottom: 10px;
}

.offset {
  margin-left: -0px;
}
.company .company-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 20px;
}
.company-link {
  list-style-type: none;
  padding-left: 0;
}
.company-link li {
  margin: 8px 0;
}
.company-link a {
  text-decoration: none;
  color: #828282;
}
.partner .partner-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
}
.image-partner {
  margin-left: 10px;
}
.image-partner-img {
  width: 70px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.partner .partner-title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 60px;
}
.copyright {
  color: #828282;
  font-size: 15px;
  padding-left: 20px;
}
.icon-copyright {
  text-align: right;
}
.icon-sosmed {
  margin-right: 5px;
  margin-left: 5px;
}

@media (max-width: 540px) {
  img.profile-image {
    width: 135px;
  }
}
</style>
