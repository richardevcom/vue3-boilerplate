<template>
  <MainLayout>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <FullCalendar :options="calendarOptions" :events="events" />
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layout/HomeManagermentLayout.vue";
import { ref, onMounted, computed, } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarService } from "@/service/calendar";

const events = ref([]);

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  events: events.value,
  eventClick: (info) => {
    console.log(info);
  },
}));

onMounted(() => {
  calendarService.fetchList().then((res) => {
    events.value = res;
  });
});
</script>
