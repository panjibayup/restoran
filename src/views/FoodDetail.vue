<template>
  <div class="food-detail">
    <NavbarPage />
    <div class="container" style="margin-top: 100px">
      <!-- breadcrumb -->
      <div class="row mt-4 pesan">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Pesan Makanan</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-5 pesan2">
        <div class="col-md-6" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="'../assets/images/' + product.gambar" class="img-fluid shadow" style="border-radius: 15px" />
        </div>
        <div class="col-md-6 nama" data-aos="fade-right" data-aos-duration="1500">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan">Keterangan</label>
              <textarea v-model="pesan.keterangan" class="form-control" placeholder="Keterangan spt : Pedes, Nasi Setengah .."></textarea>
            </div>

            <button type="submit" class="btn btn-success mt-3" @click="pemesanan"><i class="bi bi-cart-plus"></i> Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarPage from "../components/NavbarPage.vue";

export default {
  name: "FoodDetail",
  components: {
    NavbarPage,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("https://alive-seasoned-summer.glitch.me/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Berhasil Masuk ke Keranjang", {
              type: "success",
              position: "top-right",
              duration: 4000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 4000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("https://alive-seasoned-summer.glitch.me/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
@media (max-width: 767.98px) {
  .pesan,
  .pesan2 {
    padding: 10px;
  }
  .nama {
    margin-top: 20px;
  }
}
</style>
