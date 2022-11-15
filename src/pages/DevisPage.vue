<template>
  <q-page class="flex flex-center">
    <div class="row items-start q-gutter-md">
      <q-card class="shadow-10 q-card--bordered" style="height: 800px">
        <q-toolbar>
          <q-toolbar-title> Commande </q-toolbar-title>
        </q-toolbar>
        <div style="margin: 15px">
          <div class="col column q-gutter-md">
            <q-input
              outlined
              type="number"
              label="Commande"
              stack-label
              v-model="BC"
              @focus="clear('BC')"
            ></q-input>
            <q-input
              outlined
              type="number"
              label="Affaire"
              stack-label
              v-model="AFF"
              @focus="clear('AFF')"
            ></q-input>
            <q-btn @click="find" color="primary" label="Recherche" />
          </div>
        </div>
      </q-card>
      <q-card
        class="shadow-10 q-card--bordered"
        style="height: 800px; min-width: 1000px"
      >
        <q-toolbar>
          <q-toolbar-title>Article</q-toolbar-title>
        </q-toolbar>
        <div style="margin: 15px">
          <q-table
            class="my-sticky-header-table"
            style="height: 715px"
            flat
            bordered
            :rows="data"
            :columns="columns"
            row-key="article"
            separator="cell"
            :rows-per-page-options="[0]"
            virtual-scroll
            v-model:selected="selected"
            :loading="loading"
          >
            <template v-slot:loading>
              <q-inner-loading showing color="primary" />
            </template>
          </q-table>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

const data = ref([]);

const BC = ref();
const AFF = ref();
const loading = ref(false);

const columns = [
  {
    name: 'fournisseur',
    required: true,
    align: 'left',
    label: 'Fournisseur',
    headerStyle: 'width: 90px',
    field: (row) => row.COFOU,
  },
  {
    name: 'cobc',
    required: true,
    align: 'left',
    label: 'Commande',
    headerStyle: 'width: 90px',
    field: 'COBC',
  },
  {
    name: 'naf',
    required: true,
    align: 'left',
    label: 'Affaire',
    headerStyle: 'width: 70px',
    field: 'NAF',
  },
  {
    name: 'article',
    required: true,
    align: 'left',
    label: 'Arcticle',
    field: 'ART',
  },
  {
    name: 'desa1',
    required: true,
    align: 'left',
    label: 'Descriptif 1',
    field: 'DESA1',
  },
  {
    name: 'desa2',
    required: true,
    align: 'left',
    label: 'Descriptif 2',
    field: 'DESA2',
  },
  {
    name: 'desa3',
    required: true,
    align: 'left',
    label: 'Descriptif 3',
    field: 'DESA3',
  },
  {
    name: 'quantite',
    required: true,
    align: 'left',
    label: 'Quantité',
    headerStyle: 'width: 90px',
    field: 'QTE',
  },
];

function clear(input) {
  if (input == 'BC') {
    AFF.value = '';
  } else if (input == 'AFF') {
    BC.value = '';
  }
}

function find() {
  // GET request for remote image in node.js

  if (AFF.value || BC.value) {
    const paramsBC = BC.value;
    const paramsAFF = AFF.value;

    api
      .get('/BC', {
        params: {
          BC: paramsBC,
          AFF: paramsAFF,
        },
      })
      .then(function (response) {
        data.value = response.data;
      })
      .catch(function (error) {
        alert(error);
      })
      .then(function () {
        // dans tous les cas
      });
  }
}

//event clavier
/*
function onKey(evt) {
  if (evt.keyCode === 13) {
    find();
  }
}
*/

//select * from OBSDEVIS where COPIECE like '%8960%'
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #e20326

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  .q-table th
   font-size: 14px
   color: white

  .q-table__bottom
   font-size: 14px
   color: white
</style>
