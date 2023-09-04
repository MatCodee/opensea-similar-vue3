<script setup>
import { ref } from 'vue';


const props = defineProps(['title'])
const title = props.title

const isopen = ref(false)


function open() {
    isopen.value = !isopen.value;
}

</script>
<template>
    <button @click="open" class="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 mt-1">
        <span class="text-xl font-semibold">{{title}}</span>
        <span>icon</span>
    </button>
    <div v-if="isopen">
        <div class="flex gap-3 items-center mt-3">
            <input placeholder="Max" class="select-element  rounded-xl border-2 border-gray-300" type="text">
            <input placeholder="Min" class="select-element rounded-xl border-2 border-gray-300" type="text">
            <span class="font-semibold text-xl">to</span>
            <input placeholder="Max" class="select-element  rounded-xl border-2 border-gray-300" type="text">
        </div>
        <button class="mt-5 text-white font-semibold bg-blue-200 rounded-xl w-full px-5 py-3">Apply</button>
    </div>
</template>

<style>
.select-element {
    width: 70px;
    height: 50px;
    outline: none;
    text-align: center;
}
</style>