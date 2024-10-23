<template>
    <div class="nav bg-[#333] overflow-hidden "> 
        <RouterLink to="/" class="float-left px-[14px] py-[16px] text-center font-[17px] no-underline mr-[5px] hover:bg-[#ddd] text-[#fff]">Home</RouterLink>
        <RouterLink to="/add" class="float-left px-[14px] py-[16px] text-center font-[17px] no-underline mr-[5px] hover:bg-[#ddd] text-[#fff]">Add Restaurant</RouterLink>
        <RouterLink to="/update" class="float-left px-[14px] py-[16px] text-center font-[17px] no-underline mr-[5px] hover:bg-[#ddd] text-[#fff]">Update Restaurant</RouterLink>
        <a @click="logOut" href="#" class="float-left px-[14px] py-[16px] text-center font-[17px] no-underline mr-[5px] hover:bg-[#ddd] text-[#fff]" >LogOut</a>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const logOut = () => {
    localStorage.clear()
    router.push({name:'Login'})
}
</script>