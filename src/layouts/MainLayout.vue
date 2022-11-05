<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>DPS Tools</q-toolbar-title>

        <div>V0.0.5</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="background: grey">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Acceuil',
    caption: "page d'aceuil",
    icon: 'home',
    link: 'acceuil',
  },
  {
    title: 'Achat',
    caption: 'Commande fournisseur',
    icon: 'shopping_cart',
    link: 'achat',
  },
  {
    title: 'Debit Tube',
    caption: 'Calcul Debit Tube',
    icon: 'carpenter',
    link: 'tube',
  },
  {
    title: 'Poid Tôle',
    caption: 'Calcul Poid Tôle',
    icon: 'scale',
    link: 'poid',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
