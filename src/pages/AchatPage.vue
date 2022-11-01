<template>
  <q-page class="flex flex-center">
    <div class="row items-start q-gutter-md">
      <q-card class="shadow-10 q-card--bordered" style="height: 800px">
        <q-toolbar>
          <q-toolbar-title> Commande </q-toolbar-title>
        </q-toolbar>
        <div style="margin: 10px">
          <div class="col column q-gutter-sm">
            <q-input
              outlined
              type="number"
              label="Commande"
              stack-label
              v-model="BC"
            ></q-input>
            <q-input
              outlined
              type="number"
              label="Affaire"
              stack-label
              v-model="AFF"
              disable
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
    field: (row) => row.COFOU,
  },
  {
    name: 'naf',
    required: true,
    align: 'left',
    label: 'Affaire',
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
    field: 'QTE',
  },
];

const data1 = [
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36205,
    ART: 'PRECADRE BALCON11111111111111111',
    DESA1: 'RAL 7016 SAT111111111111111111',
    DESA2: '111111111111111111111111111111',
    DESA3: '111111111111111111111111111111',
    QTE: 2,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36206,
    ART: 'PRECADRE SIMPLE ETROIT        ',
    DESA1: 'RAL 7004 MAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 5,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36207,
    ART: 'PRECADRE SIMPLE ETROIT        ',
    DESA1: 'RAL 7016 SAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 8,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36208,
    ART: 'PRECADRE DOUBLE  2/3          ',
    DESA1: 'RAL 7016 SAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 2,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36208,
    ART: 'PRECADRE SIMPLE               ',
    DESA1: 'RAL 7004 MAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 2,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36209,
    ART: 'PRECADRE SIMPLE               ',
    DESA1: 'RAL 7016 SAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 4,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36210,
    ART: 'PRECADRE DOUBLE               ',
    DESA1: 'RAL 7016 SAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 20,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36211,
    ART: 'PRECADRE BALCON               ',
    DESA1: 'RAL 7004 MAT                  ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 2,
  },
  {
    COFOU: 'CHRON',
    COCLI: '     ',
    NAF: 36212,
    ART: 'PRECADRE JDB                  ',
    DESA1: 'RAL                           ',
    DESA2: '                              ',
    DESA3: '                              ',
    QTE: 10,
  },
];

function find() {
  // GET request for remote image in node.js
  const idBC = BC.value;
  api
    .get('/BC', {
      params: {
        id: idBC,
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

//event clavier
function onKey(evt) {
  if (evt.keyCode === 13) {
    find();
  }
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
