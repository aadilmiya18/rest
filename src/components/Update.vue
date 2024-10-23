<template>
  <Header />
  <h1>Hello user , Welcome to the Update Restaurant Page</h1>
  
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";

const router = useRouter();

onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (!user) {
    router.push({ name: "SignUp" });
  }
});
</script>
