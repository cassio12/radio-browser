<script setup lang="ts">
import { type Station } from "~/interfaces/stations";
import { useStationsStore } from "~/stores/stationsList";
import { onMounted } from "vue";
import { $fetch } from "ofetch";
import Favorit from "./page/Favorit.vue";

const radioStore = useStationsStore();

onMounted(async () => {
  if (radioStore.listStations.length === 0) {
    const listChannels = await $fetch<Station[]>(
      "https://de1.api.radio-browser.info/json/stations/search?limit=10"
    );

    if (listChannels) {
      const stations = listChannels.map((item) => ({
        changeuuid: item.changeuuid,
        name: item.name,
        url: item.url,
        url_resolved: item.url_resolved,
        favicon: item.favicon,
        countrycode: item.countrycode,
        country: item.country,
      }));

      stations.forEach((station) => radioStore.addStation(station)); // Adiciona todas as estações de uma vez
    }
  }
});
</script>

<template>
  <div class="h-screen flex flex-row">
    <SideBar />
    <Favorit />
  </div>
</template>
