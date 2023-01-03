<script setup>
  const props = defineProps({
    furniture: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
  });
</script>
<template>
  <div class="py-4 px-3 flex flex-col text-center text-gray-400 text-xl font-semibold">
    <p>
      <button
        class="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2">
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

      <span class="text-center cursor-default p-2">{{props.furniture.name}} </span>

      <button
        class="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2">
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
  </div>
</template>
