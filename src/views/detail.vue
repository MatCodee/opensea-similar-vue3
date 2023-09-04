<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect, onUnmounted } from 'vue';

import Card from '@/components/custom/Card.vue';
import SelectButton from "@/components/custom/SelectButton.vue"
import Tag from "../components/custom/Tag.vue";

import Header from '../components/base/Header.vue';



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
    <div class="w-full h-80 relative">
        <img class="w-full h-full object-cover"
            src="https://i.seadn.io/gcs/files/ee5c835ca7927237f4dbac8270dc4c0f.png?auto=format&dpr=1&w=1920" alt="">
        <img class="shadow-md w-44 h-44 border-8 border-white rounded-xl z-10 absolute -bottom-5 left-16 object-cover"
            src="https://i.seadn.io/gcs/files/ad9b7cdca7bb0956644ae1ef3832ad8f.png?auto=format&dpr=1&w=256" alt="">
    </div>

    <div class="container-global">
        <div class="my-8 flex items-center justify-between">
            <h1 class="text-3xl font-bold">LoudPunx</h1>
            <ul class="flex gap-5">
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
            </ul>
        </div>

        <ul class="flex gap-5 mb-5">
            <li>Items <strong>10k</strong></li>
            <li>Created <strong>Aug 2023</strong></li>
            <li>Creator earnings <strong> 6.9%</strong></li>
            <li>Chain <strong>Ethereum</strong></li>
            <li>Category <strong>Music</strong></li>
        </ul>
        <p class="mb-5 text-lg font-semibold">IRL version of #CryptoPunks powered by #AI</p>
        <button>See more <span>icon</span></button>

        <ul class="flex gap-10 text-2xl font-semibold">
            <li>2727 ETH</li>
            <li>1,13 ETH</li>
            <li>0,9 WETH</li>
            <li>3%</li>
            <li>1028</li>
            <li>42%</li>
        </ul>

        <Tag />
        <br>
        <hr>
        <Header />
        <hr>

        <div class="grid grid-cols-6 mt-10">
            <div class="col-span-1 mr-10 py-5">
                <SelectButton title="Price" />
                <SelectButton title="Rarity rank" />
                <SelectButton title="Quantity" />
                <SelectButton title="Currency" />
                <hr>
                <p class="mt-2 p-3 text-xl font-semibold">Traits</p>
                <SelectButton title="1/1" />
                <SelectButton title="Artist" />
                <SelectButton title="Back" />
                <SelectButton title="Background" />
                <SelectButton title="Base" />
                <SelectButton title="Clothes" />
                <SelectButton title="Eyes" />
                <SelectButton title="Eyewear" />
                <SelectButton title="Head" />
                <SelectButton title="Mouth" />
                <SelectButton title="Necklace" />
                <SelectButton title="Tattoos" />
            </div>
            <div class="flex gap-5 col-span-5 w-full flex-wrap">
                <template v-for="(item, index) in cards" :key="index">
                    <Card :card="item" />
                </template>
            </div>
        </div>

    </div>
</template>

<style scoped>
.container-global {
    width: 100%;
    max-width: 1800px;
    margin: auto;
    overflow: hidden;
    margin-top: 5px;
}
</style>