<template>
  <div class="apps-container">
    <V3DApp v-if="showTL"/><div v-else></div>
  </div>
  <div class="control-buttons">
    <button class="control-buttons__button" @click="showTL = !showTL">{{tlLabel}}</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

import V3DApp from './components/V3DApp.vue';

export default {
  name: 'AppsGrid',

  components: {
    V3DApp,
  },

  setup() {
    const showTL = ref(true);
    const showTR = ref(true);
    const showBL = ref(true);
    const showBR = ref(true);

    const tlLabel = computed(() => `${showTL.value ? 'Hide' : 'Show'} Top Left`);
    const trLabel = computed(() => `${showTR.value ? 'Hide' : 'Show'} Top Right`);
    const blLabel = computed(() => `${showBL.value ? 'Hide' : 'Show'} Bottom Left`);
    const brLabel = computed(() => `${showBR.value ? 'Hide' : 'Show'} Bottom Right`);

    return {
      showTL, showTR, showBL, showBR,
      tlLabel, trLabel, blLabel, brLabel,
    };
  },
}
</script>

<style>
@import './assets/css/main.css';
</style>
