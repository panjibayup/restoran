<template>
  <div class="pesanan-sukses">
    <NavbarPage />
    <div class="container" style="margin-top: 80px">
      <div class="row justify-content-center mt-5 sukses" data-aos="fade-down" data-aos-duration="1500">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" width="500" />
          <h2><strong>Berhasil Dipesan!</strong></h2>
          <h4 style="color: green" data-aos="zoom-in" data-aos-duration="2000">
            Pesanan kamu sedang diproses <br />
            Mohon tunggu beberapa saat. <br />
            <br />
            Terimakasih.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPage from "../components/NavbarPage.vue";

export default {
  name: "PesananSukses",
  components: {
    NavbarPage,
  },
};
</script>

<style scoped>
@media (max-width: 767.98px) {
  img {
    justify-content: center;
    width: 100%;
  }
  .sukses {
    padding: 10px;
  }
  h4 {
    font-size: 18px;
  }
}
</style>
