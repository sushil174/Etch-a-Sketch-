let row = 3;
let column = 3;
const button = document.querySelector('button');

//button.addEventListener('click', () => {
//    let size = prompt("enter the gird");
//    row,column = parseInt(size);
//})



const container = document.querySelector('#container');
var i,j = 0;
let GridSize = 960/row;
for(i=0;i<row;i++){
    for(j=0;j<column;j++){
        const test = document.createElement('div');
        test.classList.add('grid');
        test.style.backgroundColor = "white";
        test.style.width = `${GridSize}px`;
        test.style.height = `${GridSize}px`;
        test.style.border = "1px black solid"
        test.style.boxSizing = "border-box";
        container.appendChild(test);
    }
}

const list = Array.from(document.querySelectorAll('div.grid'));
list.forEach((item) => {
    item.addEventListener('mouseenter', ()=> {
        item.style.backgroundColor = "black";
    })
})

