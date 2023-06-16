<script setup>
import CardProduct from "../components/CardProduct.vue";
import HeroPage from "../components/HeroPage.vue";
import NavbarPage from "../components/NavbarPage.vue";
import axios from "axios";
</script>

<template>
  <div class="home">
    <NavbarPage />
    <div class="container">
      <HeroPage />

      <section class="product">
        <div class="row best" style="margin-top: 150px">
          <div class="col-md-10">
            <h2>
              Best
              <strong>Foods</strong>
            </h2>
          </div>
          <div class="col-md-2">
            <router-link to="/menu" class="btn btn-success"> <i class="bi bi-eye"></i> Lihat Semua Menu </router-link>
          </div>
        </div>

        <div class="row best2 mb-4">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
@media (max-width: 767.98px) {
  .best,
  .best2 {
    padding: 10px;
  }
}
</style>
