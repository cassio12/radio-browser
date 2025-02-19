<script setup lang="ts">
import { useStationsStore } from "../stores/stationsList";
import { useFavoriteStore } from "@/stores/favoriteList";
const { listStations } = useStationsStore();
const { addStation } = useFavoriteStore();
</script>

<template>
  <div
    class="w-1/4 h-full overflow-y-auto no-scroll-x flex items-center flex-col bg-gray-800 p-3"
  >
    <input
      class="rounded-md border-solid bg-gray-500 text-white p-1 ps-4 pe-2"
      type="text"
      placeholder="Shearch here"
    />
    <ul
      class="mt-5 h-full overflow-y-auto no-scrollbar flex flex-col justify-between"
    >
      <li
        v-for="item in listStations"
        class="text-white flex flex-row justify-between items-center p-2 rounded-md bg-gray-600 mt-4 hover:scale-100 scale-95"
      >
        {{ item.name }}
        <Icon
          @click="addStation(item)"
          name="mingcute:add-fill"
          size="20"
          color="green"
          class="cursor-pointer"
        />
      </li>
    </ul>
  </div>
</template>
