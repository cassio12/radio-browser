import type { Station } from "~/interfaces/stations";
import { ref, onMounted, watchEffect } from "vue";
import { defineStore } from "pinia";
import Dexie from "dexie";

class RadioDB extends Dexie {
  stations: Dexie.Table<Station, string>;

  constructor() {
    super("RadioDB");
    this.version(1).stores({
      stations: "changeuuid, name, url, country",
    });
    this.stations = this.table("stations");
  }
}

const db = new RadioDB();

export const useStationsStore = defineStore("stations", () => {
  const listStations = ref<Station[]>([]);

  // Carregar estações do IndexedDB
  const loadStations = async () => {
    if (process.client) {
      listStations.value = await db.stations.toArray();
    }
  };

  // Adicionar uma estação
  const addStation = async (station: Station) => {
    if (process.client) {
      const exists = await db.stations.get(station.changeuuid);
      if (!exists) {
        await db.stations.add(station);
        await loadStations(); // Atualiza a lista
      }
    }
  };

  // Remover uma estação
  const removeStation = async (changeuuid: string) => {
    if (process.client) {
      await db.stations.delete(changeuuid);
      await loadStations(); // Atualiza a lista
    }
  };

  // 🔹 Garante que só roda no cliente
  onMounted(() => {
    loadStations();
  });

  return { listStations, loadStations, addStation, removeStation };
});
