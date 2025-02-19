import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const activePlayer = ref<string | null>(null); // ID do player ativo

  const setActivePlayer = (id: string | null) => {
    activePlayer.value = id;
  };

  return { activePlayer, setActivePlayer };
});
