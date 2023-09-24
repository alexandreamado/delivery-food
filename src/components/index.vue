<template>
  <div>
    <Header></Header>

    <div class="px-[6%] py-[6px] h-[545px] bg-3-third-color relative -z-10">
      <div class="">
        <div class="px-[180px]">
          <div>
            <p
              class="text-primaria-clr italic font-extrabold relative top-14 max-lg:hidden max-2xl:hidden"
            >
              Best In Town
            </p>
            <div class="flex justify-between items-center mb-10 max-sm:w-[700px]">
              <h1
                class="max-sm:relative max-sm:right-[10rem]  text-[50px] w-[500px] italic font-semibold max-xl:text-[36px] max-lg:text-4xl max-lg:mt-6 max-md:text-[18px] max-sm:text-3xl
                ">
                ENJOY OUR CHICKEN
                <span class="text-primaria-clr">BURGER</span> FAST FOOD
              </h1>
              <div class="flex max-lg:hidden">
                <img src="../assets/image1.png" width="438" alt="" />
              </div>
            </div>
            <div
              class="flex items-center gap-4 px-20 relative bottom-12 max-lg:flex max-lg:float-left"
            >
              <button
                class="bg-primaria-clr text-[35px] text-pure-white w-[200px] h-[60px] flex-shrink-0 rounded-[10px] font-bold max-lg:text-[18px] max-lg:w-[100px]"
              >
                Order Now
              </button>
              <span class="text-[25px] font-normal ml-4">Price: $10.0</span>
            </div>
          </div>
        </div>

        <div class="flex justify-between max-lg:hidden">
          <ul class="flex gap-8 items-center">
            <li>
              <i
                class="fab fa-twitter text-[32px] text-primaria-clr cursor-pointer"
              ></i>
            </li>
            <li>
              <i class="fab fa-facebook text-[32px] text-primaria-clr"></i>
            </li>
            <li>
              <i class="fab fa-instagram text-[32px] text-primaria-clr"></i>
            </li>
            <li>
              <i class="fab fa-linkedin text-[32px] text-primaria-clr"></i>
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
