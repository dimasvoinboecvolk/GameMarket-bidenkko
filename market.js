console.log('Перевірка підключеного файлу скриптів market.js')

//let itemsArray = ['газонокосорка','електричний тример','електро газонокосарка','акамуляторний оприскувач']
//Визначення масиву об'єкті
//let itemsArray = [
// {
// firstName: "Віталій",
// LastName: "Шатківський",
//age: 43,
//subject: "CS",
//photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
// url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/"
// },
// {
// firstName: "Наталія",
//LastName: "Венцель",
// age: 18,
// subject: "Адміністратор",
// photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
// url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/"
// },
// {
///     firstName: "Наталія",
//  LastName: "Кучер",
//  age: 18,
///    subject: "Фізика",
//   photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//   url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/"
//  }
//]

let itemsDiv = document.getElementById("items");

console.log(itemsDiv)

if (itemsDiv) {
    itemsArray.forEach((item) => {
        itemsDiv.innerText += `
        <!--  Блок окремого товару -->
        <div class="item">
        <div class="item-title">${item.title}</div>

        <!-- Блок зображення товару -->
        <div class="item-image">
        <img src="${item.image}" class = "item-iamge">
        </div>
        
        <!-- Блок з оплатою частинами -->
        <div class="parts-pay">
        <div> class ="parts-pay">
        <div><img src="img/bg.png" alt="">${item.mono}</div>
        <div><img src="img/prom.png" alt="">${item.pb}</div>
        </div>

        <!-- Блок Ціни -->
        <div class="prise">
        
        <div><span>${item.prise_standart} </span><sup>грн</sup></div>
        <div><span>${item.prise_discount} </span><sup>грн</sup></div>
        </div>

        <!-- Блок бонусної ціни -->
        <div class="prise bonus">
        <div> ціна за купоном </div>
        <div><span>${item.prise_coupon} </span><sup>грн</sup></div>
        </div>
        </div>
        
  

        
        `
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
      //  .forEach((item, index) => {
        //    itemsDiv.innerHTML +=
                
       // //<div class = "item">
        //  <h2>Вчитель №${index + 1} з ${itemsArray.length}</h2>
        //   <p>${item.firstName} ${item.LastName}</p>
        //   <p>предмет: ${item.subject}</p>
        //   <p>предмет: ${item.subject}</p>
        //   <p>предмет: ${item.subject}</p>
         //  <p><img src = "${item.photo}" class = "item-image"></p>
         //  <p><a href = "${item.url}" target = "_blank" class = "bonus price ">Профіль</a></p>
        //   <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
         // <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"<p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
         // class = "price ">Написати </a></p>
        
        //  </div>
        //  })

    } else {

        console.log('Блок товарів не знайдено')
    }




    console.log(itemsArray)

    //itemsArray = itemsArray.sort().forEach((item) => {
    //console.log( item)
    //})

    itemsArray.sort().forEach((item, index) => {
        console.log(index + '-й елемент: ', item)
    })



    for (let i = 0; i < itemsArray.length; i++) {
        console.log(i + '-й елемент: ', itemsArray[i])
    }

    let itemsArray = [
        {
            title: "Мотокоса 43",
            image:  "https://images.prom.ua/3896328358_w300_h300_kustorez-motokosa-stihl.jpg",
            mono: 4,
            pb: 10,
            prise_standart: 5499,
            prise_discount: 4497,
            prise_coupon: 4395,
        }
    ]
