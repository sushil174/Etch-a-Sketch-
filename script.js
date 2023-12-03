const container = document.querySelector('#container');
const rainbow = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#favcolor');
const check = document.querySelector('#border');
let change = 1;
colorPicker.addEventListener('input' , ()=> change = 1);
rainbow.addEventListener('click' , ()=> change = 0);


function createGrid(row = 1,column = 1) {
    var i,j = 0;
    let GridSize = 960/row;
    for(i=0;i<row;i++){
        for(j=0;j<column;j++){
            const test = document.createElement('div');
            test.classList.add('grid');
            test.style.backgroundColor = "white";
            test.style.width = `${GridSize}px`;
            test.style.height = `${GridSize}px`;
            container.appendChild(test);
        }
    }
}

function hover() {
    const list = Array.from(document.querySelectorAll('div.grid'));
    list.forEach((item) => {
        item.addEventListener('mouseenter', ()=> {
            if(change == 1){
                let normal = document.querySelector('#favcolor').value;
                item.style.backgroundColor = normal;
            }
            else if(change == 0){
                const red = getRndInteger(0,255);
                const green = getRndInteger(0,255);
                const blue = getRndInteger(0,255);
                item.style.backgroundColor = rgb(red,green,blue);
            }
        })
    })
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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
    check.checked = false;
});


function removeGrid() {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}


check.addEventListener('change', ()=> {
    const list = Array.from(document.querySelectorAll('div.grid'));
    list.forEach((item)=> {
        if(check.checked){
            item.style.border = "1px black solid"
            item.style.boxSizing = "border-box";  
        }
        else {
            item.style.border = "none";
        }
    })
})
