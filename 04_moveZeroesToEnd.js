function moveZeroesToEnd(arr){
    let insertPos = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !==0){
            if(i!==insertPos){
                [arr[insertPos], arr[i]] = [arr[i], arr[insertPos]];
            }
            insertPos++;
        }
        
    }
    return arr;
}

const arr=[1,0,2,4,0,3,0,6,7,4,0,3];
const result=moveZeroesToEnd(arr);
console.log(result)