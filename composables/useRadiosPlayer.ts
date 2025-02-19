import { ref, onUnmounted, watch } from "vue";
import { usePlayerStore } from "@/stores/currentPlay";

export default function useRadioPlayer(id: string, url: string) {
  const isPlaying = ref(false);
  const audio = new Audio(url);
  const playerStore = usePlayerStore();

  const play = () => {
    if (playerStore.activePlayer !== id) {
      playerStore.setActivePlayer(id); // Define este player como ativo
      audio
        .play()
        .then(() => {
          isPlaying.value = true;
        })
        .catch((error) => console.error("Erro ao reproduzir:", error));
    }
  };

  const pause = () => {
    if (playerStore.activePlayer === id) {
      playerStore.setActivePlayer(null); // Remove o player ativo
      audio.pause();
      isPlaying.value = false;
    }
  };

  // Se outro player for ativado, este deve parar
  watch(
    () => playerStore.activePlayer,
    (newActive) => {
      if (newActive !== id) {
        audio.pause();
        isPlaying.value = false;
      }
    }
  );

  onUnmounted(() => {
    audio.pause();
    audio.src = ""; // Limpa o áudio ao desmontar o componente
  });

  return { isPlaying, play, pause };
}
