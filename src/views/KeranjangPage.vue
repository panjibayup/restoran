<template>
  <div class="keranjang">
    <NavbarPage :updateKeranjang="keranjangs" />
    <div class="container" style="margin-top: 100px">
      <!-- breadcrumb -->
      <div class="row mt-4 keranjang">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-5 keranjang2">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-4" data-aos="fade-left" data-aos-duration="1500">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img :src="'../assets/images/' + keranjang.products.gambar" class="img-fluid shadow" width="200" style="border-radius: 15px" />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td>Rp. {{ keranjang.products.harga }}</td>
                  <td>
                    <strong>Rp. {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}</strong>
                  </td>
                  <td>
                    <button class="btn btn-danger" @click="hapusKeranjang(keranjang.id)">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td>
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 justify-content-center" data-aos="fade-right" data-aos-duration="1500">
          <router-link class="btn btn-md btn-success mt-4 tombol" to="/ditempat"> <i class="bi bi-cart-plus"></i> Klik Disini untuk Pesan ditempat </router-link>
        </div>
        <div class="col-md-6" data-aos="fade-left" data-aos-duration="1500">
          <router-link class="btn btn-md mt-4 online" to="/online"> <i class="bi bi-cart-plus"></i> Klik Disini untuk Pesan Online </router-link>
        </div>
        <button v-on:click="logout" class="btn btn-md mt-4 logout"><i class="bi bi-cart-plus"></i> Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPage from "../components/NavbarPage.vue";
import axios from "axios";

export default {
  name: "Keranjang",
  components: { NavbarPage },

  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/masuk" });
    },
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("https://alive-seasoned-summer.glitch.me/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Berhasil Hapus Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update Data keranjang
          axios
            .get("https://alive-seasoned-summer.glitch.me/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    // checkout() {
    //   if (this.pesan.nama && this.pesan.noMeja) {
    //     this.pesan.keranjangs = this.keranjangs;
    //     axios
    //       .post("https://confused-northern-ranunculus.glitch.me/pesanans", this.pesan)
    //       .then(() => {
    //         // Hapus Semua Keranjang
    //         this.keranjangs.map(function (item) {
    //           return axios.delete("https://confused-northern-ranunculus.glitch.me/keranjangs/" + item.id).catch((error) => console.log(error));
    //         });

    //         this.$router.push({ path: "/pesanan-sukses" });
    //         this.$toast.success("Berhasil Dipesan", {
    //           type: "success",
    //           position: "top-right",
    //           duration: 3000,
    //           dismissible: true,
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   } else {
    //     this.$toast.error("Nama dan Nomor Meja Harus diisi", {
    //       type: "error",
    //       position: "top-right",
    //       duration: 3000,
    //       dismissible: true,
    //     });
    //   }
    // },
  },
  mounted() {
    axios
      .get("https://alive-seasoned-summer.glitch.me/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style scoped>
.btn {
  font-weight: 600;
  width: 100%;
}
.online {
  margin-left: 20px;
  background-color: greenyellow;
}
.logout {
  width: 50%;
  background-color: greenyellow;
}
@media (max-width: 767.98px) {
  .keranjang,
  .keranjang2,
  .keranjang3 {
    padding: 10px;
  }
  h4 strong {
    font-size: 20px;
  }
  .online {
    margin-left: 0px;
    background-color: greenyellow;
  }
  button.logout {
    background-color: rgb(188, 0, 0);
    color: white;
    margin: 20px auto;
  }
}
</style>
