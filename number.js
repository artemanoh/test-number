// // математичні оператори

// // const sum = 5 + 6
// // console.log(sum)

// // const difference = 6 - 5
// // console.log(difference)

// // const multiply = 7 * 8
// // console.log(multiply)

// // const division = 6 / 3
// // console.log(division)

// // // математична операція піднесення до степення

// // const pow = 2 ** 3
// // console.log(pow)


// // // число 2 це те число яке ми підносимо до степеня а три це сам степінь

// // // оператор остачі від ділення %

// // // const isEvenNumber = 10 % 4
// // // // 10 / 4 = не ціле число
// // // // 9 / 4 = не ціле число
// // // // 8 / 4 = ціле число. знайшли ціле число тому можемо знайти остачу від ділення
// // // // 10 - 8 = 2 тобто різниця між числами які ми ділили на 4 , 2 це остача від ділення
// // // console.log(isEvenNumber)

                   
// // const sum = 0
// // const newSum = sum + 3  
// // let sum = 0  
// // console.log(sum)
// // sum = 3    
// // console.log(sum)        
// // sum = sum + 7
// // console.log(sum)
// // // ми можемо скоротити sum = sum + 7
// // sum += 7 // це те саме що sum = sum + 7

// // let difference = 5 
// // difference -= 1
// // console.log(difference)
// // difference -= 2
// // console.log(difference)

// // console.dir(Number)
// // const data = "10"
// // const number = typeof Number(data)
// // console.log(number)
// // console.log(Number(true))
// // console.log(Number(false))
// // console.log(Number(null))
// // console.log(Number(undefined))
// // console.log(Number("10") + 1)

// // const dataNumber = Number(data)
// // const multiply = dataNumber + q

// // console.log(Number("hello") + 5)

// // // NaN Not any number

// // const styles = "15.5px"
// // const stylesNumber = 1

// // console.dir(Math)
// // console.log(Math.max(36, 17, 14))
// // console.log(Math.min(1, 55, -7, -55, 36, 17, 14))
// // console.log(Math.pow(36, 2))
// // console.log(Math.round(36.45))
// // console.log(Math.ceil(36.45))
// // console.log(Math.floor(36.772345678))

// // const randomNumber = Math.round(Math.random() * (20 - 15) + 15)
// // console.log(randomNumber)

// const textMessage = "thisIsSparta"
// console.log(textMessage)

// const firstLetter = textMessage[0]
// console.log(firstLetter)

// // const lastLetter = testMessage[3]
// // console.log(lastLetter)
// // знайдемо кількість символів у рядку через length "довжину"
// const messageLength = textMessage.length
// console.log(messageLength)
// // знайдемо останній індекс у данному рядку
// const lastIndex = messageLength - 1

// // звернемoся до останнього рядку через index
// const lastLetter = textMessage[lastIndex]
// console.log(lastLetter)


// // конкатенація рядків (зшивання) 
// const friendName = "Valeria";
// const greeting = "hello my friend,";
// const message = greeting + " " + friendName;
// console.log(message)
// console.log("My best friend is " + friendName)
// // шаблонний рядок це коли ми в рядок можемо підставляти змінну та пишемо його в косих лапках
// // ${} - називається інтерполяцією
// const newMessage = `the age off ${friendName} is 10`;
// console.log(newMessage)


// // властивості та методи рядків
// const info = "I am Ukrainian";
// const bigInfo = info.toUpperCase()
// console.log(bigInfo)

// const smallInfo = info.toLowerCase()
// console.log(smallInfo)

// const mess = 'Привіт, я принц Абдул, це не спам, пропоную';
// const hasSpam = mess.includes('спам');
// console.log(hasSpam)
// // перевірка під яким індексом знаходиться певне слово
// const checkIndex = mess.indexOf('я')
// console.log(checkIndex)
// // -1 коли вводише неіснуючу фразу
// // метод trim обрізає пробіли на початку і в кінці рядка
// const metod = ' привіт це текст ';
// const metodLength = metod. length;
// console.log(metodLength);
// const trimedMessege = metod.trim(); 
// const trimedLength = trimedMessege.length;
// console.log(trimedLength);
// // метод padStart
// const advert = 'Куплю будинок';
// console.log(advert.length);
// const fullAdvert = advert.padStart(15, "!")
// console.log(fullAdvert)
// // padEnd метод
// const notice = advert.padEnd(20,"!")
// console.log(notice)
// // метод startsWith перевыряє чи починається з чогось рядок
// const checkStart = mess.startsWith('Привіт')
// console.log(checkStart)

