<template>
  <MainLayout>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <router-view></router-view>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layout/HomeManagermentLayout.vue";
</script>
