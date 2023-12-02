const container = document.querySelector('#container');
var i,j = 0;
for(i=0;i<9;i++){
    for(j=0;j<9;j++){
        var test = document.createElement('div');
        test.style.backgroundColor = "white";
        test.style.width = "106.66px";
        test.style.height = "106.66px";
        test.style.border = "1px black solid"
        test.style.boxSizing = "border-box";
        container.appendChild(test);
    }
}

const list = Array.from(document.querySelectorAll('div'));
list.forEach((item) => {
    item.addEventListener('mouseenter', ()=> {
        item.style.backgroundColor = "black";
    })
})

