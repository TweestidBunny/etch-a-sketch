const uiWindow = document.querySelector('#window');

for (let i = 0; i < 16; i++) {
  const column = document.createElement('div');
  column.classList.add('column');
  for (let j = 0; j < 16; j++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.addEventListener('mouseover', () => row.style.backgroundColor = `#${bgColorChange()}`); //'#f90');
    // row.addEventListener('click', e => console.log(e));
    column.appendChild(row);
  }
  uiWindow.appendChild(column);
}

function bgColorChange() {
  const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let colorHex = ''
  for (let i = 0; i < 6; i++) {
    colorHex += colorArr[Math.floor(Math.random() * 16)];
  }
  // console.log(colorHex)
  return colorHex;
}

// bgColorChange();

// const rowDivs = document.querySelectorAll('.row');
const btn = document.querySelector('button');

// rowDivs.forEach(div => {
//   div.addEventListener('mouseover', () => div.classList.add('bgColorChange'));
//   div.addEventListener('click', e => console.log(e));
// })

btn.addEventListener('click', () => {
  const root = document.querySelector(':root');
  root.style.setProperty('--colorChange', '#003049')
})