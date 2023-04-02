<script setup>
    const props = defineProps(['scrollToCards'])
</script>
<template>
    <button @click="scrollToCards" class="w-14 h-14 rounded-full bg-white shadow-2xl"><font-awesome-icon class="icon-button" :icon="['fas', 'angle-right']" /></button>
</template>
<style scoped>
.icon-button {
    font-size: 1.8rem;
    color: rgb(0, 0, 0);
}
</style>