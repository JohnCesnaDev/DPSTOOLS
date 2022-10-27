<template>
  <q-page class="flex flex-center">
    <div class="row items-start q-gutter-md">
      <q-card class="shadow-10 q-card--bordered" style="height: 800px">
        <q-toolbar>
          <q-toolbar-title> Toolbar </q-toolbar-title>
        </q-toolbar>
        <div style="margin: 10px">
          <div class="col column q-gutter-sm">
            <q-input outlined v-model="text" @keydown="onKey"></q-input>
            <q-btn @click="getdata" color="primary" label="Ajouter" />
            <q-btn color="primary" label="Rechercher" />
            <q-btn color="primary" label="Imprimer" />
            <q-btn @click="Delete" color="primary" label="Suprimer" />
            <q-btn @click="DeleteAll" color="primary" label="Tous suprimer" />
            {{ data }}
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

const data = ref({});

function getdata() {
  // GET request for remote image in node.js

  api
    .get('/BC', {
      params: {
        id: 2330,
      },
    })
    .then(function (response) {
      data.value = response.data.name;
    })
    .catch(function (error) {
      alert(error);
    })
    .then(function () {
      // dans tous les cas
    });
}
</script>
