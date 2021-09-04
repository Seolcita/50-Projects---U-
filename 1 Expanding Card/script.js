const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  //console.log(panel) >> showing each .panel(div)
    panel.addEventListener('click', () => {
      //console.log(123) >> whenever .panel clicked, it will console log 123
        removeActiveClasses()
        panel.classList.add('active') //add class .active
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// document.querySelector('.panel')
// It will select only first class .panel
// That's why we need to use document.querySelectorAll('.panel')

// const panels = document.querySelectorAll('.panel')
// console.log(panels) >> It works similar as array
// console.log(panels[1]) >> second .panel will be selected