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
      <h2 class="text-lg text-gray-600">
        as lazy as you
      </h2>
    </div>

    <!-- generators -->
    <div class="flex justify-center items-center flex-wrap -mx-1 mb-16">
      <div
        v-for="(generator, index) of generators"
        :key="index"
        class="px-1"
      >
        <Generator ref="generators" />
      </div>

      <!-- buttons -->
      <div class="px-1">
        <div class="rounded overflow-hidden shadow-md">
          <div class="flex bg-gray-300">
            <button
              @click="removeGenerator"
              class="flex-1 hover:bg-gray-400 font-bold text-gray-700 border-r border-gray-400 px-2 py-1"
            >
              -
            </button>

            <button
              @click="addGenerator"
              class="flex-1 hover:bg-gray-400 font-bold text-gray-700 px-2 py-1"
            >
              +
            </button>
          </div>

          <button
            @click="generate"
            class="bg-gray-500 text-white font-semibold px-3 py-2"
            :class="{
              'hover:bg-gray-400': generators.length > 0,
              'cursor-not-allowed': generators.length === 0
            }"
            :disabled="generators.length === 0"
          >
            generate
          </button>
        </div>
      </div>
    </div>

    <!-- generated names -->
    <div class="xl:w-1/2 mx-auto -mb-1">
      <input
        v-for="(missionName, index) of missionNames"
        :key="index"
        :value="missionName"
        class="w-full text-center text-lg bg-gray-100 rounded border border-gray-200 outline-none mb-1 px-2 py-1"
        @focus="$event.target.select()"
      >
    </div>
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

  private addGenerator() {
    this.generators.push(this.generators.length.toString())
  }

  private removeGenerator() {
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
