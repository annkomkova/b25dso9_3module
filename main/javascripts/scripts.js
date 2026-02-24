moveProgressBar()
// hideModalWindow()
drawSVG()
getRandomImg()

function getRandomImg() {
  let button = document.querySelector('.randomImgButton')
  let image = document.querySelector('.randomSection img')

  button.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * (8 - 1 + 1) + 1)

    image.src = `images/smeshariki/smesharik${randomNumber}.webp`
  })
}

function drawSVG() {
  let star = document.querySelector('.svgLine')
  let length = star.getTotalLength()

  star.style.strokeDasharray = length
  star.style.strokeDashoffset = length

  window.addEventListener('scroll', drawing)

  function drawing() {
    let scrollPercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let draw = length * scrollPercent

    star.style.strokeDashoffset = length - draw
  }
}

function moveProgressBar() {
  let button = document.querySelector('.progressButton')
  let i = 0

  button.addEventListener('click', () => {
    if (i == 0) {
      i = 1

      let elem = document.querySelector('.progress')
      let number = document.querySelector('.progressNumber')
      let width = 1

      function frame() {
        if (width < 100) {
          width++
          elem.style.width = width + '%'
          elem.style.opacity = 1
          number.innerText = width + '%'
        } else {
          i = 0
        }
      }

      setInterval(frame, 50)
    }
  })
}

function hideModalWindow() {
  let section = document.querySelector('#modalWindowSection')

  setTimeout(() => {
    section.style.display = 'flex'
  }, 3000)

  section.addEventListener('click', () => {
    section.style.display = 'none'
  })
}
