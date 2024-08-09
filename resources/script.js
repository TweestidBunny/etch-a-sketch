const uiWindow = document.querySelector('#window');

function changeSize(size) {
  uiWindow.textContent = '';
  for (let i = 0; i < size; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < size; j++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.addEventListener('mouseover', () => row.style.backgroundColor = `#${bgColorChange()}`);
      column.appendChild(row);
    }
    uiWindow.appendChild(column);
  }
}

function bgColorChange() {
  const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let colorHex = ''
  for (let i = 0; i < 6; i++) {
    colorHex += colorArr[Math.floor(Math.random() * 16)];
  }
  return colorHex;
}
const btn = document.querySelector('button');

btn.addEventListener('click', () => changeSize(+prompt('Size below 100: ')))
