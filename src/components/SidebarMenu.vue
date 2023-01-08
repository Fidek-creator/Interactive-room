<script setup>
  import { ref } from 'vue';
  import Room from './Room.vue';

  const rooms = [
    {
      name: 'Kuchnia',
      furnitures: [
        {
          name: 'Lodówka',
          variant: [
            {
              id: 0,
              props: [
                {
                  name: 'Wysokość',
                  type: 'range',
                  min: 0,
                  max: 100,
                  value: 50,
                },
                {
                  name: 'Kolor',
                  type: 'color',
                  value: 'red',
                  values: [
                    "#9494FF",
                    "#D0D0D0",
                    "#E4A010",
                  ]
                }
              ]
            },
            {
              id: 1,
            }
          ],
        },
        {
          name: 'Piekarnik',
          variant: [
            {
              id: 0,
            },
            {
              id: 1,
            }
          ],
        },
      ],
    },
  ];

  const a = ref(1);
  const selectedRoom = ref('');
</script>

<template>
  <div class="py-4 px-3 bg-slate-700 flex flex-col">
    <a class="items-center pl-2.5 mb-5">
      <span
        class="self-center text-xl text-center font-semibold whitespace-nowrap cursor-default text-gray-400">
        <p>Aplikacja wspierająca<br />prace projektantów</p>
      </span>
    </a>

    <hr class="h-1 bg-gray-300 rounded border-0" />

    <div
      v-for="room in rooms"
      :key="room.name"
      class="text-center text-xl font-semibold text-gray-400">
      <Room v-model="selectedRoom" :room="room" />
    </div>
  </div>


</template>

<style></style>
