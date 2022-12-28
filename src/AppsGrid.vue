<script setup>
import V3DApp from './components/V3DApp.vue';

</script>

<template>
  <div class="apps-container">
    <V3DApp />
  </div>
  <div class="control-buttons">
    <button class="control-buttons__button" @click="showTL = !showTL">{{tlLabel}}</button>
  </div>
</template>

<style>
@import './assets/css/main.css';
</style>