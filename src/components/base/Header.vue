<script setup>
</script>

<template>
    <header class="container-global flex justify-between items-center gap-10 p-4">
        <div class="flex gap-2 mr-5 cursor-pointer">
            <img class="w-10 h-10" src="img/opensea.svg" alt="">
            <span class="text-back text-2xl font-bold">OpenSea</span>
        </div>
        <div class="flex items-center gap-5 bg-slate-200 w-full h-12 rounded-xl	py-3 px-5">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />            
            <input placeholder="Buscar Articulos, Coleciones y Cuentas" class="input-field w-full" type="text" >
        </div>
        <div>
            <ul class="flex gap-8 text-lg font-semibold	">
                <li class="cursor-pointer" >Lanzamientos</li>
                <li class="cursor-pointer">Estadisticas</li>
                <li class="cursor-pointer">Recursos</li>
                <li class="cursor-pointer"><font-awesome-icon class="size-icon" :icon="['fas', 'user']" /></li>
                <li class="cursor-pointer"><font-awesome-icon class="size-icon" :icon="['fas', 'right-from-bracket']" /></li>
                <li class="cursor-pointer"><font-awesome-icon class="size-icon" :icon="['fas', 'cart-shopping']" /></li>
            </ul>

        </div>
    </header>
</template>
<style scoped>
.container-global {
  width: 100%;
  max-width: 1800px;
  margin: auto;
}
.size-icon {
    font-size: 1.6rem;
}
.input-field {
    height: auto;
    background-color: transparent;
}
input:focus {
  outline: none;
}
</style>