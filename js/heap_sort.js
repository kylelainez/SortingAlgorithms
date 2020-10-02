const heap = (length, index) => {
    if (index >= Math.floor(length / 2)) {
        return;
    }

    let largest = index;
    const left_child = index * 2 + 1;
    const right_child = index * 2 + 2 < length ? index * 2 + 2 : null;

    if (left_child < arraySize)
        update_element(
            array[left_child],
            arrayHeight[left_child],
            time,
            "#ff5976"
        );
    if (right_child < arraySize && right_child !== null)
        update_element(
            array[right_child],
            arrayHeight[right_child],
            time,
            "#ff5976"
        );
    update_element(array[index], arrayHeight[index], time, "#ff5976");
    time++;

    if (left_child < length && arrayHeight[left_child] > arrayHeight[largest]) {
        largest = left_child;
    }
    if (
        right_child < length &&
        arrayHeight[right_child] > arrayHeight[largest] &&
        right_child !== null
    ) {
        largest = right_child;
    }
    if (largest !== index) {
        update_element(array[index], arrayHeight[index], time, "red");
        update_element(array[largest], arrayHeight[largest], time, "red");
        time++;

        swap_elements(index, largest);

        update_element(array[index], arrayHeight[index], time, "red");
        update_element(array[largest], arrayHeight[largest], time, "red");
        time++;

        if (left_child < arraySize)
            update_element(
                array[left_child],
                arrayHeight[left_child],
                time,
                "#ff5976"
            );
        if (right_child < arraySize && right_child !== null)
            update_element(
                array[right_child],
                arrayHeight[right_child],
                time,
                "#ff5976"
            );
        update_element(array[index], arrayHeight[index], time, "#ff5976");
        time++;

        update_element(
            array[index],
            arrayHeight[index],
            time,
            "var(--primary-color)"
        );
        update_element(
            array[left_child],
            arrayHeight[left_child],
            time,
            "var(--primary-color)"
        );
        if (right_child < arraySize && right_child !== null)
            update_element(
                array[right_child],
                arrayHeight[right_child],
                time,
                "var(--primary-color)"
            );

        heap(length, largest);
    }

    if (left_child < arraySize)
        update_element(
            array[left_child],
            arrayHeight[left_child],
            time,
            "#ff5976"
        );
    if (right_child < arraySize && right_child !== null)
        update_element(
            array[right_child],
            arrayHeight[right_child],
            time,
            "#ff5976"
        );
    update_element(array[index], arrayHeight[index], time, "#ff5976");
    time++;

    if (left_child < arraySize)
        update_element(
            array[left_child],
            arrayHeight[left_child],
            time,
            "var(--primary-color)"
        );
    if (right_child < arraySize && right_child !== null)
        update_element(
            array[right_child],
            arrayHeight[right_child],
            time,
            "var(--primary-color)"
        );
    update_element(
        array[index],
        arrayHeight[index],
        time,
        "var(--primary-color)"
    );
};

const heap_sort = () => {
    for (let i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        heap(arraySize, i);
    }

    for (let i = arraySize - 1; i > 0; i--) {
        update_element(array[0], arrayHeight[0], time, "red");
        update_element(array[i], arrayHeight[i], time, "red");
        time++;

        swap_elements(0, i);

        update_element(array[0], arrayHeight[0], time, "red");
        update_element(array[i], arrayHeight[i], time, "red");
        time++;

        update_element(array[0], arrayHeight[0], time, "green");
        update_element(array[i], arrayHeight[i], time, "green");

        heap(i, 0);
    }
    setTimeout(() => {
        sort.removeAttribute("disabled");
        sort.classList.remove("disabled"); //Remove disabled state on Sort Button
        time = 1;
        isSwaped = true;
    }, time * speed);
};
