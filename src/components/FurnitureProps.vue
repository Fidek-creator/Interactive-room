<script setup>
  import rangeProp from './RangeProp.vue';
  import ColorProp from './ColorProp.vue';

  const props = defineProps({
    furnitureProps: {
      type: Array,
      required: true,
    },
    IdPrefix: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <section>
    <div v-for="prop in props.furnitureProps" :key="prop.name">
      <rangeProp v-show="prop.type == 'range'" :propDefinition="prop" :IdPrefix="props.IdPrefix" />
      <ColorProp v-show="prop.type == 'color'" :propDefinition="prop" :IdPrefix="props.IdPrefix" />
    </div>
  </section>
</template>
