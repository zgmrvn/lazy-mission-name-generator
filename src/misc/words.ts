import { Group } from '@/interfaces/Group'

const animals: Group = {
  name: 'animals',
  words: [
    'hawk',
    'snale',
    'dog'
  ]
}

const colors: Group = {
  name: 'colors',
  words: [
    'blue',
    'red',
    'green',
    'yellow'
  ]
}

const words: Group[] = [
  animals,
  colors
]

export default words
