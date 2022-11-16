<template>
  <q-page class="flex flex-center">
    <div class="column items-start">
      <q-uploader
        url="http://192.168.1.210:3000/upload"
        style="max-width: 300px"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';
</script>

<style scoped lang="sass"></style>
