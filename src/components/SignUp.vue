<template>
  <h1 class="text-center text-3xl font-bold my-[30px]">Sign Up</h1>

  <div>
    <input
      type="text"
      v-model="name"
      placeholder="Enter Name"
      class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400 rounded"
    />
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
      @click="signUp"
      class="w-[320px] h-[40px] ml-[250px] border border-sky-400 bg-sky-600 text-white cursor-pointer"
    >
      Sign Up
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const password = ref("");

// const signUp = async () => {
//   let result = await axios.post("http://localhost:3000/users", {
//     name: name.value,
//     email: email.value,
//     password: password.value,
    
//   });
//   console.warn(result);
//   if (result.status == 201) {
//     alert("Sign up successfully");
//     localStorage.setItem("user-info",JSON.stringify(result.data))
//   }
// };

const signUp = async() => {
  let result = await axios.post("http://localhost:3000/users",{
    name: name.value,
    email: email.value,
    password: password.value
  })
  console.warn(result)
  if(result.status == 201){
    alert("signup success")
    localStorage.setItem("user-info",JSON.stringify(result.data))
  }
}
</script>
