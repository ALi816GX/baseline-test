'use strict';

function collectSameElements(collectionA, collectionB) {

   const collectionC = [];
   for（i = 0；i<collectionA.length;i++）{
    for(j = 0;j < collectionB.length;j++){
      if(collectionA[i] == collectionB[j]){
        collectionC.add(collectionA[i]);
        continue;
      }
    }
   }

  return collectionC;
}
