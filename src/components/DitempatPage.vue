<template>
  <div class="ditempat">
    <NavbarPage />
    <div class="container" style="margin-top: 150px">
      <div class="row justify-content-center mt-5 keranjang3" data-aos="zoom-in" data-aos-duration="2000">
        <div class="col-md-4">
          <div class="card shadow" style="border-radius: 20px; background-color: rgb(231, 255, 231); border: none">
            <div class="card-body" style="padding-left: 40px; padding-right: 40px">
              <h4 style="margin-top: 40px"><strong>Konfirmasi Pesananmu</strong></h4>
              <form class="mt-4" v-on:submit.prevent>
                <div class="form-group" style="margin-bottom: 12px; font-weight: 500">
                  <label for="nama">Nama :</label>
                  <input type="text" class="form-control" v-model="pesan.nama" style="border-radius: 20px" />
                </div>
                <div class="form-group" style="margin-bottom: 12px; font-weight: 500">
                  <label for="NoMeja">Nomor Meja :</label>
                  <input type="text" class="form-control" v-model="pesan.NoMeja" style="border-radius: 20px" />
                </div>

                <button type="submit" class="btn btn-success mt-4 mb-4" @click="checkout" style="float: right"><i class="bi bi-cart-plus"></i> Check Out</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPage from "./NavbarPage.vue";
import axios from "axios";

export default {
  name: "DitempatPage",
  components: { NavbarPage },

  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    checkout() {
      if (this.pesan.nama && this.pesan.NoMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("https://alive-seasoned-summer.glitch.me/pesanans", this.pesan)
          .then(() => {
            // Hapus Semua Keranjang
            this.keranjangs.map(function (item) {
              return axios.delete("https://alive-seasoned-summer.glitch.me/keranjangs/" + item.id).catch((error) => console.log(error));
            });

            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Berhasil Dipesan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama dan Nomor Meja Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("https://alive-seasoned-summer.glitch.me/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.keranjang3 {
  padding: 15px;
}
</style>
