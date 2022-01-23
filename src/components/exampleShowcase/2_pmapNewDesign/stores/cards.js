import { writable } from 'svelte/store'
import {authenticatedUser} from './authenticatedUser'
import {users} from './users'
import {dictToKeyArray} from '../../../../functions/utilities/dictFn'
import { get } from 'svelte/store';

// Data {methods below with store output}
 const importedCards = {
    1: 
      {
      componentId: 1,
        url: "tbc",
          allTags: ["lesiure", "sport", "machines"],
          usersVersion:{
                  // userId:{ userId :1, versionId :1}
                          1:{'userId':1,'versionId':1},
                          2:{'userId':2,'versionId':2},
                      },
      versions: 
          {
        1: 
              {
          title: "Which Bicycle Should I Buy",
          imageUrl:
            "https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
          notes: "tbc",
        },
        2: 
              {
          title: "About Bicycles2",
          imageUrl:
            "https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
          notes: "tbc",
        },
      }
      },
      2: 
      {
          componentId: 2,
          url: "https://en.wikipedia.org/wiki/Road_bicycle",
          allTags: ["road", "sport"],
          usersVersion:{
                      1:{'userId':1,'versionId':1},
                      2:{'userId':2,'versionId':2},
                  },
          versions: 
          {
              1: {
                  title: "Road Bikes",
                  imageUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg/300px-Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg",
                  notes: "Road racing can be fun...",
              }
          }
      },
      9: 
      {
          componentId: 3,
          url: "https://en.wikipedia.org/wiki/Mountain_biking",
          allTags: ["road", "sport"],
          usersVersion:{
                      1:{'userId':1,'versionId':2},
                      2:{'userId':2,'versionId':1},
                  },
          versions: 
          {
              1: {
                  title: "Mountain Bikes",
                  imageUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg",
                  notes:
                      "Mountain bikeing is more fun and very dangerous, and soo exckting!",
              },
              2: {
                  title: "Tricycle",
                  imageUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg",
                  notes:
                      "Mountain bikeing is more fun and very dangerous, and soo exckting!",
              },
          },
    }
  }
// RECONSTRUCT THE ABOVE JUST CONTAINING DATA FOR AUTHENTICATED USER
// 0.1 initialaize vals
const authenticatedUser_snp = get(authenticatedUser )
const userId = authenticatedUser_snp.userId 

// 1. Create dictionary {cardId{cardId:versionId},....}
const createCardIdVersionDict = (importedCards, userId)=>{
  let res = {}
  for (const [key, value] of Object.entries(importedCards)) {
    let newVal = value.usersVersion[userId].versionId
    res = {...res,[key]:newVal}
  } 
  return res
}
const versionIdLookup = createCardIdVersionDict(importedCards, userId)
// 2. Reconstruct tcard with only data for authenticated user.
const createUsersCards = (importedCards, versionIdLookup)=>{
  let res = {}
  for (const [key, value] of Object.entries(importedCards)) {
    let versionNumber = versionIdLookup[key]
    console.log('versionNumber:',versionNumber)

    res = {...res,
      [key]:{
        'componentId':value.componentId,
        'url':value.url,
        'allTags':value.allTags,
        'title':value.versions[versionNumber].title,
        'imageUrl':value.versions[versionNumber].imageUrl,
        'notes':value.versions[versionNumber].notes,
    }}
  } 
  return res
}
const usersCard = createUsersCards(importedCards, versionIdLookup)

// 3. Create a new store containing only records for authenticated user
const test = {
  1:{'id':1,'name':'bob'},2:{'id':2,'name':'bert'}
}

console.log('test:', test[1].name)
console.log('usersCards:', usersCard[1].title)



export const cards = writable(usersCard)