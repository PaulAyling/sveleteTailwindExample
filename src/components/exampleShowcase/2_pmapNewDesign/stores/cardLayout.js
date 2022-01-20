import { writable } from 'svelte/store'

export const fullCardLayout = {
    1:{
        'docViewId':1,
        'allCardIds':[1,2,3],
        'docId':1, 
		'apexCardId':1,
        'layout':
            {
             1:{
                'cardId':1,
                'versionId':1,
                'parentId':null,
                'children':[2,3],   
                'siblings':[], 
                'level':'paragraph'},
            2:{
                'cardId':2,
                'versionId':1,
                'parentId':1,
                'children':[4], 
                'siblings':[], 
                'level':'word'},
            3:{
                'cardId':3,
                'versionId':1,
                'parentId':1,
                'children':[5,6], 
                'siblings':[], 
                'level':'word'},
			       4:{
                'cardId':4,
                'versionId':1,
                'parentId':null,
                'children':[2,3],   
                'siblings':[], 
                'level':'paragraph'},
            5:{
                'cardId':5,
                'versionId':1,
                'parentId':1,
                'children':[], 
                'siblings':[], 
                'level':'word'},
            6:{
                'cardId':6,
                'versionId':1,
                'parentId':1,
                'children':[7], 
                'siblings':[], 
                'level':'word'}
            },
        },     
}
const layoutOnly = fullCardLayout[1].layout
export const pointerOverCard = writable(null)
export const cardLayout = writable(layoutOnly)

