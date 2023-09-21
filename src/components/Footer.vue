<template>
  <div class="bg-3-third-color">
    <h1 class="text-secondary-clr text-center text-[35px] font-bold">Our Branch</h1>
    <div class="bg-primaria-clr h-[250px] mt-[2rem] flex items-center justify-center gap-[4rem]">
      <FooterBranch />
      <FooterBranch />
      <FooterBranch />
    </div>
    <div class="bg-secondary-clr h-[100px] flex items-center justify-center">
        <p class="text-center text-pure-white font-bold text-[20px]">Copyright © 2023 | Alexandre Amado</p>
    </div>
  </div>
</template>

<script setup>
import FooterBranch from './FooterBranch.vue';

</script>