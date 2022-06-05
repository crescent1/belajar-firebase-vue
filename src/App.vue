<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterView from "./views/path/FooterView.vue";
import { useCounterStore } from "@/stores/counter";

const isLogin = false;
const counter = useCounterStore();
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #e3f2fe"
  >
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <RouterLink to="/" class="navbar-brand"
        >Navbar {{ counter.counter }} {{ counter.isLogin }}</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <RouterLink to="/" class="nav-link" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <RouterLink to="/about" class="nav-link" aria-current="page"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              :to="'/contact/' + 1"
              class="nav-link"
              aria-current="page"
              >Contact</RouterLink
            >
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->

        <RouterLink
          class="btn btn-outline-success m-1"
          to="/login"
          v-if="!isLogin"
          >Login</RouterLink
        >
        <button
          @click.prevent="onSignOut"
          v-if="isLogin"
          class="btn btn-outline-primary my-1"
          type="button"
        >
          Log Out
        </button>
      </div>
    </div>
  </nav>

  <RouterView />
  <FooterView />
</template>

<style>
@import "@/assets/base.css";
</style>
