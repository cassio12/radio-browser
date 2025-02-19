<script setup lang="ts">
import useRadioPlayer from "~/composables/useRadiosPlayer";

const props = defineProps<{ url: string; id: string }>();
const { isPlaying, play, pause } = useRadioPlayer(props.url, props.id);

console.log(props.url);
</script>

<template>
  <button
    class="bg-gray-600 rounded-full h-14 w-14 flex items-center justify-center cursor-pointer"
    @click="isPlaying ? pause() : play()"
  >
    <Icon v-if="isPlaying" size="20" name="uil:pause" />
    <Icon v-else size="20" name="uil:play" />
  </button>
</template>
