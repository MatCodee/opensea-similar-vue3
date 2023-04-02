<script>
export default {
    data() {
        return {
            category: ['Todo','Arte','Juego','Membresias','PFP','Fotografia']
        }
    }
}
</script>
<template>
    <ul class="flex gap-2 mt-5">
        <li class="cursor-pointer transition font-semibold ease-in-out duration-300 text-xl py-2 px-4 hover:bg-slate-200 rounded-lg" v-for="(i,index) in category" :key="index">{{ i }}</li>        
    </ul>    
</template>

