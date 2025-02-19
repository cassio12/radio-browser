import { defineStore } from "pinia";
import { ref } from "vue";
import type { Station } from "~/interfaces/stations";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    stations: [] as Station[],
  }),

  actions: {
    addStation(station: Station) {
      const exists = this.stations.some(
        (i) => i.changeuuid === station.changeuuid
      );
      if (!exists) {
        this.stations.push(station);
      }
    },
    removeStation(id: string) {
      this.stations = [
        ...this.stations.filter((station) => station.changeuuid !== id),
      ];
    },
  },
});
