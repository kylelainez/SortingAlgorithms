const sort_elements = (left, right) =>{



};

const merge_sort = (start, end) =>{
    if(end - start > 1){
        const midpoint = Math.ceil((start+end)/2);
        const left = merge_sort(start, midpoint);
        const right = merge_sort(midpoint+1, end);
        sort_elements(left,right);
        console.log(start, midpoint, midpoint+1, end)
    }else{
        const left = start;
        const right = end;
        sort_elements(left,right);
        console.log(start, end)
    }

}
// update_element(array[y], arrayHeight[y],time,'red');