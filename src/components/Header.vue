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
    class="flex justify-between items-center px-[6%] py-[6px] bg-3-third-color shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
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
      :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full ']"
      class="flex items-center gap-4 relaive absolute lg:static transition-all duration-300 w-full lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-6 sm:top-[109px] max-lg:bg-secondary-clr max-lg:flex max-lg:flex-col"
    >
      <ul class="gap-[40px] lg:flex lg:items-center md:relative max-lg:w-full">
        <li
          v-for="listas in lista"
          :key="listas"
          class="max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items-center"
        >
          <a
            :href="listas.link"
            class="font-bold text-[20px] md:my-0 my-6 hover:text-primaria-clr max-lg:text-pure-white transition-all duration-200 max-[1153px]:text-lg uppercase"
          >
            {{ listas.name }}</a
          >
        </li>
      </ul>
      <!-- <div class="flex mx-[20px] items-center md:flex md:flex-col">
        <img src="../assets/cart.png" alt="" class="max-[1153px]:w-[40px]" />
        <div class="flex flex-col ml-4">
          <h2 class="font-bold text-[18px] max-[1153px]:text-sm">
            Delivery Order
          </h2>
          <span class="max-[1153px]:text-sm">+258 840279703</span>
        </div>
        <img
          src="../assets/food 1.png"
          class="ml-4 max-[1128px]:hidden"
          width="35"
          alt=""
        />
      </div> -->
    </div>

    <div class="flex items-center">
      <button
        class="max-[1023px]:hidden w-[90px] h-[35px] flex-shrink-0 rounded-[10px] bg-primaria-clr text-[20px] uppercase text-pure-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
let lista = [
  { name: "Home", link: "#" },
  { name: "about", link: "#" },
  { name: "items", link: "#" },
  { name: "pages", link: "#" },
  { name: "contact", link: "#" },
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