// const checkEnd = mess.endsWith('пропоную')
// console.log(checkEnd)

// if (1 === 1){
//     console.log('Код виконається')
// }

// if (1 !== 1) {
//     console.log('Код виконається')
// } else {
//     console.log('Код не виконається')
// }

// const userAge = prompt('Введіть свій вік')
// console.log(userAge)

// if (userAge < 13) {
//     alert('Ви малий(а)')
// } else if (userAge >= 13 && userAge < 18) {
//     alert('Ви підліток')
// } else if (userAge > 18 && userAge < 60 ) {
//      alert('Ви дорослий')
// } else if (userAge > 60 && userAge < 100 ) {
//     alert('Ви пенсіонер')
// }


// const userAge = prompt("Скільки вам років?")
// if (userAge > 17 ) {
//     alert("Ви не ходите до шкіли!!!!")
// } else {
//     alert("Ви ходите до шкіли або вам менше 7 років")
// }

// Тернальний оператор

// умова ? те що виконується при тру : те що виконується при фолс

// userAge > 17 ? alert("Ви не ходите до шкіли!!!!") :  alert("Ви ходите до шкіли або вам менше 7 років") :

// let balance = Number(prompt ("Ведіть суму коштів на яку ви хочете купити"));
// console. log (balance)
// let payment = 400;
// alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку` )
// if (payment < balance) {
//      balance -= payment
// alert(`дякую за покупку. На рахунку залишилося ${balance} кредитів`)
// } else{
// alert ("На рахунку недостатньо коштів для проведення операції!")
// }
// alert("Операцію завершено")
// console.log(balance)



// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// //  'Такої кількості зірок немає'



// let hotelStars = Number(prompt ("Введіть кількість зірок для готеля, який ви хочете обрати"))
// console.log (hotelStars)

// if (hotelStars === 1 ) {
//     alert("Кімната в цьому готелі буде коштувати 20$")
// } else if (hotelStars === 2 ) {
//     alert("Кімната в цьому готелі буде коштувати 30$")
// } else if (hotelStars === 3 ) {
//     alert("Кімната в цьому готелі буде коштувати 50$")
// } else if (hotelStars === 4 ) {
//     alert("Кімната в цьому готелі буде коштувати 70$")
// } else if (hotelStars === 5 ) {
//     alert("Кімната в цьому готелі буде коштувати 120$")
// }else {
//     alert("Такої кількості зірок немає")
// }

// else if в якому умови містять оператор рівності можна замінити на конструкцію switch


// switch (змінна - що порівнюємо) {
//     case значення з яким порівнюємо : 
//     інструкція яку треба виконати якщо case-true;
//     break;
//     case значення з яким порівнюємо : 
//     інструкція яку треба виконати якщо case-true;
//     break;
//     default:
//     інструкція
// }


// switch (hotelStars) {
//     case 1 :
//     alert("Кімната в цьому готелі буде коштувати 20$");

//     break;
//     case 2 :
//     alert("Кімната в цьому готелі буде коштувати 30$");
//     break;

//     case 3 :
//     alert("Кімната в цьому готелі буде коштувати 50$");

//     break;
//     case 4 :
//     alert("Кімната в цьому готелі буде коштувати 70$");

//     break;
//     case 5 :
//     alert("Кімната в цьому готелі буде коштувати 120$");

//     break;
//     default:
//         alert("Такої кількості зірок немає")
// }


// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert("Ми підтримуємо і ці браузери" );
//   } else {
//     alert('Маємо надію, що ця сторінка виглядає добре!' );
//   }


// switch (browser) {
//     case "Edge":
//     alert("You've got the Edge!");

//     break;
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//     case "Chrome":
//     alert("Ми підтримуємо і ці браузери" );
//     default:
//     alert("Маємо надію, що ця сторінка виглядає добре!" );   
// }





// Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'.
//  За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови.
//   Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//             - 'Посилка буде відправлена сьогодні'
//             - 'Вам передзвонить менеджер'.

// let option = Number(prompt("Виберіть опцію доставки товару: 1 - самовивіз, 2 - кур'єр, 3 - пошта."))

// switch (option) {
//     case 1 :
//     alert("Ви зможете забрати товар завтра з 12:00 в нашому офісі");
//     break;

//     case 2 :
//     alert("Кур'єр доставить замовлення завтра з 9:00 до 18:00");
//     break;

//     case 2 :
//     alert("Посилка буде відправлена сьогодні");
//     break;
//     default:
//     alert("Цієї відповіді не існує")
// }
// alert("Вам передзвонить менеджер")    