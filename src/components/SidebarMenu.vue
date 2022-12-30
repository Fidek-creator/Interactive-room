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
          <p>Aplikacja wspierajaca<br>prace projektantow</p>  
        </span>
      </a>
      
      <hr class="h-1 bg-gray-300 rounded border-0 ">

      <div class="text-center text-xl font-semibold cursor-default text-gray-400 ">
            <p class="hover:bg-slate-500 rounded-full p-4">
               Kuchnia
            </p>
            
            <hr class="h-1 bg-gray-300 rounded border-0">
            
            <p class="hover:bg-slate-500 rounded-full p-4">
               Salon
            </p>
      </div>


      <div class="py-4 px-3rounded flex flex-col text-center text-gray-400 text-xl">
         
         <p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
             </button>
            Lodówka
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
             </button>
         </p>
      
      </div>
   </div>
   
   

</template>

<style>
  
</style>