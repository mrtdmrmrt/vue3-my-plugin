<script setup>
import {inject} from "vue"
const logout = inject("logout")
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<button @click="logout">Logout</button>
  <a :href="featuredLink" target="_blank"> Link </a>
  <p v-font-size:small>Small</p>
  <p v-font-size:medium>Medium</p>
  <p v-font-size:large>Large</p>
  <my-header>
    <template #title>Header Title</template>
    <template #author>Mert DEMIR</template>
  </my-header>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
