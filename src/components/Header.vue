<template>
  <div
    class="flex justify-between items-center px-[6%] py-[6px] bg-primaria-clr"
  >
    <div class="flex gap-[8rem] max-[640px]:hidden">
      <div class="">
        <i class="fa lg:text-xl fa-clock mx-4 text-pure-white text-[12px]"></i>
        <span class="text-pure-white text-[12px]">7:30 AM - 9:30PM</span>
      </div>
      <div>
        <i class="fa fa-phone mx-4 text-pure-white text-[12px]"></i>
        <span class="text-pure-white text-[12px]">+253 840279703</span>
      </div>
    </div>
    <button class="text-pure-white text-[12px]">Register</button>
  </div>

  <div
    class="flex justify-between items-center px-[6%] py-[6px] bg-3-third-color shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative z-20"
  >
    <div>
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <button
      class="text-primaria-clr max-lg:relative max-lg:z-10 lg:float-right lg:hidden lg:bg-secondary-clr max-lg:w-full max-lg:flex max-lg:justify-end md:relative"
      @click="isOpen = !isOpen"
    >
      <i :class="[isOpen ? 'fa fa-close' : 'fa fa-bars']" class="text-3xl"></i>
    </button>

    <div
      :class="[isOpen ? 'opacity-100' : 'opacity-0']"
      class="flex items-center gap-4 relaive absolute lg:static transition-all duration-300 w-full lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-6 max-sm:top-[94px] max-md:top-[108px] max-lg:top-[108px] max-lg:bg-secondary-clr max-lg:flex max-lg:flex-col"
    >
      <ul
        class="max-md:flex max-md:items-center max-md:flex-col max-md:w-full flex gap-6 items-center max-md:bg-secondary-clr max-lg:flex max-lg:items-center max-lg:flex-col max-lg:w-full max-sm:relative max-sm:z-100"
      >
        <li
          v-for="listas in lista"
          :key="listas"
          class="max-lg:py-2 max-lg:mt-4 max-lg:mb-4 max-lg:text-sm cursor-pointer"
        >
          <RouterLink :to="listas.to"
            :href="listas.link"
            class="font-bold text-[20px] md:my-0 my-6 hover:text-primaria-clr max-lg:text-pure-white transition-all duration-200 uppercase"
          >
            {{ listas.name }}</RouterLink
          >
        </li>
      </ul>
      <div
        class="flex mx-[20px] items-center max-sm:flex max-sm:justify-center max-sm:w-full max-sm:p-2 max-md:flex max-md:justify-center max-md:w-full max-md:p-2 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:p-2 max-sm:bg-primaria-clr max-md:bg-primaria-clr max-lg:bg-primaria-clr"
      >
        <img src="../assets/cart.png" alt="" class="max-[1153px]:w-[40px]" />
        <div class="flex flex-col ml-4">
          <h2 class="font-bold text-[18px]">Delivery Order</h2>
          <span class="">+258 840279703</span>
        </div>
        <img
          src="../assets/food 1.png"
          class="ml-4 max-[1128px]:hidden"
          width="35"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center">
      <button
        class="max-sm:w-[50px] max-sm:text-sm max-sm:ml-4  
        max-md:w-[50px] max-md:text-sm max-md:ml-4  
        max-lg:w-[50px] max-lg:text-sm max-lg:ml-4  
        w-[90px] h-[35px] flex-shrink-0 rounded-[10px] bg-primaria-clr text-[20px] uppercase text-pure-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const lista = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Items", to: "/items" },
  { name: "Pages", to: "/pages" },
  { name: "Contact", to: "/contact" },
];
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
