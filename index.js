function setNumColumns(){
    console.log('resizing');
    let w = window.innerWidth;
    if(w < 600){
        NUMCOLUMNS = 3
    } else if(w > 600 && w < 992){
        NUMCOLUMNS = 4
    } else if(w > 992){
        NUMCOLUMNS = 5;
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function showImage(i){
    const thisDiv = document.querySelector(`#image${i}`);
    thisDiv.style.display = 'block';
}

const imgNames = [
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
    'georgian.png',
    'romanian.png',
    'russian.png',
    'synagogue.png',
    'temple.png',
];


let NUMCOLUMNS = 1;



// window.addEventListener('onresize', initColumns);
// window.onresize = setNumColumns;

// console.log(NUMCOLUMNS);
const NUMDAYS = 31;

const flexColumns = [];
const days = [];

const container = document.querySelector('.container');

initColumns();


function initColumns(){
    setNumColumns();
    removeAllChildNodes(container);

for(let cols = 0; cols < NUMCOLUMNS; cols++){
    const newColumn  = document.createElement('div');
    newColumn.className = 'column-container';
    // newColumn.id = cols;
    const colWidth = 80/NUMCOLUMNS;
    console.log(colWidth);
    newColumn.style.width = `${colWidth}vw`;
    flexColumns.push(newColumn);
}


for(let i = 0; i < NUMDAYS; i++){
    const newDiv = document.createElement('div');
    newDiv.className = 'day-item';
   
    newDiv.addEventListener("click", () => showImage(i));
    const randomHeight =  Math.random() * 70 + 70;
    newDiv.style.height = `${randomHeight}px`;
    const img = document.createElement('img');
    img.src = `img/${imgNames[i]}`;
    img.id = `image${i}`;
    img.style.display = 'none';
    newDiv.appendChild(img);
    const number = document.createElement('p');
    number.innerText = `${i}`;
    newDiv.appendChild(number);
    days.push(newDiv);
    // container.appendChild(newDiv);
    // const newImg = document.createElement('img');
    // newImg.src = `img/${imgNames[i]}`;
    // newDiv.appendChild(newImg);
    // container.appendChild(newDiv);
} 

console.log(flexColumns);


days.forEach( (day, i) => {
    flexColumns[i%NUMCOLUMNS].appendChild(day);
})

flexColumns.forEach(column => {
    container.appendChild(column);
})
}


