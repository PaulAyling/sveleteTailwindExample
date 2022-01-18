import { writable } from 'svelte/store'

export const currentDoc = writable({
    'curUsersView':1,
    hoveringOverCard:''
})
