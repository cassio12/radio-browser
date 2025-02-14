<script setup lang="ts">
import data from "../data.json";
</script>

<template>
  <div
    class="w-1/4 h-full overflow-y-auto flex items-center flex-col bg-gray-800 p-3"
  >
    <input
      class="rounded-md border-solid bg-gray-500 text-white p-1 ps-4 pe-2"
      type="text"
      placeholder="Shearch here"
    />
    <ul
      class="mt-5 h-full overflow-y-auto no-scrollbar flex flex-col justify-between"
    >
      <a href="/">
        <li
          v-for="item in data"
          class="text-white p-2 rounded-md bg-gray-600 mt-4"
        >
          {{ item.name }}
        </li>
      </a>
    </ul>
  </div>
</template>
