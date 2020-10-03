const arrayHolder = document.querySelector(".main");
const sort = document.querySelector(".sort");
const speedRange = document.querySelector("#speed");
const generate = document.querySelector(".generate");
const size = document.querySelector("#array_size");
const sort_method = document.querySelectorAll("input[name='sort']");

let array = [];
let arrayHeight = [];
let arraySize = size.value;
let delayTime = 0;
let time = 1;
let speed = speedRange.value;
let isSwaped = false;

const update_element = (elem, height, time, color) => {
    setTimeout(() => {
        elem.style = `height: ${(2 * height) / arraySize}%; width: ${
            50 / arraySize
        }%; margin-left: ${
            500 / arraySize
        }px; background-color: ${color}; bottom:0;`;
    }, speed * time);
};
const generateArray = () => {
    array = [];
    arrayHeight = [];
    isSwaped = false;
    sort.classList.remove("disabled");
    arrayHolder.innerHTML = "";
    for (let x = 0; x < arraySize; x++) {
        arrayHeight[x] =
            Math.floor(
                Math.random() * arraySize * 0.5 * (size.max - size.min)
            ) + 10;
        array[x] = document.createElement("div");
        arrayHolder.appendChild(array[x]);
        array[x].style = `height: ${
            (2 * arrayHeight[x]) / arraySize
        }%; width: ${50 / arraySize}%; margin-left: ${
            500 / arraySize
        }px; background-color: var(--primary-color); bottom:0;`;
    }
    sort.removeAttribute("disabled");
};
const swap_elements = (i1, i2) => {
    let temp = arrayHeight[i1];
    arrayHeight[i1] = arrayHeight[i2];
    arrayHeight[i2] = temp;
};

speedRange.addEventListener("change", () => {
    speed = speedRange.value;
});
size.addEventListener("input", () => {
    arraySize = size.value;
    array.length = arraySize;
    generateArray();
});
generate.addEventListener("click", generateArray);
sort.addEventListener("click", () => {
    if (isSwaped) alert("Already Sorted!");
    else {
        let checked;
        sort.disabled = true;
        sort.classList.add("disabled");
        for (let method of sort_method) {
            if (method.checked) {
                checked = method.value;
            }
        }
        switch (checked) {
            case "bubble":
                bubble();
                break;
            case "merge":
                merge_sort(0, arraySize - 1);
                break;
            case "quick":
                quick_sort(0, arraySize - 1);
                break;
            case "heap":
                heap_sort();
                break;
            default:
                bubble();
        }
    }
});

window.onload = generateArray();
