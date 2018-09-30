let body = document.querySelector('body')
for(let i = 0; i <= 7; i++){
    let row = document.createElement('div')
    body.appendChild(row)
    document.querySelectorAll('div')[i].classList.add('row')
}

for (let j = 0; j <= 8; j++){
    let container = document.querySelectorAll('.row')[j]
    for(let k = 0; k <= 8; k++){
        let createSpace = document.createElement('div')
        container.appendChild(createSpace)
        let space = document.querySelectorAll('.row div')[k]
        let cols = container.children
        console.log(cols)
        cols[k].style.width = '11.1%'
        cols[k].style.float = 'left'
        cols[k].style.paddingBottom = '11.1%'
        if(j % 2=== 0){
            k % 2 !== 0 ? cols[k].style.backgroundColor = 'black' : cols[k].style.backgroundColor = 'red'
        }
        else{
            k % 2 === 0 ? cols[k].style.backgroundColor = 'black' : cols[k].style.backgroundColor = 'red'
        } 
    
    }
}