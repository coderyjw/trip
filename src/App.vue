<template>
  <div id="app">
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar />
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<style scoped></style>
