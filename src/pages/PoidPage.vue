<template>
  <q-page class="flex flex-center">
    <div class="column items-start">
      <div class="Poid q-gutter-md">
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar class="bg-primary text-white">
            <q-toolbar-title>Calcule poids tôle</q-toolbar-title>
            <q-space />
            <div style="font-size: 21px">poids = {{ poidTotal }}kg</div>
          </q-toolbar>
        </q-card>
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title>Matière</q-toolbar-title>
          </q-toolbar>
          <div style="margin: 10px">
            <div class="column">
              <q-btn-toggle
                v-model="matiere"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: 'Acier', value: 7.8 },
                  { label: 'Inox', value: 8.02 },
                  { label: 'Alu', value: 2.74 },
                  { label: 'Cuivre', value: 8.92 },
                  { label: 'Laiton', value: 8.3 },
                ]"
              />
            </div>
          </div>
        </q-card>
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title>Dimension</q-toolbar-title>
          </q-toolbar>
          <div style="margin: 10px">
            <div class="column">
              <q-btn-toggle
                v-model="dimension"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: '2000x1000', value: 2 },
                  { label: '2500x1250', value: 3.125 },
                  { label: '3000x1500', value: 4.5 },
                  { label: '4000x1500', value: 6 },
                  { label: '4000x2000', value: 8 },
                ]"
              />
            </div>
          </div>
        </q-card>
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title>Epaisseur</q-toolbar-title>
          </q-toolbar>
          <div style="margin: 10px">
            <div class="column">
              <q-btn-toggle
                v-model="epaisseur"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: '10/10', value: 1 },
                  { label: '15/10', value: 1.5 },
                  { label: '20/10', value: 2 },
                  { label: '25/10', value: 2.5 },
                  { label: '30/10', value: 3 },
                ]"
              />
              <q-btn-toggle
                v-model="epaisseur"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: '4mm', value: 4 },
                  { label: '5mm', value: 5 },
                  { label: '6mm', value: 6 },
                  { label: '8mm', value: 8 },
                  { label: '10mm', value: 10 },
                ]"
              />
              <q-btn-toggle
                v-model="epaisseur"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: '12mm', value: 12 },
                  { label: '15mm', value: 15 },
                  { label: '20mm', value: 20 },
                  { label: '25mm', value: 25 },
                  { label: '30mm', value: 30 },
                ]"
              />
            </div>
          </div>
        </q-card>
        <q-card class="shadow-10 q-card--bordered">
          <q-toolbar>
            <q-toolbar-title>Quantité</q-toolbar-title>
            <q-space />
            <div style="font-size: 21px">
              <q-btn
                color="primary"
                dense
                label="-"
                :disable="quantite === 1 || quantite === undefined"
                @click="
                  quantite--;
                  calcule();
                "
              />
              {{ quantite }}
              <q-btn
                color="primary"
                dense
                label="+"
                :disable="quantite === undefined"
                @click="
                  quantite++;
                  calcule();
                "
              />
            </div>
          </q-toolbar>
          <div style="margin: 10px">
            <div class="column">
              <q-btn-toggle
                v-model="quantite"
                @update:model-value="calcule"
                push
                glossy
                toggle-color="primary"
                :options="[
                  { label: '1', value: 1 },
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '50', value: 50 },
                  { label: '100', value: 100 },
                ]"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';

const matiere = ref();
const dimension = ref();
const epaisseur = ref();
const quantite = ref();
const poidTotal = ref();

function calcule() {
  if (
    matiere.value != undefined &&
    dimension.value != undefined &&
    epaisseur.value != undefined &&
    quantite.value != undefined
  ) {
    let result =
      matiere.value * dimension.value * epaisseur.value * quantite.value;
    poidTotal.value = result.toFixed(2);
  }
}
</script>

<style lang="sass">
.Poid .q-btn
  width: 100px

.q-toolbar .q-btn
  width: 30px

.q-toolbar__title
  min-width: 250px
</style>
