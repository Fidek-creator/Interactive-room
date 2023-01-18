<script setup>
import V3DApp from './components/V3DApp.vue';
import SidebarMenu from './components/SidebarMenu.vue';
</script>

<template>
  <div>
    <SidebarMenu class="overflow-y-auto absolute my-auto h-screen rounded-r-lg left-0 top-0 z-10 w-1/6"/>
    <V3DApp class="absolute z-0 inset-0 h-screen w-screen"/>
  </div>
</template>

<style>
@import './assets/css/main.css';
</style>