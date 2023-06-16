<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <h2 class="navbar-brand" style="font-weight: 600; color: green">Warung Milenial</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/menu">Menu</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/keranjang"
                >Keranjang
                <i class="bi bi-bag-plus-fill"></i>

                <span class="badge bg-success" style="margin-left: 10px">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarPage",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  props: ["updateKeranjang"],
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
