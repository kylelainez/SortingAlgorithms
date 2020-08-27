let bubble = () =>{
    for(let x=0; x<arraySize; x++){
        for(let y=0; y<arraySize - x - 1; y++){
            div_update(array[y], arrayHeight[y],time,'#ff5976'); 
            div_update(array[y+1],  arrayHeight[y+1],time,'#ff5976');
            time++;
            if(arrayHeight[y] > arrayHeight[y+1]){
                div_update(array[y], arrayHeight[y],time,'red');
                div_update(array[y+1],  arrayHeight[y+1],time,'red');
                time++;
                let temp = arrayHeight[y+1];
                arrayHeight[y+1] = arrayHeight[y];
                arrayHeight[y]= temp;
                div_update(array[y], arrayHeight[y],time,'red');
                div_update(array[y+1],  arrayHeight[y+1],time,'red');
                time++; 
            }
            div_update(array[y], arrayHeight[y],time,'#ff5976'); 
            div_update(array[y+1],  arrayHeight[y+1],time,'#ff5976');
            time++;
            div_update(array[y], arrayHeight[y],time,'var(--primary-color)');
            div_update(array[y+1],  arrayHeight[y+1],time,'var(--primary-color)');
        }
        div_update(array[array.length-x-1], arrayHeight[array.length-x-1],time,'green');
    }
    time = 1;
    sort.removeAttribute('disabled');
}