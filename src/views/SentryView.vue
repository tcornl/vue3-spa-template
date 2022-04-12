<script>
export default {
  methods: {
    throwError() {
      throw new Error("Sentry Error");
    },
  },
};
</script>

<template>
  <button @click="throwError">Throw error</button>
</template>
