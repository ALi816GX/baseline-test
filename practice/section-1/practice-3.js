'use strict';

function collectSameElements(collectionA, objectB) {


     const collectionC = [];
     const values = objectB["values"];
     for（i = 0；i<collectionA.length;i++）{

       for(j = 0;j < values.length;j++){
        if(collectionA[i] == values[j]){
           collectionC.add(collectionA[i]);
           continue;
          }
       }
     }

    return collectionC;

}
