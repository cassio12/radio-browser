<script setup lang="ts">
import { useFavoriteStore } from "../stores/favoriteList";
const { stations, removeStation } = useFavoriteStore();
</script>

<template>
  <div class="flex bg-gray-600 w-full flex-col items-center pt-7">
    <h1 class="text-3xl font-bold text-white">Radio Browser</h1>
    <div
      class="flex justify-between flex-row w-11/12 text-white pl-5 pr-5 pb-1"
    >
      <p class="uppercase">favorite radios</p>
      <div>Search stations</div>
    </div>

    <div class="bg-gray-500 w-11/12 h-10/12 rounded-md">
      <div
        class="flex flex-row items-center p-5 pl-13 border-b-2 border-gray-600"
      >
        <Icon size="20px" name="uil:pause" color="white" />
        <p class="pl-3 text-2xl">Nome da radio atual</p>
      </div>
      <ul class="p-3 py-4 overflow-auto h-10/12 no-scrollbar">
        <li
          v-for="item in stations"
          class="p-4 mb-3 bg-gray-400 rounded-md flex flex-row"
        >
          <RadioPlayer :id="item.changeuuid" :url="item.url" />
          <div class="flex flex-row justify-between items-center ml-5 w-full">
            <div>
              <p>{{ item.name }}</p>
              <p>{{ item.country }}, {{ item.countrycode }}</p>
            </div>
            <div>
              <Icon
                class="mr-4 cursor-pointer hover:stroke-green-500"
                name="uil:pen"
                size="23"
              />
              <Icon
                @click="removeStation(item.changeuuid)"
                class="cursor-pointer hover:bg-red-500"
                name="uil:trash"
                size="23"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
