const sort_elements = (start, midpoint, end, isFinal) => {
    let mid = midpoint;
    let current_element = start;
    let next_element = midpoint;

    while (current_element < mid && next_element < end + 1) {
        //Color Update for checking
        update_element(
            array[current_element],
            arrayHeight[current_element],
            time,
            "#ff5976"
        );
        update_element(
            array[next_element],
            arrayHeight[next_element],
            time,
            "#ff5976"
        );
        time++;

        //Check Elements to change
        if (arrayHeight[current_element] > arrayHeight[next_element]) {
            //Color Update for change
            update_element(
                array[current_element],
                arrayHeight[current_element],
                time,
                "red"
            );
            update_element(
                array[next_element],
                arrayHeight[next_element],
                time,
                "red"
            );
            time++;

            let temp = arrayHeight.splice(next_element, 1);
            arrayHeight.splice(current_element, 0, temp[0]);

            //New Location of moved element
            update_element(
                array[current_element],
                arrayHeight[current_element],
                time,
                "red"
            );
            update_element(
                array[current_element + 1],
                arrayHeight[current_element + 1],
                time,
                "red"
            );

            update_element(
                array[current_element],
                arrayHeight[current_element],
                time,
                "#ff5976"
            );
            update_element(
                array[current_element + 1],
                arrayHeight[current_element + 1],
                time,
                "#ff5976"
            );

            if (next_element !== end) {
                next_element++;
            }
            current_element++;
            mid++;

            //Height Update after moving
            for (
                let new_location = current_element + 1;
                new_location <= next_element;
                new_location++
            ) {
                update_element(
                    array[new_location],
                    arrayHeight[new_location],
                    time,
                    "var(--primary-color)"
                );
            }

            time++;
        } else {
            current_element++;
        }
        //Color Update
        update_element(
            array[current_element - 1],
            arrayHeight[current_element - 1],
            time,
            "var(--primary-color)"
        );
    }
    //Color Update
    update_element(
        array[next_element],
        arrayHeight[next_element],
        time,
        "var(--primary-color)"
    );

    //Finished Color Update
    if (isFinal) {
        for (let i = 0; i < arraySize; i++) {
            update_element(array[i], arrayHeight[i], time, "green");
        }
        setTimeout(() => {
            sort.removeAttribute("disabled");
            sort.classList.remove("disabled"); //Remove disabled state on Sort Button
            time = 1;
            isSwaped = true;
        }, time * speed);
    }
};

//Recursive Method for Division of Array
const merge_sort = (start, end) => {
    if (start < end) {
        let isFinal = false;
        const midpoint = Math.floor((start + end) / 2);
        merge_sort(start, midpoint);
        merge_sort(midpoint + 1, end);
        if (start === 0 && end === arraySize - 1) isFinal = true;
        sort_elements(start, midpoint + 1, end, isFinal);
    }
};
