<template>
  <q-page class="flex flex-center">
    <div class="row items-start q-gutter-md">
      <q-card class="shadow-10 q-card--bordered" style="height: 800px">
        <q-toolbar>
          <q-toolbar-title> Dimension </q-toolbar-title>
        </q-toolbar>
        <div style="margin: 15px">
          <div class="col column q-gutter-md">
            <q-input
              outlined
              type="number"
              label="longueur"
              stack-label
              v-model="longueur"
              @focus="clearL"
            ></q-input>
            <q-input
              outlined
              type="number"
              label="nombre"
              stack-label
              v-model="nombre"
              @focus="clearN"
            ></q-input>
            <q-btn @click="Add" color="primary" label="Ajouter" />
            <q-btn @click="PrintElem" color="primary" label="Imprimer" />
            <q-btn @click="DeleteAll" color="primary" label="Tous suprimer" />
          </div>
        </div>
      </q-card>
      <div>
        <q-card
          class="shadow-10 q-card--bordered"
          style="height: 800px; width: 300px"
        >
          <q-toolbar>
            <q-toolbar-title> Liste </q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 715px"
              flat
              bordered
              selection="single"
              :rows="rows"
              :columns="columns"
              row-key="longueur"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
              v-model:selected="selected"
            />
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card
          id="printMe"
          class="shadow-10 q-card--bordered"
          style="height: 800px; min-width: 400px"
        >
          <q-toolbar>
            <q-toolbar-title> Resultat </q-toolbar-title>
          </q-toolbar>
          <div style="margin: 15px">
            <q-table
              class="my-sticky-header-table"
              style="height: 715px"
              flat
              bordered
              :rows="resultrows"
              :columns="resultcolumns"
              row-key="barre"
              separator="cell"
              :rows-per-page-options="[0]"
              virtual-scroll
            >
              <template v-slot:bottom-row>
                <q-tr>
                  <q-td colspan="100%"> Total: {{ totalbarres }}</q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-card>
      </div>
      <q-card class="shadow-10 q-card--bordered" style="height: 800px">
        <q-toolbar>
          <q-toolbar-title> Paramètres </q-toolbar-title>
        </q-toolbar>
        <div style="margin: 15px">
          <div class="col column q-gutter-md">
            <q-input
              outlined
              type="number"
              label="Longueur des barres"
              stack-label
              v-model="longueurbarre"
            ></q-input>
            <q-input
              outlined
              type="number"
              label="epaisseur de la coupe"
              stack-label
              v-model="epaisseurcoupe"
            ></q-input>
          </div>
        </div>
      </q-card>
    </div>

    <!-- dialog manque longeur-->
    <q-dialog v-model="alertlongueur">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Veuillez entrée une longueur.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- dialog manque longeur-->
    <q-dialog v-model="alertmaxlongueur">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Veuillez entrée une longueur inferieur a la dimention des barres ou
          modifier la taille des barres.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- dialog manque quantiter-->
    <q-dialog v-model="alertquantite">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Veuillez entrée une quantiter.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- dialog ajouter quantiter-->
    <q-dialog v-model="alertconfirme" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm"
            >La longueur existe déjà, voulez-vous ajouter la quantité?</span
          >
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Oui"
            @click="AddQuantite"
            color="primary"
            v-close-popup
          />
          <q-btn flat label="Non" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

//var parametre longueur barre
const longueur = ref(0);
//var epaisseur de coupe
const nombre = ref(0);

//var parametre longueur barre
const longueurbarre = ref(6000);
//var epaisseur de coupe
const epaisseurcoupe = ref(2);

const totalbarres = ref(0);

const alertlongueur = ref(false);
const alertmaxlongueur = ref(false);
const alertquantite = ref(false);
const alertconfirme = ref(false);

const columns = [
  {
    name: 'longueur',
    required: true,
    align: 'left',
    label: 'Longueur',
    field: (row) => row.longueur,
  },
  {
    name: 'quantite',
    required: true,
    align: 'left',
    label: 'Quantité',
    field: 'quantite',
  },
];

