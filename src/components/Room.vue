<script setup>
  import Furniture from './Furniture.vue';

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
      :id="props.room.name == props.modelValue ? 'back' : props.room.name.toString().toLowerCase()"
      class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer"
      @click="emit('update:modelValue', room.name == modelValue ? '' : room.name)">
      {{ props.room.name == modelValue ? 'Wstecz' : props.room.name }}
    </p>
    <hr class="h-1 bg-gray-300 rounded border-0" />
    <Furniture
      v-show="props.room.name == modelValue"
      v-for="furniture in props.room.furnitures"
      :key="furniture.name"
      :furniture="furniture"
      :room="props.room"
      v-model="props.modelValue" />
  </section>
</template>
