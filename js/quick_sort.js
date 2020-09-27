const sort_partition = (start, end) => {
  let pivot = start,
    left = pivot + 1;
  right = end;
  update_element(array[pivot], arrayHeight[pivot], time, "blue");
  time++;
  while (right >= left) {
    update_element(array[left], arrayHeight[left], time, "#ff5976");
    update_element(array[right], arrayHeight[right], time, "#ff5976");
    time++;
    if (arrayHeight[pivot] > arrayHeight[right]) {
      if (arrayHeight[left] > arrayHeight[pivot]) {
        update_element(array[left], arrayHeight[left], time, "red");
        update_element(array[right], arrayHeight[right], time, "red");
        time++;

        swap_elements(right, left);

        update_element(array[left], arrayHeight[left], time, "red");
        update_element(array[right], arrayHeight[right], time, "red");
        time++;

        update_element(array[left], arrayHeight[left], time, "#ff5976");
        update_element(array[right], arrayHeight[right], time, "#ff5976");
        time++;

        update_element(
          array[left],
          arrayHeight[left],
          time,
          "var(--primary-color)"
        );
        update_element(
          array[right],
          arrayHeight[right],
          time,
          "var(--primary-color)"
        );
        right--;
      }
      update_element(
        array[left],
        arrayHeight[left],
        time,
        "var(--primary-color)"
      );
      left++;
    } else {
      update_element(
        array[right],
        arrayHeight[right],
        time,
        "var(--primary-color)"
      );
      right--;
    }
  }
  left--;
  update_element(array[left], arrayHeight[left], time, "red");
  update_element(array[pivot], arrayHeight[pivot], time, "red");
  time++;

  swap_elements(pivot, left);

  update_element(array[left], arrayHeight[left], time, "green");
  update_element(array[pivot], arrayHeight[pivot], time, "blue");
  time++;

  return left;
};

const quick_sort = (start, end) => {
  if (start < end) {
    let pivot = sort_partition(start, end);
    quick_sort(start, pivot - 1);
    quick_sort(pivot + 1, end);
  } else if (start < arraySize) {
    update_element(array[start], arrayHeight[start], time, "green");
    time++;
  }
  time = 1;
  isSwaped = true;
};