const resultcolumns = [
  {
    name: 'barre',
    required: true,
    align: 'left',
    label: 'Barres',
    field: (row) => row.barres,
  },
  {
    name: 'debit',
    required: true,
    align: 'left',
    label: 'Debit',
    field: 'debit',
  },
  {
    name: 'chute',
    required: true,
    align: 'left',
    label: 'Chute',
    field: 'chute',
  },
];

const rows = ref([]);

const resultrows = ref([]);

const selected = ref([]);

//ajout entree
function Add() {
  if (longueur.value == 0 || longueur.value == '') {
    alertlongueur.value = true;
  } else if (longueur.value >= longueurbarre.value) {
    alertmaxlongueur.value = true;
  } else if (nombre.value == 0 || nombre.value == '') {
    alertquantite.value = true;
  } else if (
    rows.value.find((element) => element.longueur == longueur.value) ===
    undefined
  ) {
    rows.value.push({
      longueur: parseInt(longueur.value),
      quantite: parseInt(nombre.value),
    });
  } else {
    alertconfirme.value = true;
  }
  rows.value.sort((x, y) => y.longueur - x.longueur);
  Calcul();
}

//ajoute quantiter sur longueur deja existante
function AddQuantite() {
  rows.value.forEach((element) => {
    if (element.longueur == parseInt(longueur.value)) {
      element.quantite = element.quantite + parseInt(nombre.value);
    }
  });
  rows.value.sort((x, y) => y.longueur - x.longueur);
  Calcul();
}

function Calcul() {
  if (rows.value.length != 0) {
    let temprows = [
      { barres: 0, debit: [], debitstring: '', chute: longueurbarre.value },
    ];

    rows.value.sort((x, y) => y.longueur - x.longueur);
    rows.value.forEach((element) => {
      for (let i = 0; i < element.quantite; i++) {
        let coupe = element.longueur + epaisseurcoupe.value;
        // trouve une chute suffisant pour le debit
        let pos = temprows.findIndex((element2) => coupe < element2.chute);

        if (pos != -1) {
          const found = temprows[pos].debit.find(
            (element) => element.longueur == coupe
          );
          if (found === undefined) {
            temprows[pos].debit.push({
              longueur: element.longueur,
              quantite: 1,
            });
          } else {
            found.quantite++;
          }
          temprows[pos].chute = temprows[pos].chute - coupe;
        } else {
          temprows.push({
            barres: 0,
            debit: [{ longueur: element.longueur, quantite: 1 }],
            debitstring: '',
            chute: longueurbarre.value - coupe,
          });
        }
      }
    });

    temprows.forEach((element) => {
      element.debit.forEach((element1) => {
        element.debitstring +=
          element1.quantite + 'x' + element1.longueur + ' | ';
      });
    });

    resultrows.value = [];
    totalbarres.value = 0;
    temprows.forEach((element) => {
      totalbarres.value++;

      let found = resultrows.value.find(
        (element1) => element1.debit == element.debitstring
      );
      if (found === undefined) {
        resultrows.value.push({
          barres: 1,
          debit: element.debitstring,
          chute: element.chute,
        });
      } else {
        found.barres++;
      }
    });
  }
}

//suprime toute les entrees
function DeleteAll() {
  rows.value = [];
  resultrows = [];
}

//suprime toute les entrees selectionner
function Delete() {
  if (ticked.value.length) {
    console.log('ok');
  }
}

function PrintElem() {
  // Get HTML to print from element
  const prtHtml = document.getElementById('printMe').innerHTML;

  // Get all stylesheets HTML
  let stylesHtml = '';
  for (const node of [
    ...document.querySelectorAll('link[rel="stylesheet"], style'),
  ]) {
    stylesHtml += node.outerHTML;
  }

  // Open the print window
  const WinPrint = window.open(
    '',
    '',
    'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
  );

  WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

  WinPrint.document.close();
  WinPrint.focus();

  return true;
}

function clearL() {
  longueur.value = '';
}
function clearN() {
  nombre.value = '';
}

//event clavier
function onKey(evt) {
  if (evt.keyCode === 13) {
    Add();
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
