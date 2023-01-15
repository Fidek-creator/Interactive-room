<script setup>
    const props = defineProps({
      IdPrefix: {
        type: String,
        required: true,
      },
      propDefinition: {
        type: Object,
        required: true,
      },
    });
</script>
<template>
  <section>
    <p class="my-2 text-sm font-medium">Kolor</p>

    <div  class="flex justify-center my-2">
      <div v-for="value in props.propDefinition.values" :key="value">
        <button
          :id="props.IdPrefix + props.propDefinition.name + value.replace('#', '-')"
          type="button"
          :style="{ backgroundColor: value }"
          class="focus:outline-none focus:ring-4 focus:ring-white rounded-full text-sm px-5 py-5 mb-2 mx-1"></button>
      </div>
    </div>
  </section>
</template>
q:what :key is used for?
a:https://v3.vuejs.org/guide/list.html#key