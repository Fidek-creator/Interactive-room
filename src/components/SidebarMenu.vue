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
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                }
              ]
            },
            {
              id: 1,
            },
            {
              id: 2,
            },
            {
              id: 3,
            },
          ],
        },
        {
          name: 'Narożnik',
          variant: [
            {
              id: 0,
              props: [
                {
                  name: 'Kolor blatu',
                  type: 'color',
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                },
                {
                  name: 'Kolor frontu',
                  type: 'color',
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                }
              ]
            },
            {
              id: 1,
            },
          ],
        },
        {
          name: 'Zlew',
          variant: [
            {
              id: 0,
              props: [
                {
                  name: 'Kolor frontu',
                  type: 'color',
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                }
              ]
            },
            {
              id: 1,
            },
          ],
        },
        {
          name: 'Kredensy',
          variant: [
            {
              id: 0,
              props: [
                {
                  name: 'Kolor blatu',
                  type: 'color',
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                },
                {
                  name: 'Kolor frontu',
                  type: 'color',
                  value: '#599BE7',
                  values: [
                    "#599BE7",
                    "#E70500",
                    "#2BE73E",
                  ]
                }
              ]
            },
            {
              id: 1,
            },
          ],
        },
        {
          name: 'Stoły',
          variant: [
            {
              id: 0,
            },
            {
              id: 1,
            },
            {
              id: 2,
            }
          ],
        },
        {
          name: 'Krzesła',
          variant: [
            {
              id: 0,
            },
            {
              id: 1,
            },
            {
              id: 2,
            }
          ],
        },
      ],
    },
    {
      name:'Salon',
      furnitures:[
        {
          name: 'Sofa',
          variant:[
          {
            id:0,
            props:[
              {
                name: 'Kolor sofy',
                type: 'color',
                value: '#599BE7',
                values: [
                "#304E70",
                "#70353C",
                "#327056",
              ]
              },
              {
                name: 'Kolor poduszek',
                type: 'color',
                value: '#599BE7',
                values: [
                "#304E70",
                "#70353C",
                "#327056",
              ]
              }
            ]
          },
          {
            id:1,
          },
          {
            id:2,
          }
          ]
        },
        {
          name:"Komody",
          variant:[
            {
              id: 0,
            },
            {
              id: 1,
            },
            {
              id:2,
            }
          ]
        }
      ]
    },
  ];

  const a = ref(1);
  const selectedRoom = ref('');
</script>

<template>
  <div class="px-3 bg-slate-700 flex flex-col">
    <a class="items-center pl-2.5 mb-5">
      <span
        class="self-center text-xl text-center font-semibold whitespace-nowrap cursor-default text-gray-400">
        <p>Aplikacja<br />wspierająca prace<br/> projektantów wnętrz<br/> </p>
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
