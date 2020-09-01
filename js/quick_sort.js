const sort_partition = (start, end)=>{
    let pivot = start,
        left = pivot+1;
        right = end;
        update_element(array[pivot],  arrayHeight[pivot],time,'blue');
        time++;
    while(right >= left){
        update_element(array[left], arrayHeight[left],time,'#ff5976');        
        update_element(array[right],  arrayHeight[right],time,'#ff5976');
        time++;
        if(arrayHeight[pivot] > arrayHeight[right]){    
            if(arrayHeight[left] > arrayHeight[pivot]){
                update_element(array[left],  arrayHeight[left],time,'red');
                update_element(array[right],  arrayHeight[right],time,'red');
                time++;

                let temp = arrayHeight[right];
                arrayHeight[right] = arrayHeight[left];
                arrayHeight[left] = temp;

                update_element(array[left],  arrayHeight[left],time,'red');
                update_element(array[right],  arrayHeight[right],time,'red');
                time++;

                update_element(array[left],  arrayHeight[left],time,'var(--primary-color)');
                update_element(array[right],  arrayHeight[right],time,'var(--primary-color)');
                time++;
                
                right--;
                
            }
            update_element(array[left],  arrayHeight[left],time,'var(--primary-color)');
            time++;
            left++;
        }else{
            update_element(array[right],  arrayHeight[right],time,'var(--primary-color)');
            time++;
            right--;
        }
       
    }

    left --;
    update_element(array[left],  arrayHeight[left],time,'red');
    update_element(array[pivot],  arrayHeight[pivot],time,'red');
    time++;

    let temp = arrayHeight[left];
    arrayHeight[left]=arrayHeight[pivot];
    arrayHeight[pivot]=temp;

    update_element(array[left],  arrayHeight[left],time,'var(--primary-color)');
    update_element(array[pivot],  arrayHeight[pivot],time,'var(--primary-color)');
    time++;
    return left;
};


const quick_sort = (start, end)=>{
    if (start<end){
        let pivot = sort_partition(start,end);
        quick_sort(start,pivot-1);
        quick_sort(pivot+1,end);
    }
    if(start === 0  && end === array.length-1){
        for(let i=0; i < array.length; i++){
            update_element(array[i],  arrayHeight[i],time,'green');
        }
    }
};