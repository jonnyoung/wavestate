function makeArrows() {
  const title = '››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››'
  const arrowsText = new Array(50).fill(title).join('››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››')
  const arrows = document.querySelector('.arrows span')
  arrows.innerHTML = arrowsText
}

makeArrows()
