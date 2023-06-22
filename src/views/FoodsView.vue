<template>
  <div class="foods" style="margin-top: 100px">
    <NavbarPage />
    <div class="container">
      <div class="row mt-4 daftar-makanan">
        <div class="col" data-aos="fade-down" data-aos-duration="1500">
          <h2>
            Daftar
            <strong>Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3 daftar-makanan2" data-aos="fade-right" data-aos-duration="1500">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Cari Makanan Kesukaan Kamu..." aria-label="Cari" aria-describedby="basic-addon1" @keyup="searchFood" />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4 daftar-makanan3">
        <div class="col-md-4 mt-4 mb-4" v-for="product in products" :key="product.id" data-aos="zoom-in-right" data-aos-duration="1500">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarPage from "../components/NavbarPage.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";
export default {
  name: "foods",
  components: {
    NavbarPage,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("https://confused-northern-ranunculus.glitch.me/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://confused-northern-ranunculus.glitch.me/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
@media (max-width: 767.98px) {
  .daftar-makanan,
  .daftar-makanan2,
  .daftar-makanan3 {
    padding: 10px;
  }
}
</style>
