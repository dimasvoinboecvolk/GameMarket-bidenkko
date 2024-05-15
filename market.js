console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = ['газонокосорка','електричний тример','електро газонокосарка','акамуляторний оприскувач']

let itemsDiv = document.getElementById("items");

console.log(itemsDiv)

if (itemsDiv) {
    itemsArray.forEach((item) => {
        itemsDiv.innerText += item
    })

    //console.log(itemsDiv)

    //console.log('Поле classList ', itemsDiv.classList)
    //console.log('Поле id ', itemsDiv.id)
    //console.log('Поле clientWidth ', itemsDiv.clientWidth)
    //console.log('Поле innerHTML ', itemsDiv.innerHTML)

    //itemsDiv.innerText = 'Програмно доданий текст'
    
    //itemsDiv.innerText = 'Перший Програмно доданий текст'
    //itemsDiv.innerText += 'Другий Програмно доданий текст'

    //itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'


} else {

    console.log('Блок товарів не найдено')
}

if (itemsDiv) {

    console.log(itemsDiv)

    //itemsDiv.innerHTML += '<div class = item></div>'
    //itemsDiv.innerHTML += '<div class = item></div>'
   // itemsDiv.innerHTML += '<div class = item></div>'
    //itemsDiv.innerHTML += '<div class = item></div>'
    itemsArray.forEach((item,index) => {
        itemsDiv.innerHTML += 
        `<div class = "item">
        <h2>Товар №${index}</h2>
        <p>${item}</p>
        </div>`
    })

} else {

    console.log('Блок товарів не знайдено')
}




console.log(itemsArray)

//itemsArray = itemsArray.sort().forEach((item) => {
    //console.log( item)
//})

itemsArray.sort().forEach((item, index) => {
    console.log(index + '-й елемент: ', item)})



for (let i = 0; i < itemsArray.length; i++) {
    console.log(i + '-й елемент: ' ,itemsArray[i])
}

