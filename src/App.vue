<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const sourceCode = ref(import.meta.env.VITE_SOURCE_CODE);
</script>

<template>
  <header data-cy="header">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <footer data-cy="footer">
    <nav>
      <a :href="sourceCode">Source code</a>
    </nav>
  </footer>

  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
