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

speedRange.addEventListener('change',()=>{
    speed = speedRange.value;
});
size.addEventListener('change',()=>{
    arraySize = size.value;
    array.length = arraySize;
    generateArray();
    
});
let div_update = (cont,height,time,color)=>{
    setTimeout(()=>{
        // console.log(cont,height);
        cont.style=`height: ${(2*height)/ arraySize}%; width: ${(50/arraySize)}%; margin-left: ${500/arraySize}px; background-color: ${color}; bottom:0;`
    },speed*time);
}
let generateArray = ()=>{
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
    bubble();
    sort.disabled = true;
});