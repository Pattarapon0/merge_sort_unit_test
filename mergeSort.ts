export function merge (collection_1: number[], collection_2: number[], collection_3: number[]) : number[]{
    let mergedArray: number[] = collection_1.concat(collection_2, collection_3);
    let groupeSize=1;
    while(groupeSize < mergedArray.length){
        for(let i=0; i<mergedArray.length; i+=groupeSize*2){
            let left = i;
            let mid = Math.min(i + groupeSize - 1, mergedArray.length - 1);
            let right = Math.min(i + 2 * groupeSize - 1, mergedArray.length - 1);
            let leftArray = mergedArray.slice(left, mid + 1);
            let rightArray = mergedArray.slice(mid + 1, right + 1);
            let k = left;
            let l = 0;
            let r = 0;
            while (l < leftArray.length && r < rightArray.length) {
                if (leftArray[l] < rightArray[r]) {
                    mergedArray[k] = leftArray[l];
                    l++;
                } else {
                    mergedArray[k] = rightArray[r];
                    r++;
                }
                k++;
            }
            while (l < leftArray.length) {
                mergedArray[k] = leftArray[l];
                l++;
                k++;
            }
            while (r < rightArray.length) {
                mergedArray[k] = rightArray[r];
                r++;
                k++;
            }
        }
        groupeSize *= 2;
    }
    return mergedArray;
}