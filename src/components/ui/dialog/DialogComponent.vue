<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="visible"
      modal
      :header="props.header"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <slot></slot>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Dialog from "primevue/dialog";

const props = defineProps({
  header: {
    type: String,
    default: "",
  },
  visible: Boolean,
});
const visible = ref(props.visible);
const emit = defineEmits(["update:visible"]);
watch(visible, (visibleValue) => emit("update:visible", visibleValue), {
  immediate: true,
});
</script>
