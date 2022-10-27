<template>
  <q-page class="flex flex-center">
    <div class="column q-col-gutter-md">
      <div>
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title> Dossier </q-toolbar-title>
            <q-input
              dense
              outlined
              v-model="text"
              style="width: 600px; margin: 15px"
            ></q-input>
            <q-btn size="xl" flat icon="folder_open" />
          </q-toolbar>
        </q-card>
      </div>
      <div class="row items-start q-gutter-md">
        <q-card class="shadow-10 q-card--bordered" style="height: 800px">
          <q-toolbar>
            <q-toolbar-title> Fichier </q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <div class="col column q-gutter-md">
              <q-input dense outlined v-model="text" @keydown="onKey"></q-input>
              <q-btn @click="Add" color="primary" label="Ajouter" />
              <q-btn color="primary" label="Rechercher" />
              <q-btn color="primary" label="Imprimer" />
              <q-btn @click="Delete" color="primary" label="Suprimer" />
              <q-btn @click="DeleteAll" color="primary" label="Tous suprimer" />
            </div>
          </div>
        </q-card>
        <div class="col">
          <q-card class="shadow-10 q-card--bordered" style="height: 800px">
            <q-toolbar>
              <q-toolbar-title> Liste </q-toolbar-title>
            </q-toolbar>
            <div style="margin: 15px">
              <q-scroll-area style="height: 780px; width: 400px">
                <q-tree
                  class="col-12 col-sm-6"
                  :nodes="objectTree.label"
                  node-key="labelkey"
                  no-nodes-label="Liste"
                  tick-strategy="leaf"
                  v-model:selected="objectTree.selected"
                  v-model:ticked="objectTree.ticked"
                  v-model:children="objectTree.children"
                >
                </q-tree>
              </q-scroll-area>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { stringifyQuery } from 'vue-router';

const objectTree = ref({});
objectTree.value.label = [];
objectTree.value.labelkey = [];
objectTree.value.selected = [];
objectTree.value.ticked = [];

const text = ref('ok');

//ajout entree
function Add() {
  if (text.value != '') {
    if (
      objectTree.value.label.find((element) => element.label == text.value) ===
      undefined
    ) {
      objectTree.value.label.push({ label: text.value, children: [] });
      text.value = '';
    }
  }
}

//suprime toute les entrees
function DeleteAll() {
  simple.value = [];
}

//suprime toute les entrees selectionner
function Delete() {
  if (ticked.value.length) {
    console.log('ok');
  }
}

//event clavier
function onKey(evt) {
  if (evt.keyCode === 13) {
    Add();
  }
}
</script>
