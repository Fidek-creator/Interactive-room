<script setup>
  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    room: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <section v-show="modelValue == '' || modelValue == room.name">
    <p
      class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer"
      @click="emit('update:modelValue', room.name == modelValue ? '' : room.name)">
      {{ props.room.name == modelValue ? 'Wstecz' : props.room.name }}
    </p>

    this room has {{ props.room.furnitures.length }} furnitures VM: {{ props.modelValue }}
    <hr class="h-1 bg-gray-300 rounded border-0" />
  </section>
</template>
