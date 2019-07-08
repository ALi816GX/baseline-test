'use strict';

function collectSameElements(collectionA, collectionB) {

  const collectionC = [];
  for(i = 0;i < collectionA.length;i++){
    for(j = 0;j < collectionB.length;j++){
      for(k = 0;k < collectionB[j].length;k++){
      if(collectionA[i] == collectionB[j][k]){
        collectionC.add(collectionA[i]);
        continue;
        }
      }
    }
  }

  return collectionC;
}
