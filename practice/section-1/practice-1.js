'use strict';

function collectSameElements(collectionA, collectionB) {

   const collectionC = [];
   for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j < collectionB.length;j++){
      if(collectionA[i] == collectionB[j]){
        collectionC.push(collectionA[i]);
        continue;
      }
    }
   }

  return collectionC;
}
