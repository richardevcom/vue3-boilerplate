<template>
  <div class="card flex justify-center">
    <span class="text-blue-600 cursor-pointer" @click="visible = true"
      >Create</span
    >
    <DialogComponent :key="visible" v-model:visible="visible">
      <div>
        <h1 class="text-xl font-bold text-center">Create House</h1>
        <div class="flex flex-col gap-2">
          <label for="name">Name</label>
          <InputText type="text" v-model="name" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="name">Address</label>
          <InputText type="text" v-model="address" />
        </div>
        <div class="flex gap-2">
          <Button
            class="bg-blue-500 text-white p-2"
            label="Submit"
            @click="handSubmit"
          />
          <Button
            class="bg-red-500 text-white p-2"
            label="Close"
            @click="handCloseForm"
          />
        </div>
      </div>
    </DialogComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DialogComponent from "@/components/ui/dialog/DialogComponent.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { houseService } from "@/service/house";

const emit = defineEmits(["fetchHouse"]);

const visible = ref(false);
const name = ref("");
const address = ref("");

async function handSubmit() {
  try {
    await houseService.createHouse({
      name: name.value,
      address: address.value,
    });
    handCloseForm();
    emit("fetchHouse");
  } catch (error) {
    console.debug(error);
  }
}

function handCloseForm() {
  visible.value = false;
  address.value = "";
  name.value = "";
}
</script>
