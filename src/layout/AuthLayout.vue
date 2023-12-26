<template>
  <div
    class="w-screen h-screen flex justify-center items-center"
    :style="{
      backgroundImage: 'url(' + backgroundImg + ')',
    }"
    >
    <slot></slot>
  </div>
</template>

<script setup>
import backgroundImg from '@/assets/images/background.jpeg'

</script>
<style scoped>
</style>