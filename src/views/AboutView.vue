<script setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();

function onClick() {
  counter.increment();
  counter.isLogin = true;
  // console.log(counter.counter);
}
</script>

<template>
  <div class="container-fluid border">
    <div class="row">
      <div class="col">about</div>
      <div>{{ counter.counter }}</div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="onClick">
          test
        </button>

        <button class="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
