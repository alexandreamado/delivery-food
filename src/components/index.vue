<template>
  <div>
    <Header></Header>

    <div class="px-[6%] py-[6px] h-[545px] bg-3-third-color relative z-10">
      <div class="">
        <div class="flex justify-around">
          <div>
            <p class="text-primaria-clr italic font-extrabold mt-8 ">
            Best In Town
          </p>
            <div class="flex justify-between items-center mb-10 max-lg:flex ">
              
              <div class="max-lg:flex max-lg:flex-col ">
                <h1
                  class="text-[50px] w-[500px] italic font-semibold max-lg:text-4xl max-lg:ml-16 ">
                  ENJOY OUR CHICKEN
                  <span class="text-primaria-clr">BURGER</span> FAST FOOD
                </h1>

                <div class="flex items-center gap-4 px-20">
                  <button
                    class="bg-primaria-clr text-[32px] text-pure-white w-[200px] h-[60px] flex-shrink-0 rounded-[10px] font-bold max-lg:text-lg max-lg:w-max max-lg:px-4"
                  >
                    Order Now
                  </button>
                  <span class="text-[25px] font-normal max-lg:text-lg">Price: $10.0</span>
                </div>
              </div>

              <div class="flex">
                <img src="../assets/image1.png" width="438" class="max-lg:w-[300px]" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <ul class="flex gap-8 items-center">
            <li class="">
              <a href="#" class="cursor-pointer">
                <i
                  class="fab fa-twitter text-[32px] text-primaria-clr cursor-pointer"
                ></i>
              </a>
            </li>
            <li>
              <a href="#" class="cursor-pointer">
                <i class="fab fa-facebook text-[32px] text-primaria-clr"></i>
              </a>
            </li>
            <li>
              <a href="#" class="cursor-pointer">
                <i class="fab fa-instagram text-[32px] text-primaria-clr"></i>
              </a>
            </li>
            <li>
              <a href="#" class="cursor-pointer">
                <i class="fab fa-linkedin text-[32px] text-primaria-clr"></i>
              </a>
            </li>
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
    </div>
    <Populardinner />
    <RichQuality />
    <BigOffer />
    <Menucardapio />
    <MenuSpecial />
    <OurRestaurant />
    <Delivery />
    <TheBest />
    <testemunhes />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Populardinner from "./Populardinner.vue";
import RichQuality from "./RichQuality.vue";
import BigOffer from "./BigOffer.vue";
import Menucardapio from "./Menucardapio.vue";
import MenuSpecial from "./MenuSpecial.vue";
import OurRestaurant from "./OurRestaurant.vue";
import Delivery from "./Delivery.vue";
import TheBest from "./TheBest.vue";
import testemunhes from "./testemunhes.vue";
import Footer from "./Footer.vue";

const img_one = ref(false);
const showImg_one = () => {
  img_one.value = !img_one.value;
};
</script>
