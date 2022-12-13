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
        <q-card class="shadow-10 q-card--bordered" style="height: 700px">
          <q-toolbar>
            <q-toolbar-title v-if="tab == 'devisAlma'"
              >Devis alma</q-toolbar-title
            >
            <q-toolbar-title v-if="tab == 'devisClipper'"
              >Devis clipper</q-toolbar-title
            >
            <q-toolbar-title v-if="tab == 'affaireClipper'"
              >Affaire clipper</q-toolbar-title
            >
            <q-tabs v-model="tab" class="text-primary">
              <q-tab name="devisAlma" icon="mail" label="Devis alma">
                <q-badge v-if="tabNotifDevisAlma != 0" color="grey" floating>{{
                  tabNotifDevisAlma
                }}</q-badge>
              </q-tab>
              <q-tab name="devisClipper" icon="alarm" label="Devis clipper">
                <q-badge
                  v-if="tabNotifDevisClipper != 0"
                  color="grey"
                  floating
                  >{{ tabNotifDevisClipper }}</q-badge
                >
              </q-tab>
              <q-tab name="affaireClipper" icon="movie" label="Affaire clipper">
                <q-badge
                  v-if="tabNotifAffaireClipper != 0"
                  color="grey"
                  floating
                  >{{ tabNotifAffaireClipper }}</q-badge
                >
              </q-tab>
            </q-tabs>
          </q-toolbar>

          <div v-if="tab == 'devisAlma'" style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 590px; min-width: 1024px"
              flat
              bordered
              :rows="rows.devisAlma"
              :columns="columnsDevisAlma"
              row-key="devis"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
            >
            </q-table>
          </div>

          <div v-if="tab == 'devisClipper'" style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 590px; min-width: 1024px"
              flat
              bordered
              :rows="rows.devisClipper"
              :columns="columnsDevisClipper"
              row-key="devis"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
            >
            </q-table>
          </div>

          <div v-if="tab == 'affaireClipper'" style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 590px; min-width: 1024px"
              flat
              bordered
              :rows="rows.affaireClipper"
              :columns="columnsAffaireClipper"
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
import { ref, inject } from 'vue';
import { api } from 'boot/axios';

//var parametre longueur barre
const reference = ref('');
const tab = ref('devisAlma');
const tabNotifDevisAlma = ref(0);
const tabNotifDevisClipper = ref(0);
const tabNotifAffaireClipper = ref(0);

// info colonne tableau
const columnsDevisAlma = [
  {
    name: 'devis',
    required: true,
    align: 'left',
    label: 'Devis',
    headerStyle: 'width: 20%',
    field: 'id__quote_finalization_item__quote_finalization',
    format: (val, row) => (val = 1 + val),
  },
  {
    name: 'reference',
    required: true,
    align: 'left',
    label: 'Réference',
    field: (row) => row._quote_finalization_item__reference,
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
    field: '_quote_finalization_item__franco_unit_cost',
  },
  {
    name: 'date',
    required: true,
    align: 'left',
    label: 'Date',
    headerStyle: 'width: 20%',
    field: 'timestamp__quote_finalization_item',
    format: (val, row) =>
      `${val.substring(8, 10)}/${val.substring(5, 7)}/${val.substring(0, 4)}`,
  },
];

const columnsDevisClipper = [
  {
    name: 'devis',
    required: true,
    align: 'left',
    label: 'Devis',
    headerStyle: 'width: 20%',
    field: 'id__quote_finalization_item__quote_finalization',
    format: (val, row) => (val = val + 10000),
  },
  {
    name: 'reference',
    required: true,
    align: 'left',
    label: 'Réference',
    field: (row) => row._quote_finalization_item__reference,
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
    field: '_quote_finalization_item__franco_unit_cost',
  },
  {
    name: 'date',
    required: true,
    align: 'left',
    label: 'Date',
    headerStyle: 'width: 20%',
    field: 'timestamp__quote_finalization_item',
  },
];

const columnsAffaireClipper = [
  {
    name: 'devis',
    required: true,
    align: 'left',
    label: 'Devis',
    headerStyle: 'width: 20%',
    field: 'id__quote_finalization_item__quote_finalization',
    format: (val, row) => (val = 1 + val),
  },
  {
    name: 'reference',
    required: true,
    align: 'left',
    label: 'Réference',
    field: (row) => row._quote_finalization_item__reference,
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
    field: '_quote_finalization_item__franco_unit_cost',
  },
  {
    name: 'date',
    required: true,
    align: 'left',
    label: 'Date',
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
          REF: reference.value.toLowerCase(),
        },
      })
      .then(function (response) {
        console.log(response.data);
        rows.value = response.data;
        //loading.value = false;

        tabNotifDevisAlma.value = rows.value.devisAlma.length;
        tabNotifDevisClipper.value = rows.value.devisClipper.length;
        tabNotifAffaireClipper.value = rows.value.affaireClipper.length;
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
