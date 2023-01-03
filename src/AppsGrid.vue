<script setup>
import V3DApp from './components/V3DApp.vue';
import SidebarMenu from './components/SidebarMenu.vue';
</script>

<template>
  <div class="flex apps-container">
    <SidebarMenu />
    <V3DApp class="z-30"/>
  </div>
</template>

<style>
@import './assets/css/main.css';
</style>