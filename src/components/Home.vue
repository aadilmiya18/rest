<template>
  <Header />
  <h1>Hello {{ name }} , Welcome to the HOme Page</h1>
  <table  >
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
     </tr>
  </table>
  
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import axios from "axios";


const router = useRouter();
const name = ref('')
const restaurant = ref([])

 onMounted(async() => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name

  if (!user) {
    router.push({ name: "SignUp" });
  }
  let result = await axios.get("http://localhost:3000/restaurant")
  console.warn(result)
  restaurant.value= result.data
});
</script>

<style scoped>
td{
  width:160px ;
  height: 40px;
}
</style>