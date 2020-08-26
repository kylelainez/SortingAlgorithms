const arrayHolder = document.querySelector('.main');
const sort = document.querySelector('.sort');

let array = [];
let arrayHeight = [];
let delayTime = 0;


for(let x = 0; x<10;x++){
    arrayHeight[x] = Math.floor(Math.random() * 10) + 1;
    array[x] = document.createElement('div');
    arrayHolder.appendChild(array[x]);
    array[x].style=`height: ${arrayHeight[x] * 5}px; width: 10px; margin-left: 10px; background-color: var(--primary-color); bottom:0;`;
}

function div_update(cont,height,time){
    setTimeout(()=>{
        // console.log(cont,height);
        cont.style=`height: ${height * 5}px; width: 10px; margin-left: 10px; background-color: var(--primary-color); bottom:0;`
    },1000*time);
}
let time = 1;
sort.addEventListener('click',()=>{
    for(let x=0; x<10; x++){
        for(let y=0; y<10 -x; y++){
            if(arrayHeight[y] > arrayHeight[y+1]){
                console.log(arrayHeight[y],arrayHeight[y+1]);
                let temp = arrayHeight[y+1];
                arrayHeight[y+1] = arrayHeight[y];
                arrayHeight[y]= temp;
                div_update(array[y], arrayHeight[y],time);
                div_update(array[y+1],  arrayHeight[y+1],time);
                time++;
            }
        }
    }
});


