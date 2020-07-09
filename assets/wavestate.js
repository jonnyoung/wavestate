// here we make a function called makeArrows
function makeArrows() {
  const title = '››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››'

  // here we make a new empty array with 50 spaces in it then we fill it with the text from our title (50 times)
  const arrowsText = new Array(50).fill(title).join('››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››')

  // 1. we want to grab our .arrows span from the html
  // 2. we want to set our repeating title as the content

  // querySelector and querySelectorAll are the same as $ in jQuery
  const arrows = document.querySelector('.arrows span')

  // using innerHTML lets us set the content inside an element
  arrows.innerHTML = arrowsText

  //test log message
  //    console.log(arrows)
}

// here we actually run our makeArrows function
makeArrows()