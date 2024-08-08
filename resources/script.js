const uiWindow = document.querySelector('#window');

for (let i = 0; i < 16; i++) {
  const column = document.createElement('div');
  column.classList.add('column');
  for (let j = 0; j < 16; j++) {
    const row = document.createElement('div');
    row.classList.add('row');
    column.appendChild(row);
  }
  uiWindow.appendChild(column);
}

const rowDivs = document.querySelectorAll('.row');

rowDivs.forEach(div => {
  div.addEventListener('mouseover', () => div.classList.add('bgColorChange'));
})