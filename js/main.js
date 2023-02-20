let Container = document.querySelector('.conatiner')
function mapper(){
    Container.innerHTML =`<div class="conatiner_inner">
    <form action="#" class="form">
        <img class="bg_img" src="./img/bg1.png" alt="">
        <input type="text" class="oyna" value="0">
        <button class="click">Count</button>
        <button class="clear">Reset</button>
    </form>
    </div>`
}

const data = window.localStorage.getItem('soni')
mapper(data)

let elClick = document.querySelector('.click')
let elClear = document.querySelector('.clear')
let val = document.querySelector('.oyna')


if(val.value >= 0){
    val.value = JSON.parse(data) +1
}
else{
    val.value = 0
}

elClick.addEventListener('click', function() {
    window.localStorage.setItem('soni',val.value)
    val.value = parseInt(val.value)+1
})
elClear.addEventListener('click', function(){
    let val = document.querySelector('.oyna')
    let clearTasbeh = 0
    val.value = clearTasbeh
    console.log(clearTasbeh);
window.localStorage.clear()
})



