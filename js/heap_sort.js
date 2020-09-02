const heap = (length,index)=>{
    let largest = index;
    const left_child = (index * 2) + 1;
    const right_child = (index * 2  ) + 2;

    if(left_child < length && arrayHeight[left_child] > arrayHeight[largest]){
        largest = left_child;
    }
    if(right_child < length && arrayHeight[right_child] > arrayHeight[largest]){
        largest = right_child;
    }
    if(largest !== index){
        swap_elements(index, largest);
        heap(length,largest);
    }
};

const heap_sort = () =>{
    
    for(let i = Math.floor(arraySize/2) - 1; i >=0; i--){
        heap(arraySize,i);
    }

    for(let i = arraySize - 1; i > 0; i--){
        swap_elements(0,i);
        heap(i,0);
    }

};