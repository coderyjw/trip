<template>
  <div id="app">
    <router-view />
    <tab-bar />
    <loading/>
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import Loading from "@/components/loading/loading.vue"
</script>

<style scoped></style>
