console.log('Перевірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");

console.log(itemsDiv)

if (itemsDiv) {

    console.log(itemsDiv)

    console.log('Поле classList ', itemsDiv.classList)
    console.log('Поле id ', itemsDiv.id)
    console.log('Поле clientWidth ', itemsDiv.clientWidth)
    console.log('Поле innerHTML ', itemsDiv.innerHTML)

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
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }
} else {

    console.log('Блок товарів не знайдено')
}

let itemsArray = ['газонокосорка','електричний тример','електро газонокосарка','акамуляторний оприскувач']


console.log(itemsArray)

for (let i = 0; i < itemsArray.length; i++){
    console.log(i + '-й елемент: ' ,itemsArray[i])
}

