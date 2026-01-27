// Основы JS #3.1

// console.log('привет, как дела?')

// let userName = 'Иван',
//   userAge = 32,
//   userWork = 'бариста',
//   apple = '🍎'

// console.log(userName, userAge, userWork, apple)

// let number = '10n'
// console.log(number / 2)

// const int = 1234567890123456789012345678901234567890n

// let userName = 'petya',
//   stroke = `привет, ${userName}, как день?`

// console.log(stroke)

// let boolean = 10 < 3
// console.log(boolean)

// let text = null
// console.log(text)

// alert('привет!')
// prompt('как ощущения от изучения кода?', 'ну норм')

// let result = prompt('как ощущения от изучения кода?', 'ну норм')
// alert(`здорово, что тебе ${result}`)

// Операторы JS #3.2

// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 !== 1)

// let result = 2 == 1
// console.log(result)

// let result = 3 < 1

// if (result) {
//   console.log('работает "если"')
// } else {
//   console.log('иначе')
// }

// helloUser()

function helloUser() {
  let day = prompt('Какой сегодня день недели?')

  if (day == 'вторник') {
    alert('и правда вторник')
  } else if (day == 'понедельник') {
    alert('живёшь вчерашним днём')
  } else if (day == 'среда' || day == 'четверг' || day == 'пятница') {
    alert(`живёшь будущим днём`)
  } else if (day == 'суббота' || day == 'воскресенье') {
    alert(`живёшь выходным днём`)
  } else {
    alert('чего?')
  }
}

function hey() {
  let userName = propmt('Как тебя зовут?')

  // if (userName == !null)
}

// let hour = 15
// let minute = 14

// if (hour == 15 && minute == 13) {
//   alert('The time is 15:13')
// }

// findElement()
changeClass()

function findElement() {
  let textClass = document.querySelector('.text')
  let textID = document.querySelector('#text')
  let textTag = document.querySelector('p')
  let allTagsP = document.querySelectorAll('p')
  let textButton = document.querySelector('.changeText')
  let cnt = 0

  textButton.addEventListener('click', () => {
    cnt += 1
    textClass.innerHTML = `ты кликнул(-а) ${cnt} раз`

    if (cnt % 10 == 0) {
      alert('юбилейный клик!')
    }
  })
}

function changeClass() {
  let box = document.querySelector('.box')
  let colorButton = document.querySelector('.changeColor')

  colorButton.addEventListener('click', () => {
    box.classList.toggle('back')
    box.classList.toggle('redColor')
  })
}
