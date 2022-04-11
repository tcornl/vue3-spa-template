<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Sorry, this page does not exist!</h1>
    <button>
      <RouterLink :to="{ name: 'home' }">Back To Home</RouterLink>
    </button>
  </div>
</template>
