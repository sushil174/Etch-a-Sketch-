const container = document.querySelector('#container');
const colorPicker = document.querySelector('#favcolor');
const gridButton = document.querySelector(".gridSize")
const border2 = document.querySelector('.border2');
const rainbow2 = document.querySelector('.rainbow2');
const clear = document.querySelector('.clear');

let change = 0;
let borderChange = 0;
let mouse = 0;
function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

container.addEventListener("mousedown", (e)=> {
    mouse = 1;
});

container.addEventListener("mouseup", (e)=> {
    mouse = 0;
});

border2.addEventListener("click", (e)=> {
    const GridList = Array.from(document.querySelectorAll('div.grid'));
    switch(borderChange){
        case 1 :
            borderChange = 0;
            GridList.forEach((item)=>{
                item.style.border = "none";
            });
            e.target.style.backgroundColor =  rgb(106,114,226);
            break;
        case 0 :
            borderChange = 1;
            e.target.style.backgroundColor =  rgb(182,99,175);
            GridList.forEach((item)=>{
                item.style.border = "1px black solid";
                item.style.boxSizing = "border-box";
            });
            break;
    }
});

rainbow2.addEventListener("click", (e)=> {
    switch(change) {
        case 0 :
            change = 1;
            e.target.style.backgroundColor =  rgb(182,99,175);
            break;
        case 1 :
            change = 0;
            e.target.style.backgroundColor =  rgb(106,114,226);
            break;
    }
});

gridButton.addEventListener("mouseenter" , (e) => {
    e.target.style.backgroundColor = rgb(182,99,175);
});

gridButton.addEventListener("mouseout" , (e) => {
    e.target.style.backgroundColor = rgb(106,114,226);
});


clear.addEventListener("mouseenter" , (e) => {
    e.target.style.backgroundColor = rgb(182,99,175);
});

clear.addEventListener("mouseout" , (e) => {
    e.target.style.backgroundColor = rgb(106,114,226);
});

colorPicker.addEventListener("mouseenter" , (e) => {
    e.target.style.backgroundColor = colorPicker.value;
});

colorPicker.addEventListener("mouseout" , (e) => {
    e.target.style.backgroundColor = rgb(106,114,226);
});




function createGrid(row = 16,column = 16) {
    var i,j = 0;
    let GridSize = 500/row;
    for(i=0;i<row;i++){
        for(j=0;j<column;j++){
            const test = document.createElement('div');
            test.classList.add('grid');
            test.style.backgroundColor = "white";
            test.style.width = `${GridSize}px`;
            test.style.height = `${GridSize}px`;
            if(borderChange==1) {
                test.style.border = "1px black solid";
                test.style.boxSizing = "border-box";
            }
            else {
                test.style.border = "none";
            }
            container.appendChild(test);
        }
    }
}

function hover() {
    const list = Array.from(document.querySelectorAll('div.grid'));
    list.forEach((item) => {
        item.addEventListener('mouseenter', ()=> {
            if(change == 1){
                const red = getRndInteger(0,255);
                const green = getRndInteger(0,255);
                const blue = getRndInteger(0,255);
                if(mouse){
                    item.style.backgroundColor = rgb(red,green,blue);
                }
            }
            else{
                let normal = document.querySelector('#favcolor').value;
                if(mouse){
                    item.style.backgroundColor = normal;
                }
            }
        })
    })
}

function main(r,c) {
    createGrid(r,c);
    hover();   
}

main();
const button = document.querySelector('button');
button.addEventListener('click', () => {
    removeGrid();
    let grid = parseInt(prompt("enter the grid"));
    main(grid,grid);
    
});


function removeGrid() {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}




clear.addEventListener("click", ()=>{
    const list = Array.from(document.querySelectorAll('div.grid'));
    list.forEach((item)=>{
        item.style.backgroundColor = "white";
    });
});


