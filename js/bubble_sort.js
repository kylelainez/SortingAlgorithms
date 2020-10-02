const bubble = () => {
    for (let x = 0; x < arraySize; x++) {
        let finished_element = arraySize - x - 1;
        // prettier-ignore
        for(let current_element=0; current_element<arraySize - x - 1; current_element++){
            let next_element = current_element+1;

            update_element(array[current_element], arrayHeight[current_element],time,'#ff5976');        //Color Update for checking
            update_element(array[next_element],  arrayHeight[next_element],time,'#ff5976');
            time++;

            if(arrayHeight[current_element] > arrayHeight[next_element]){                               //Check Elements to change
                update_element(array[current_element], arrayHeight[current_element],time,'red');
                update_element(array[next_element],  arrayHeight[next_element],time,'red');             //Color Update for change
                time++;

                swap_elements(current_element, next_element);

                update_element(array[current_element], arrayHeight[current_element],time,'red');        //Color Update
                update_element(array[next_element],  arrayHeight[next_element],time,'red');
                time++; 
            }

            update_element(array[current_element], arrayHeight[current_element],time,'#ff5976');        //Color Update
            update_element(array[next_element],  arrayHeight[next_element],time,'#ff5976');
            time++;

            update_element(array[current_element], arrayHeight[current_element],time,'var(--primary-color)');
        }
        // prettier-ignore
        update_element(array[finished_element], arrayHeight[finished_element], time, "green"); //Color Update for finished element
    }
    setTimeout(() => {
        sort.removeAttribute("disabled");
        sort.classList.remove("disabled"); //Remove disabled state on Sort Button
        time = 1;
        isSwaped = true;
    }, time * speed);
};
