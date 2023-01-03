<script setup>
  import { propsToAttrMap } from '@vue/shared';

  const props = defineProps({
    room: {
      type: Object,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <section>
    <p class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer">
      {{ props.room.name == props.selected ? 'Wstecz' : props.room.name }}
    </p>
    <hr class="h-1 bg-gray-300 rounded border-0" />
  </section>
</template>
