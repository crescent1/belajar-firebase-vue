<script setup>
import { RouterView } from "vue-router";
import UserNavBar from "@/components/part/UserNavBar.vue";
import UserFooter from "@/components/part/UserFooter.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <UserNavBar />
  <RouterView />
  <UserFooter />
</template>

<style>
@import "@/assets/base.css";
</style>
