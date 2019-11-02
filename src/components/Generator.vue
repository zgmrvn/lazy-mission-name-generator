<template>
  <div class="bg-gray-600 rounded shadow-md px-2 py-1">
    <div
      v-for="(group, index) in groups"
      :key="index"
    >
      <label class="text-sm text-white">
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

  public select(): string {
    const selectedGroups: Group[] = groups.filter(g => this.selectedGroups.includes(g.name))
    const group: Group = selectedGroups[Math.floor(Math.random() * selectedGroups.length)]
    const word: string = group.words[Math.floor(Math.random() * group.words.length)]

    return word
  }
}
</script>
