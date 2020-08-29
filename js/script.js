const arrayHolder = document.querySelector('.main');
const sort = document.querySelector('.sort');
const speedRange = document.querySelector('#speed');
const generate = document.querySelector('.generate');
const size = document.querySelector('#array_size')

let array = [];
let arrayHeight = [];
let arraySize = size.value;
let delayTime = 0;
let time = 1;
let speed = speedRange.value;
let isSwaped = false;

speedRange.addEventListener('change',()=>{
    speed = speedRange.value;
});
size.addEventListener('change',()=>{
    arraySize = size.value;
    array.length = arraySize;
    generateArray();
    
});
let update_element = (elem,height,time,color)=>{
    setTimeout(()=>{
        elem.style=`height: ${(2*height)/ arraySize}%; width: ${(50/arraySize)}%; margin-left: ${500/arraySize}px; background-color: ${color}; bottom:0;`
    },speed*time);
}
let generateArray = ()=>{
    isSwaped = false;
    sort.classList.remove('disabled');
    arrayHolder.innerHTML = '';
    for(let x = 0; x<arraySize; x++){
        arrayHeight[x] = Math.floor(Math.random() * arraySize * 0.5 * (size.max - size.min)) + 10;
        array[x] = document.createElement('div');
        arrayHolder.appendChild(array[x]);
        array[x].style=`height: ${(2* arrayHeight[x]) / arraySize}%; width: ${50/arraySize}%; margin-left: ${500/arraySize}px; background-color: var(--primary-color); bottom:0;`;
    }
    sort.removeAttribute('disabled');
}
window.onload = generateArray();

generate.addEventListener('click',generateArray);

sort.addEventListener('click',()=>{
    if(isSwaped)
        alert('already swaped!');
    else{
        sort.disabled = true;
        sort.classList.add('disabled');
        bubble();
        // merge();
    }
});