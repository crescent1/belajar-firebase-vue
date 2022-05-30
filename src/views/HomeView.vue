<script setup>
import { onMounted, reactive, ref } from "vue";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { UserFirebase } from "@/firebase/UserFirebase.js";
import SpinnerGif from "../components/SpinnerGif.vue";

const firebaseConfig = UserFirebase.UserFirebaseConfig();
// const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseConfig.firebaseApp);
// console.log(db);
const stores = reactive({
  data: [],
});
const loading = ref(false);
const errorMessage = ref("");

onMounted(async () => {
  try {
    loading.value = true;
    const storeCollection = collection(db, "stores");
    const dataQuery = query(storeCollection, orderBy("id", "asc"), limit(5));
    const dataDocs = await getDocs(dataQuery);

    if (!dataDocs) {
      errorMessage.value = "Tidak ada data";
    }
    // dataDocs.forEach((doc) => {
    //   test.data.push({ id: doc.id, ...doc.data() });
    // });

    stores.data = dataDocs.docs.map((doc) => doc.data());
    loading.value = false;
  } catch (error) {
    errorMessage.value = error.message;
    loading.value = false;
  }
});
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
      <div class="col-12" v-if="loading">
        <SpinnerGif />
      </div>
      <div class="col-12 text-center" v-if="errorMessage">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
      <div class="col-12" v-if="!loading && stores.data.length > 0">
        <div class="row mx-1 my-4 border shadow">
          <h5 class="mt-3">Contoh Data</h5>
          <div
            class="card m-3"
            style="width: 18rem"
            v-for="(store, index) in stores.data"
            :key="index"
          >
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <img alt="Vue logo" class="card-img-top" src="@/assets/logo.svg" />
            <div class="card-body">
              <h6 class="card-title">{{ store.storeName }}</h6>
              <p class="card-text">{{ store.storeDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
