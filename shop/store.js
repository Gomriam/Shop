let data = localStorage.getItem('textvalue')
let name = document.getElementById('name')
const cointainer = document.getElementById('conteiner')
const fruit = document.querySelectorAll('.fruit')
const btnCheck = document.getElementById('check')
let result = document.getElementById('price')
let shopCount = document.getElementById('num')
const end = document.getElementById('end')
let count = 0;
let price = 0;
let val = ''
const btnReload = document.getElementById('reload')
name.innerHTML = data

fruit.forEach(e =>{
e.addEventListener('click',() =>{
    count++
    shopCount.innerHTML = count
    if(count >= 1){
        btnCheck.classList.add('on')
    }
    
    
    
    if(e === fruit[0]){
    val = '@mango';
    (price = price + 2);
    }
    else if(e === fruit[1]){
    val = '@apple';
    (price = price + 3);
    }
    else if(e === fruit[2]){
    val = '@orange';
    (price = price + 2);
    }
    else if(e === fruit[3]){
    val = '@grape';
    (price = price + 4);
    }
    else if(e === fruit[4]){
    val = '@kiwi';
    (price = price + 3);
    };
    let para = document.createElement('p')
    para.classList.add('para')
    para.innerText = val
    cointainer.appendChild(para)

    
    para.addEventListener('click',() =>{
        para.style.textDecoration = 'line-through'
    })
    para.addEventListener('dblclick', () =>{
        count--
      cointainer.removeChild(para)
        if(count < 1){
        btnCheck.classList.remove('on')
        }
        shopCount.innerHTML = count
        if (para.textContent === '@mango'){
            (price = price - 2)
        }
        else if (para.textContent === '@apple'){
            (price = price - 3)
        }
        else if (para.textContent === '@orange'){
            (price = price - 2)
        }
        else if (para.textContent === '@grape'){
            (price = price - 4)
        }
        else if (para.textContent === '@kiwi'){
            (price = price - 3)
        }
        
        
    })
    console.log(price)
})

return price
})
console.log(price)

btnCheck.addEventListener('click',() =>{
    if(count === 0){
        return
    }
 end.classList.add('show')
 result.innerHTML = (+price+'$')
})
