<template>
  <h1 class="text-center text-3xl font-bold my-[30px]">Login</h1>

  <div class="text-center">
    <input
      type="email"
      v-model="email"
      placeholder="Enter Email"
      class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
      class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400"
    />
    <button
      @click="login"
      class="w-[320px] h-[40px] border border-sky-400 bg-sky-600 text-white cursor-pointer"
    >
      Login
    </button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter()

const email = ref("");
const password = ref("");

const login = async () => {

    if (!email.value || !password.value) {
    alert("Please fill in all fields.");
    return; // Prevent sign up if fields are empty
  }

  let result = await axios.get(
    `http://localhost:3000/users?email=${email.value}&password=${password.value}`
  );
  if (result.status == 200 && result.data.length>0) {
    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
    router.push({ name: "Home" });
  }
  console.warn(result);
};

onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (user) {
    router.push({ name: "Home" });
  }
});
</script>
