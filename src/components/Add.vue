<template>
   <Header />
  <h1>Hello user , Welcome to the Add Restaurant Page</h1>

  <form >
    <input v-model="restaurant.name" type="text" name="name" placeholder="Enter Name" class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400"
    />
    <input v-model="restaurant.address" type="text" name="address" placeholder="Enter Address" class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400"
    />
    <input v-model="restaurant.contact" type="text" name="contact" placeholder="Enter Contact" class="h-10 w-3/4 pl-5 block mb-7 mx-auto border border-sky-400"
    />
    <button @click="addRestaurant" type="button" class="w-[320px] h-[40px] ml-[350px] border border-sky-400 bg-sky-600 text-white cursor-pointer"
    >Add new restaurant</button>
  </form>
 
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import axios from "axios";

const router = useRouter();
const restaurant=ref([{
  name:'',
  address:'',
  contact:''
}])


const addRestaurant = async() => {
  console.warn(restaurant.value)
  const result = await axios.post("http://localhost:3000/restaurant",{
    name: restaurant.value.name,
    address: restaurant.value.address,
    contact: restaurant.value.contact
  })
  if(result.status == 201){
    router.push({ name: "Home" });

  }
  console.warn(result)
}

onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (!user) {
    router.push({ name: "SignUp" });
  }
});
</script>

