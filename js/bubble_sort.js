const bubble = () =>{
    for(let x=0; x<arraySize; x++){
        let finished_element = arraySize - x - 1;
        for(let y=0; y<arraySize - x - 1; y++){
            let current_element = y;
            let next_element = y+1;

            update_element(array[current_element], arrayHeight[current_element],time,'#ff5976');        //Color Update for checking
            update_element(array[next_element],  arrayHeight[next_element],time,'#ff5976');
            time++;

            if(arrayHeight[current_element] > arrayHeight[next_element]){                               //Check Elements to change
                update_element(array[y], arrayHeight[y],time,'red');
                update_element(array[next_element],  arrayHeight[next_element],time,'red');             //Color Update for change
                time++;

                let temp = arrayHeight[next_element];                                                   //Swap Elements
                arrayHeight[next_element] = arrayHeight[y];
                arrayHeight[y]= temp;

                update_element(array[y], arrayHeight[y],time,'red');                                    //Color Update
                update_element(array[next_element],  arrayHeight[next_element],time,'red');
                time++; 
            }

            update_element(array[y], arrayHeight[y],time,'#ff5976');                                    //Color Update
            update_element(array[next_element],  arrayHeight[next_element],time,'#ff5976');
            time++;

            update_element(array[y], arrayHeight[y],time,'var(--primary-color)');
        }
        update_element(array[finished_element], arrayHeight[finished_element],time,'green');            //Color Update for finished element
    }
    setTimeout(()=>{
        sort.removeAttribute('disabled');    
        sort.classList.remove('disabled');                                                           //Remove disabled state on Sort Button
    },time * 1000)
    time = 1;
    isSwaped = true;
}