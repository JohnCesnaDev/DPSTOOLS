<template>
  <q-page class="flex flex-center">
    <div class="column items-start">
      <q-uploader url="http://localhost:9100/upload" style="max-width: 300px" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';
</script>

<style scoped lang="sass"></style>
