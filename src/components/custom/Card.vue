<script setup>
    const props = defineProps(['card'])
    const { title, price,volumen,image } = props.card;
</script>
<template>
    <div class="content-card cursor-pointer max-w-xs w-72 rounded-xl shadow-xl overflow-hidden transition ease-in-out duration-200 hover:-translate-y-1">
        <div class="w-full h-48">
            <img class="w-full h-full" :src="image" alt=""> 
        </div>
        <div class="p-4">
            <h2 class="text-lg font-bold mb-1">{{ title }}</h2>
            <div class="flex justify-between">
                <div>
                    <span class="text-xs">SUELO</span><br>
                    <span class="font-bold text-lg">{{ price }}</span>
                </div>
                <div>
                    <span class="text-xs">VOLUMEN DE 7 DIAS</span>
                    <br>
                    <span class="font-bold text-lg">{{ volumen }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.content-card {
    min-width: 285px;
}
</style>