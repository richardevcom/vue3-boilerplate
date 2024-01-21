<template>
  <AuthLayout>
    <div class="">
      <div
        class="flex justify-center items-center text-white font-bold gap-1 mb-4 text-2xl"
      >
        <img src="../../assets/images/logo.svg" alt="Logo" />
        Homekit
      </div>
      <div class="bg-white rounded-md p-8 grid gap-4 xl:min-w-[500px]">
        <div class="text-center font-bold text-2xl">
          Sign in to your account
        </div>
        <form @submit="onSubmit" class="gap-4 grid">
          <div class="grid gap-1">
            <label for="name" class="font-bold">Your email</label>
            <input
              v-model="email"
              v-bind="emailAttrs"
              name="email"
              type="email"
              class="bg-gray-100 :active:border-blue-400 p-2 rounded-md"
            />
            <span class="text-red-500 text-xs">{{ errors.email }}</span>
          </div>

          <div class="grid gap-1">
            <label for="password" class="font-bold">Your password</label>
            <input
              v-model="password"
              v-bind="passwordAttrs"
              name="password"
              type="password"
              class="bg-gray-100 :active:border-blue-400 p-2 rounded-md"
            />
            <span class="text-red-500 text-xs">{{ errors.password }}</span>
          </div>

          <div class="text-end cursor-pointer text-blue-500 :hover:underline">
            <div class="font-bold">Forgot password?</div>
          </div>

          <button
            class="bg-blue-500 text-white text-center p-2 rounded-md w-full font-bold"
          >
            Log in to your account
          </button>
          <div
            class="cursor-pointer font-bold text-blue-500 w-full text-center :hover:underline"
          >
            Don't have an account?
          </div>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "@/layout/AuthLayout.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<style scoped></style>
