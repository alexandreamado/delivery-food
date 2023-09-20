<template>
  <div>
    <Header></Header>
    <div class="px-[6%] py-[6px] h-[545px] bg-3-third-color relative -z-10">
      <div class="px-[180px]">
        <div>
          <p class="text-primaria-clr italic font-extrabold relative top-14">
            Best In Town
          </p>
          <div class="flex justify-between items-center mb-10">
            <h1 class="text-[50px] w-[500px] italic font-semibold">
              ENJOY OUR CHICKEN
              <span class="text-primaria-clr">BURGER</span> FAST FOOD
            </h1>
            <div class="flex">
              <img src="../assets/image1.png" width="438"  alt="" />
              <!-- <img v-if="img_one" src="../assets/image2.png" width="438"  alt="" />
              <img src="../assets/image3.png" width="438"  alt="" />
              <img src="../assets/image4.png" width="438"  alt="" /> -->
            </div>
          </div>
          <div class="flex items-center gap-4 px-20 relative bottom-12">
            <button
              class="bg-primaria-clr text-[35px] text-pure-white w-[200px] h-[60px] flex-shrink-0 rounded-[10px] font-bold"
            >
              Order Now
            </button>
            <span class="text-[25px] font-normal ml-4">Price: $10.0</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <ul class="flex gap-8 items-center">
          <li>
            <i
              class="fab fa-twitter text-[32px] text-primaria-clr cursor-pointer"
            ></i>
          </li>
          <li><i class="fab fa-facebook text-[32px] text-primaria-clr"></i></li>
          <li>
            <i class="fab fa-instagram text-[32px] text-primaria-clr"></i>
          </li>
          <li><i class="fab fa-linkedin text-[32px] text-primaria-clr"></i></li>
        </ul>

        <div class="flex justify-center items-center gap-4">
          <span
          @click="showImg_one"
          class="cursor-pointer h-[20px] w-[20px] border-[2px] border-primaria-clr rounded-full transition-all"
          ></span>

          <span
            class="cursor-pointer h-[20px] w-[20px] border-[2px] border-primaria-clr rounded-full transition-all"
            onclick="currentSlide(1)"
          ></span>
          <span
            class="cursor-pointer h-[20px] w-[20px] border-[2px] border-primaria-clr rounded-full transition-all"
            onclick="currentSlide(1)"
          ></span>
          <span
            class="cursor-pointer h-[20px] w-[20px] border-[2px] border-primaria-clr rounded-full transition-all"
            onclick="currentSlide(1)"
          ></span>
        </div>
      </div>
    </div>
    <Populardinner></Populardinner>
    <RichQuality></RichQuality>
    <BigOffer></BigOffer>
    <Menucardapio></Menucardapio>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Header from "./Header.vue";
import Populardinner from './Populardinner.vue';
import RichQuality from './RichQuality.vue'
import BigOffer from './BigOffer.vue';
import Menucardapio from './Menucardapio.vue';

const img_one = ref(false)
const showImg_one = () => {
  img_one.value = !img_one.value
}


</script>
