<template>
  <q-page class="flex flex-center">
    <div class="column items-start q-col-gutter-md">
      <div class="fit">
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title> Recherche </q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <div class="row q-gutter-md">
              <q-input
                outlined
                label="référence"
                stack-label
                v-model="reference"
                @focus="clear"
              ></q-input>
              <q-btn @click="getDevis" color="primary" label="Recherche" />
            </div>
          </div>
        </q-card>
      </div>
      <div class="row items-start q-gutter-md">
        <q-card class="shadow-10 q-card--bordered" style="height: 600px">
          <q-toolbar>
            <q-toolbar-title> Devis Alma</q-toolbar-title>
          </q-toolbar>

          <q-table
            class="my-sticky-header-table"
            style="margin: 15px; height: 520px; min-width: 500px"
            flat
            bordered
            :rows="rows.devisAlma"
            :columns="columns"
            row-key="devis"
            separator="cell"
            :rows-per-page-options="[0]"
            virtual-scroll
          >
          </q-table>
        </q-card>

        <q-card class="shadow-10 q-card--bordered" style="height: 600px">
          <q-toolbar>
            <q-toolbar-title> Devis Clipper</q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 520px; min-width: 500px"
              flat
              bordered
              :rows="rows.devisClipper"
              :columns="columns"
              row-key="devis"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
            >
            </q-table>
          </div>
        </q-card>
        <q-card class="shadow-10 q-card--bordered" style="height: 600px">
          <q-toolbar>
            <q-toolbar-title> Affaire Clipper</q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 520px; min-width: 500px"
              flat
              bordered
              :rows="rows.affaireClipper"
              :columns="columns"
              row-key="devis"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
            >
            </q-table>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

//var parametre longueur barre
const reference = ref('');

// info colonne tableau
const columns = [
  {
    name: 'reference',
    required: true,
    align: 'left',
    label: 'Réference',
    field: (row) => row._quote_finalization_item__reference,
  },
  {
    name: 'id',
    required: true,
    align: 'left',
    label: 'Devis',
    headerStyle: 'width: 20%',
    field: 'id__quote_finalization_item__quote_finalization',
  },
  {
    name: 'quantite',
    required: true,
    align: 'left',
    label: 'Quantité',
    headerStyle: 'width: 20%',
    field: '_quote_finalization_item__quantity',
  },
  {
    name: 'prix',
    required: true,
    align: 'left',
    label: 'Prix',
    headerStyle: 'width: 20%',
    field: 'timestamp__quote_finalization_item',
  },
];

const rows = ref({ devisAlma: [], devisClipper: [], affaireClipper: [] });

function getDevis() {
  // GET request for remote image in node.js

  if (reference.value != '') {
    api
      .get('/PG', {
        params: {
          REF: reference.value,
        },
      })
      .then(function (response) {
        console.log(response.data);
        rows.value = response.data;
        //loading.value = false;
      })
      .catch(function (error) {
        alert(error);
      })
      .then(function () {
        // dans tous les cas
      });
  }
}

//suprime toute les entrees
function DeleteAll() {
  rows.value = [];
}

//suprime toute les entrees selectionner
function Delete() {
  if (ticked.value.length) {
    console.log('ok');
  }
}

function clear() {
  reference.value = '';
}
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
