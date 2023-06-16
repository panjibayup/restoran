<template>
  <div class="card shadow card-product">
    <img :src="'../assets/images/' + product.gambar" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ product.nama }}</h4>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success" :to="'/menu/' + product.id"><i class="bi bi-cart-plus"></i> Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style scoped>
.card-title h4 {
  font-weight: 500;
  font-family: "Poppins";
}
</style>
