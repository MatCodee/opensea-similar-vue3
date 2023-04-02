<script setup>
import Tag from "../components/custom/Tag.vue";
import Slider from "../components/custom/Slider.vue";
import SliderSection from "../components/custom/SliderSection.vue";

const slider_card = ["https://i.seadn.io/gcs/files/75c3f48d5858944618122c1e9e7583fe.png?auto=format&w=1920","https://i.seadn.io/gcs/files/fdb01b387a8394b8e2c9409db3bfa2da.jpg?auto=format&w=1920"]

const cards = [
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/54bb5098cda970fdded5659ca7b94d64.jpg?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gae/7HbBK0dDYOSbOBqdi4sQkwL96Utvb1pm6D78vH9icmUBdpMvtPDbukjqoJwKrBL4EJLsfaZWxOkx_TWkoCI6nANd47ydMNUlmuqRAQ?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/c88809860d034876679cdb8ed60844ee.jpg?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gae/Gd_730v3dUcejMvNw6AuWrhkruXnlGCM_sH5ibiz5Mbcz8PderBxsegkZsYjZYkVc8WMq5zbNh77e3qGsRMZNC2JmSjFNu1CWhuCEQ?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,    
    image: "https://i.seadn.io/gae/UsepTGHSxZKP4Qc-HqRDp_fg1kygAcvFplFyABEcA33gGmSsxiyHKWKdtXBWg6LsJWbKOvW76MRy6MWOSEJkjc8dWEltZgJInV20Enc?auto=format&w=500&h=500"

  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/3d5355d5339bf6d5b2bac77d54cbe6a6.jpg?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/54bb5098cda970fdded5659ca7b94d64.jpg?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gae/7HbBK0dDYOSbOBqdi4sQkwL96Utvb1pm6D78vH9icmUBdpMvtPDbukjqoJwKrBL4EJLsfaZWxOkx_TWkoCI6nANd47ydMNUlmuqRAQ?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/c88809860d034876679cdb8ed60844ee.jpg?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gae/Gd_730v3dUcejMvNw6AuWrhkruXnlGCM_sH5ibiz5Mbcz8PderBxsegkZsYjZYkVc8WMq5zbNh77e3qGsRMZNC2JmSjFNu1CWhuCEQ?auto=format&w=500&h=500"
  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,    
    image: "https://i.seadn.io/gae/UsepTGHSxZKP4Qc-HqRDp_fg1kygAcvFplFyABEcA33gGmSsxiyHKWKdtXBWg6LsJWbKOvW76MRy6MWOSEJkjc8dWEltZgJInV20Enc?auto=format&w=500&h=500"

  },
  {
    title: "Meta Line Mystery Box",
    price: 0.03,
    volumen: 164,
    image: "https://i.seadn.io/gcs/files/3d5355d5339bf6d5b2bac77d54cbe6a6.jpg?auto=format&w=500&h=500"
  }
]


</script>

<template>
  <main class="container-global">
    <Tag />
    <SliderSection :slider_card="slider_card" />
    
    
    <h1 class="mt-10 text-3xl font-bold">Destacado en Juego</h1>
    <Slider :cards="cards" />

    <h1 class="mt-10 text-3xl font-bold">Tendencia en Juegos de Aventura</h1>
    <Slider :cards="cards" />
    
  </main>
</template>
<style scoped>
.container-global {
  width: 100%;
  max-width: 1800px;
  margin: auto;
  overflow: hidden;
}
.button-position {
    position: absolute;
    top: calc(55% - 50px); 
    right: 0;
    z-index: 99;
}

</style>