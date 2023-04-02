<template>
    <div class="swiper-container-principal mt-10 relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide overflow-hidden rounded-3xl" v-for="(item, index) in slider_card" :key="index">
            <div class="transition ease-in-out duration-500 hover:scale-105">
              <img class="w-full h-96 object-cover object-center" :src="item" alt="" style="object-fit: cover;">
            </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    data() {
        return  {

        }
    },
    props: ['slider_card'],
    mounted() {
      const swiper = new Swiper('.swiper-container-principal', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      })
    }
}
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    width: 100%;
    height: 100%;
  }

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #000000;
  font-size: 5px !important;
  line-height: 5px;
  padding: 10px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transform: scale(0.6);
}

</style>