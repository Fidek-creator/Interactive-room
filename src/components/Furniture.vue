<script setup>
  import { ref, computed, onMounted } from 'vue';
  import FurnitureProps from './FurnitureProps.vue';
  const props = defineProps({
    furniture: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
    room: {
      type: Object,
      required: true,
    },
  });

  const furnitureId = ref(0);
  const changeId = (changeAmount) => {
    furnitureId.value += changeAmount;
    if (furnitureId.value < 0) {
      furnitureId.value = props.furniture.variant.length - 1;
    } else if (furnitureId.value >= props.furniture.variant.length) {
      furnitureId.value = 0;
    }
  };

  const hasProps = computed(() => {
    return Boolean(props.furniture.variant && props.furniture.variant[furnitureId.value].props);
  });
  const furnitureProps = computed(() => {
    if (!hasProps.value) return;
    return props.furniture.variant[furnitureId.value].props;
  });
</script>
<template>
  
  <div class="py-4 px-3 flex flex-col text-center text-gray-400 text-xl font-semibold">
    
    <p>
      <button
        @click="changeId(-1)"
        class="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2"
        :id="`${props.room.name}.${props.furniture.name}.prev`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      <span class="text-center cursor-pointer p-2" :id=" props.furniture.name">{{ props.furniture.name }} </span>

      <button
        @click="changeId(1)"
        class="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2"
        :id="`${props.room.name}.${props.furniture.name}.next`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </p>
    <FurnitureProps
      :furnitureProps="furnitureProps"
      :IdPrefix="`${props.room.name}-${props.furniture.name}-${furnitureId}-`" />
      
      <div class="pt-8">
        <hr class="h-1 bg-gray-300 rounded border-0" />
      </div>
  </div>
</template>
