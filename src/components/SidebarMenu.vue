<script setup>
import { list } from 'postcss';
import { ref } from 'vue'

const rooms= ref([
  "Kitchen",
])
</script>

<template>
   <div class="py-4 px-3 bg-slate-700 rounded flex flex-col">
    
      <a class="items-center pl-2.5 mb-5">
         <span class="self-center text-xl text-center font-semibold whitespace-nowrap cursor-default text-gray-400">
          <p>Aplikacja wspierajaca<br>prace projektantów</p>  
        </span>
      </a>
      
      <hr class="h-1 bg-gray-300 rounded border-0 ">

      <div class="text-center text-xl font-semibold cursor-pointer text-gray-400">
            <p class="hover:bg-blue-700 rounded-full p-4 hover:text-gray-300">
               Kuchnia
            </p>
            
            <hr class="h-1 bg-gray-300 rounded border-0">
            
            <p class="hover:hover:bg-blue-700 rounded-full p-4 hover:text-gray-300">
               Salon
            </p>
      </div>


      <div class="py-4 px-3rounded flex flex-col text-center text-gray-400 text-xl transition">
         
         <p>
            <button class="transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2.5">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
             </button>
             
             <span class="text-center cursor-default p-4">Lodówka</span>
             
             <button class="transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 rounded-full p-2.5">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                   </svg>
             </button>
         </p>
      
      </div>

      <div class="bg-slate-700 text-gray-400">
         
         <label for="default-range" class="block mb-2 text-sm font-medium text-gray-400">Wysokość</label>
         <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer">
         
         <label for="default-range" class="block mb-2 text-sm font-medium text-gray-400">Szerokość</label>
         <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer">

         <p class="my-2 text-sm font-medium">Kolor</p>
         
         <div class="flex justify-center">
            <div><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "></button></div>
            <div><button type="button" class=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "></button></div>
            <div><button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "></button></div>
          </div>
          
      </div>

     
   </div>
   
   

</template>

<style>
  
</style>