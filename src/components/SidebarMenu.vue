<script setup>
  import { ref } from 'vue';

  const rooms = ref([
    {
      name: 'Kuchnia',
      furnitures: [
        {
          name: 'Lodówka',
          props: [
            { name: 'Wysokość', type: 'range', value: 50 },
            { name: 'Szerokość', type: 'range', value: 50 },
            { name: 'Kolor', type: 'color', value: 'red' },
          ],
        },
        {
          name: 'Cabinets',
          props: [
            { name: 'Wysokość', type: 'range', value: 50 },
            { name: 'Szerokość', type: 'range', value: 50 },
            { name: 'Kolor', type: 'color', value: 'red' },
          ],
        },
        {
          name: 'Sinks',
          props: [
            { name: 'Wysokość', type: 'range', value: 50 },
            { name: 'Szerokość', type: 'range', value: 50 },
            { name: 'Kolor', type: 'color', value: 'red' },
          ],
        },
      ],
    },

    {
      name: 'Salon',
      furnitures: [
        {
          name: 'Sofa',
          props: [
            { name: 'Wysokość', type: 'range', value: 50 },
            { name: 'Szerokość', type: 'range', value: 50 },
            { name: 'Kolor', type: 'color', value: 'red' },
          ],
        },
      ],
    },
  ]);

  const selectedRoom = ref('');
</script>

<template>
  <div class="py-4 px-3 bg-slate-700 flex flex-col">
    <a class="items-center pl-2.5 mb-5">
      <span
        class="self-center text-xl text-center font-semibold whitespace-nowrap cursor-default text-gray-400">
        <p>Aplikacja wspierajaca<br />prace projektantów</p>
      </span>
    </a>

    <hr class="h-1 bg-gray-300 rounded border-0" />

    <div
      v-for="room in rooms"
      :key="room.name"
      class="text-center text-xl font-semibold text-gray-400">
      <p
        v-show="selectedRoom == '' || selectedRoom == room.name"
        @click="room.name == selectedRoom ? selectedRoom='': selectedRoom= room.name"
        class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer">
        {{ room.name == selectedRoom ? "Wstecz": room.name }}
      </p>
      <hr class="h-1 bg-gray-300 rounded border-0" />
    </div>





  </div>
</template>

<style></style>
