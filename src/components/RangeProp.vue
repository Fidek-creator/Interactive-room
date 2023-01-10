<script setup>
  const props = defineProps({
    propDefinition: {
      type: Object,
      required: true,
    },
    IdPrefix: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <section class="bg-slate-700 text-gray-400 py-2 flex flex-col item">
    <label for="default-range" class="block mt-2 mb-2 text-sm font-medium text-gray-400">{{props.propDefinition.name}}</label>
    <input
      :id="props.IdPrefix + props.propDefinition.name"
      type="range"
      :min="props.propDefinition.min"
      :max="props.propDefinition.max"
      v-model="props.propDefinition.value"
      class="w-full h-2 bg-gray-300 rounded-lg cursor-pointer" />
      
      <label for="default-range" class="block mt-2 mb-2 text-sm font-medium text-gray-400">{{props.propDefinition.name}}</label>
      <input
        :id="props.IdPrefix + props.propDefinition.name"
        type="range"
        :min="props.propDefinition.min"
        :max="props.propDefinition.max"
        v-model="props.propDefinition.value"
        class="w-full h-2 bg-gray-300 rounded-lg cursor-pointer" />
  </section>
</template>
