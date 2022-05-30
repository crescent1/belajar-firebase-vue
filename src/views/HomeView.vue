<script setup>
// import TheWelcome from "@/components/TheWelcome.vue";
const datas = [
  {
    id: 1,
    title: "title-1",
    data: "lerem lemen lsdsa lsd alsd s lsd as ldsas ds",
  },
  {
    id: 2,
    title: "title-2",
    data: "lerem lemen lsdsa lsd alsd s lsd as ldsas ds",
  },
  {
    id: 3,
    title: "title-3",
    data: "lerem lemen lsdsa lsd alsd s lsd as ldsas ds",
  },
];
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card shadow my-4">
          <!-- <div class="card-header">
            Featured
          </div> -->
          <div class="card-body text-center">
            <h5 class="card-title">CARI DATA</h5>
            <form action="">
              <div class="row g-3 my-3 justify-content-center">
                <div class="col-md-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col-md-1 ps-2 text-start">
                  <button type="submit" class="btn btn-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
          <!-- <div class="card-footer text-muted">
            2 days ago
          </div> -->
        </div>
      </div>
      <div class="col-12">
        <div class="row mx-1 my-4 border shadow">
          <h5 class="mt-3">Contoh Data</h5>
          <div
            class="card m-3"
            style="width: 18rem"
            v-for="(data, index) in datas"
            :key="index"
          >
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <img alt="Vue logo" class="card-img-top" src="@/assets/logo.svg" />
            <div class="card-body">
              <h6 class="card-title">{{ data.title }}</h6>
              <p class="card-text">{{ data.data }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
