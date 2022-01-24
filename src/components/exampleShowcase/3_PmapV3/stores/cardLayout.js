import { writable } from 'svelte/store'
import {authenticatedUser} from './authenticatedUser'
import {users} from './users'
import {dictToKeyArray} from '../../../../functions/utilities/dictFn'
import {findSharedVal} from '../../../../functions/utilities/arrayFn'
import { get } from 'svelte/store';

//GET snapshots for use in functions (These constands will not change in this program)
const authenticatedUser_snp = get(authenticatedUser )
const users_snp = get(users)

//Data
export const fullCardLayout = {
    1:{
        'docViewId':1,
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
                'children':[5], 
                'siblings':[], 
                'level':'word'},
			4:{
                'cardId':4,
                'versionId':1,
                'parentId':null,
                'children':[],   
                'siblings':[], 
                'level':'paragraph'},
            5:{
                'cardId':5,
                'versionId':1,
                'parentId':1,
                'children':[6], 
                'siblings':[], 
                'level':'word'},
            6:{
                'cardId':6,
                'versionId':1,
                'parentId':1,
                'children':[], 
                'siblings':[], 
                'level':'word'}
            },
        },     
}

//METHODS
const getUsersDocViewId = ()=>{
    // get the correct view for the authenticated user
    const userId = authenticatedUser_snp.userId             
    const usersViews = users_snp[userId].documentViews  //all the document views the users has created
    const docViews = dictToKeyArray(fullCardLayout) //all the views in the current document
    return findSharedVal(usersViews,docViews)
}
//CREATE STORE FOR USERS VIEW
const layoutOnly = fullCardLayout[getUsersDocViewId()].layout
export const pointerOverCard = writable(null)
export const cardLayout = writable(layoutOnly)



