moveProgressBar()
// hideModalWindow()
drawSVG()
getRandomImg()
changeImageByCursor()
// setCursor()
eyesAnimation()
parallaxCircles()
scrollFrames()

function scrollFrames() {
  let body = document.querySelector('body')
  let container = document.querySelector('.sliderContainer')
  let slider = document.querySelector('.slider')
  let frames = document.querySelectorAll('.slider img')

  let totalFrames = frames.length

  window.addEventListener('scroll', () => {
    let rect = body.getBoundingClientRect()
    let vh = window.innerHeight

    let progress = (vh - rect.top) / (vh + rect.height)
    let p = Math.max(0, Math.min(1, progress))

    let frame = Math.floor(p * (totalFrames - 1))

    let percent = -(frame * 100)

    slider.style.marginLeft = `${percent}%`
  })
}

function parallaxCircles() {
  let section = document.querySelector('.parallax')
  let circles = document.querySelectorAll('.circle')

  window.addEventListener('scroll', () => {
    let rect = section.getBoundingClientRect()

    let progress =
      (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

    let p = Math.max(0, Math.min(1, progress))

    let moveY = (p - 0.5) * 400
    let moveX = (p - 0.5) * 100
    let scale = 1 + p * 0.3

    circles.forEach((circle) => {
      circle.style.transform = `translate(${moveX}px, ${-moveY}px) scale(${scale})`
    })
  })
}

function eyesAnimation() {
  let dots = document.querySelectorAll('.dot')

  document.addEventListener('mousemove', (event) => {
    dots.forEach((dot) => {
      let rect = dot.getBoundingClientRect()

      let dotX = rect.left + rect.width / 2
      let dotY = rect.top + rect.height / 2

      let dX = event.clientX - dotX
      let dY = event.clientY - dotY

      let angle = Math.atan2(dY, dX)

      let deg = angle * (180 / Math.PI)

      dot.style.transform = `rotate(${deg}deg)`
    })
  })
}

function setCursor() {
  let cursor = document.querySelector('#cursor')
  let box = document.querySelector('.imageBox')

  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.cssText = `top: ${y}px; left: ${x}px;`
  })

  box.addEventListener('mouseover', () => {
    cursor.classList.add('hover')
  })
  box.addEventListener('mouseout', () => {
    cursor.classList.remove('hover')
  })
}

function changeImageByCursor() {
  let x = document.querySelector('.XCoord')
  let y = document.querySelector('.YCoord')
  let box = document.querySelector('.imageBox')
  let section = document.querySelector('.changeImage')
  let body = document.querySelector('.bodyInfo')

  document.addEventListener('mousemove', (event) => {
    let cursorX = event.pageX
    let cursorY = event.pageY

    x.innerHTML = `X: ${cursorX}`
    y.innerHTML = `Y: ${cursorY}`

    let bodySizeX = document.documentElement.clientWidth
    let bodySizeY = document.documentElement.clientHeight

    let halfBodySizeX = parseInt(bodySizeX / 2)
    let halfBodySizeY = parseInt(bodySizeY / 2)

    body.innerHTML = `ширина: ${bodySizeX}; высота: ${bodySizeY}`

    let img0 = document.querySelector('.imageBox0')
    let img1 = document.querySelector('.imageBox1')
    let img2 = document.querySelector('.imageBox2')
    let img3 = document.querySelector('.imageBox3')

    if (cursorX < halfBodySizeX && cursorY < halfBodySizeY) {
      img0.style.opacity = '1'
    } else {
      img0.style.opacity = '0'
    }
    if (cursorX > halfBodySizeX && cursorY < halfBodySizeY) {
      img1.style.opacity = '1'
    } else {
      img1.style.opacity = '0'
    }
    if (cursorX > halfBodySizeX && cursorY > halfBodySizeY) {
      img2.style.opacity = '1'
    } else {
      img2.style.opacity = '0'
    }
    if (cursorX < halfBodySizeX && cursorY > halfBodySizeY) {
      img3.style.opacity = '1'
    } else {
      img3.style.opacity = '0'
    }
  })
}

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
