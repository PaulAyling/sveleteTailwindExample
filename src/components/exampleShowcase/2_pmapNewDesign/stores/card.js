import { writable } from 'svelte/store'
import {authenticatedUser} from './authenticatedUser'
import {users} from './users'
import {dictToKeyArray} from '../../../../functions/utilities/arrayFn'
import { get } from 'svelte/store';


// initialaize vals
const userId_snp = get(authenticatedUser.userId)
const usersDocumentViews = users[userId].documentViews
const usersCurrentDocumentView = findSharedVal(usersDocumentViews)


 const importedCards = ({
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
          title: "About Bicycles",
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
                      2:{'userId':2,'versionId':1},
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
      3: 
      {
          componentId: 3,
          url: "https://en.wikipedia.org/wiki/Mountain_biking",
          allTags: ["road", "sport"],
          usersVersion:{
                      1:{'userId':1,'versionId':1},
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
          },
    }
  })

  const mk_usersVersionArr = (importedCards, userId)=>{
    // output dict componentId:versionId for current user
    res = []
    for (const [key, value] of Object.entries(importedCards)) {
      res.push(key+''+value.usersVersion[userId])
    }
     
  }

  // Take imported card and create view of card with only items from current user
  const convertImportToCurrent = (userId,importedCards) =>{
    const docViewArr = dictToKeyArray(dictToKeyArray)
  }


  // Take currentCard and use it to create a files suitable for export



  //Below will be obsolete
const getUsersCard = (cardId)=>{
    userId = authenticatedUser.userId
    usersViewId=1
  }