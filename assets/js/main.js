const handleClickBurger = () => {
  const burger = document.querySelector('.burger')
  const closeButton = document.querySelector('.button-close')
  const menu = document.querySelector('.mobile-menu')

  const onClickBurger = () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active')
      menu.classList.add('show')
    } else {
      burger.classList.remove('active')
      menu.classList.remove('show')
    }
  }

  const onClose = () => {
    burger.classList.remove('active')
    menu.classList.remove('show')
  }

  burger.addEventListener('click', onClickBurger)
  closeButton.addEventListener('click', onClose)
}
handleClickBurger()

const stickyHeader = () => {
  const header = document.querySelector('.header')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  })
}
stickyHeader()

const handlSubmitFrom = () => {
  const form = document.querySelector('.form')
  const inputs = form.querySelectorAll('.input')

  const inputValidate = (input) => {
    if (input.value) {
      input.classList.remove('not-valid')
      input.classList.add('valid')
    } else {
      input.classList.remove('valid')
      input.classList.add('not-valid')
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      inputValidate(input)
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const isValid = Array.from(inputs).every((item) => item.classList.contains('valid'))
    if (!isValid) {
      inputs.forEach(input => {
        if (!input.classList.contains('valid')) {
          input.classList.add('not-valid')
        }
      })
    } else {
      form.reset()
      console.log('Fetch')
    }
  })
}
handlSubmitFrom()