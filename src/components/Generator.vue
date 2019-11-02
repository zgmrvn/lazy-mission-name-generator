<template>
  <div class="w-32 bg-gray-100 rounded shadow-md px-2 py-1">
    <div
      v-for="(group, index) in groups"
      :key="index"
    >
      <label class="text-sm">
        <input
          v-model="selectedGroups"
          type="checkbox"
          :value="group.name"
          class="align-middle"
        >
        {{ group.name }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import groups from '@/misc/words/index'
import { Group } from '@/interfaces/Group'

@Component
export default class Generator extends Vue {
  private selectedGroups: string[]

  constructor() {
    super()

    const availableGroups: string[] = groups.map(g => g.name)

    this.selectedGroups = [availableGroups[Math.floor(Math.random() * availableGroups.length)]]
  }

  get groups(): Group[] {
    return groups
  }

  get selectedWords(): string[] {
    const result: string[] = []
    const selectedGroups: string[][] = groups.filter(g => this.selectedGroups.includes(g.name)).map(g => g.words)

    return result.concat.apply([], selectedGroups)
  }

  select(): string {
    return this.selectedWords[Math.floor(Math.random() * this.selectedWords.length)]
  }
}
</script>
