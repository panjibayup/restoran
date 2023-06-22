<template>
  <section>
    <div class="hero" style="margin-top: 100px">
      <div class="row justify-content-center mt-4 hero-satu">
        <div class="col-md-6" data-aos="fade-right" data-aos-duration="1500">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="hero-text">
                <strong>Pesan Makanan lebih mudah,</strong>
                <br />menggunakan Gadgetmu
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Kamu</p>
              <router-link class="btn btn-lg btn-success mt-4 tombol" to="/menu" data-aos="fade-down" data-aos-duration="2000"> <i class="bi bi-cart-plus"></i> Pesan ditempat </router-link>
              <router-link class="btn btn-lg mt-4 online" to="/daftar" data-aos="fade-up" data-aos-duration="2000"> <i class="bi bi-cart-plus"></i> Pesan Online </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-left" data-aos-duration="1500">
          <img src="../assets/images/hero.png" class="hero-img" style="width: 100%" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "hero",
};
</script>
<style scoped>
.btn {
  width: 270px;
  font-weight: 600;
}
.online {
  margin-left: 20px;
  background-color: greenyellow;
}
@media (max-width: 767.98px) {
  .hero {
    text-align: center;
  }
  .hero-satu {
    padding: 10px;
  }

  .tombol {
    width: 100%;
  }
  .online {
    width: 100%;
    margin-left: 0;
    margin-bottom: 40px;
  }
}
</style>
