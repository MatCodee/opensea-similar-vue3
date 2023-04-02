<template>
    <div class="swiper-container mt-10 relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide pb-10" v-for="(item, index) in cards" :key="index">
            <Card :card="item" />
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue'
  import Swiper from 'swiper'
  
  export default {
    name: 'Swiper',
    data() {
        return {

        }
    },
    components: {
        Card,
    },
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    mounted() {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            668: {
            slidesPerView: 2,
            spaceBetween: 30,
            },
            992: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
            1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
            1500: {
            slidesPerView: 5,
            spaceBetween: 40,
            },
            1800: {
            slidesPerView: 6,
            spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      })
    }
  }
  </script>
  
  <style>
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
  top: 40%;
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