<template>
  <section>
    <div class="hero" style="margin-top: 100px">
      <div class="row justify-content-center mt-4 hero-satu">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="hero-text">
                <strong>Pesan Makanan lebih mudah,</strong>
                <br />menggunakan Gadgetmu
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Kamu</p>
              <router-link class="btn btn-lg btn-success mt-4 tombol" to="/menu"> <i class="bi bi-cart-plus"></i> Pesan Sekarang </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
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
@media (max-width: 767.98px) {
  .hero {
    text-align: center;
  }
  .hero-satu {
    padding: 10px;
  }

  .tombol {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
