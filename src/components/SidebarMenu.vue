<script setup>
import { list } from 'postcss';
import { ref } from 'vue'

const rooms= ref([
  "Kitchen",
])
</script>

<template>
   
   <div class="py-4 px-3 bg-slate-700 flex flex-col">
    
      <a class="items-center pl-2.5 mb-5">
         <span class="self-center text-xl text-center font-semibold whitespace-nowrap cursor-default text-gray-400">
          <p>Aplikacja wspierajaca<br>prace projektantów</p>  
        </span>
      </a>
      
      <hr class="h-1 bg-gray-300 rounded border-0 ">

      <div class="text-center text-xl font-semibold text-gray-400">
         <p class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer">
            Kuchnia
         </p>
            
         <hr class="h-1 bg-gray-300 rounded border-0">
            
         <p class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300 hover:scale-75 cursor-pointer">
               Salon
         </p>
      </div>


      <div class="py-4 px-3 flex flex-col text-center text-gray-400 text-xl font-semibold">
         <p>
            <button class="transition ease-in-out delay-150 text-white bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
             </button>
             
             <span class="text-center cursor-default p-2">Lodówka</span>
             
             <button class="transition ease-in-out delay-150 text-white bg-blue-500  hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                   </svg>
             </button>
         </p>
      </div>

      <div class="bg-slate-700 text-gray-400 py-4">
         
         <label for="default-range" class="block mb-2 text-sm font-medium text-gray-400">Wysokość</label>
         <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-300 rounded-lg cursor-pointer">
         
         <label for="default-range" class="block mb-2 text-sm font-medium text-gray-400">Szerokość</label>
         <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-300 rounded-lg cursor-pointer">

         <p class="my-2 text-sm font-medium">Kolor</p>
         
         <div class="flex justify-center my-2">
            <div><button type="button" class="focus:outline-none bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 rounded-full text-sm px-5 py-5 mr-2 mb-2"></button></div>
            <div><button type="button" class="focus:outline-none bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-full text-sm px-5 py-5 mr-2 mb-2"></button></div>
            <div><button type="button" class="focus:outline-none bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 rounded-full text-sm px-5 py-5 mb-2"></button></div>
         </div>
      
         <hr class="h-1 bg-gray-300 rounded border-0">
          
      </div>

      <div class="flex justify-center text-white space-x-4">
         <a href="https://github.com/Fidek-creator/Interactive-room" target="_blank"><svg class="w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
         <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/></svg>
      </div>

   </div>

</template>

<style>
  
</style>