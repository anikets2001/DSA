// function to remove duplicates from an array

function removeDuplicates(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    
    return arr;
}


const arr=[1,2,3,2,2,2,5,6,1,3,7,8,9];
const result = removeDuplicates(arr);
console.log(result);