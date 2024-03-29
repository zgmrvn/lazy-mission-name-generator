<template>
  <div
    id="app"
    class="container mx-auto px-4 py-8"
  >
    <!-- title -->
    <div class="text-center mb-16 leading-tight">
      <h1 class="text-3xl text-gray-900">
        Lazy Mission Name Generator
      </h1>
      <h2 class="text-lg text-teal-400">
        as lazy as you
      </h2>
    </div>

    <!-- buttons -->
    <p class="text-center text-sm text-gray-600 mb-1">
      Add at least one generator then press generate.
    </p>

    <div class="flex justify-center">
      <div class="inline-flex rounded shadow-md">
        <button
          @click="removeGenerator"
          class="bg-gray-400 font-bold text-gray-700 rounded-l border-r border-white px-4 py-1 transition-bg-200"
          :class="{
            'hover:bg-gray-500': generators.length > 0,
            'cursor-not-allowed': generators.length === 0
          }"
        >
          -
        </button>

        <button
          @click="addGenerator"
          class="bg-gray-400 hover:bg-gray-500 font-bold text-gray-700 border-r border-white px-4 py-1 transition-bg-200"
        >
          +
        </button>

        <button
          @click="generate"
          class="bg-teal-400 text-white font-semibold rounded-r px-4 py-1 transition-bg-200"
          :class="{
            'hover:bg-teal-500': generators.length > 0,
            'cursor-not-allowed': generators.length === 0
          }"
          :disabled="generators.length === 0"
        >
          generate
        </button>
      </div>
    </div>

    <!-- generators -->
    <div
      v-show="generators.length > 0"
      class="mt-8"
    >
      <div class="flex justify-center items-center flex-wrap -m-1">
        <div
          v-for="(generator, index) of generators"
          :key="index"
          class="p-1 w-1/2 sm:w-32"
        >
          <Generator ref="generators" />
        </div>
      </div>
    </div>

    <!-- generated names -->
    <div
      v-show="missionNames.length > 0"
      class="mt-16"
    >
      <div class="-mb-1">
        <input
          v-for="(missionName, index) of missionNames"
          :key="index"
          :value="missionName"
          class="w-full text-center text-lg font-semibold text-gray-800 bg-gray-100 rounded border border-gray-200 outline-none mb-1 px-2 py-1"
          @focus="$event.target.select()"
        >
      </div>
    </div>

    <!-- source -->
    <p class="text-center text-xs text-gray-500 mt-16">
      zgmrvn -
      <a
        href="https://github.com/zgmrvn/lazy-mission-name-generator"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        <fontAwesomeIcon :icon="['fab', 'github']" />
        source code
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Generator from '@/components/Generator.vue'

@Component({
  components: {
    Generator
  }
})
export default class App extends Vue {
  $refs!: {
    generators: Generator[]
  }

  private generators: string[] = []
  private missionNames: string[] = []

  private addGenerator(): void {
    this.generators.push(this.generators.length.toString())
  }

  private removeGenerator(): void {
    this.generators.pop()
  }

  private generate(): void {
    this.missionNames = []

    for (let i = 0; i < 10; i++) {
      this.missionNames.push(this.$refs.generators.map(g => g.select()).join(' '))
    }
  }
}
</script>
