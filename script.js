function genSquareGrid(size){
  for(let i = 1; i <= size; i++){
    // Create size # of row containers
    const row = document.createElement('div');
    row.setAttribute('id', i.toString())
    row.classList.add('row')
    container.appendChild(row);
    
    // Create size # of cells in row container
    for(let j = 1; j <= size; j++){
      const cell = document.createElement('div');
      cell.setAttribute('id', j.toString())
      cell.classList.add("cell")
      row.appendChild(cell);
    }
  }
}

function changeColor(e){
  e.target.style.background = 'black';
}

function clearGrid(){
  container.innerHTML = ''
  genSquareGrid(size)
  const cells = document.querySelectorAll('.cell')

  cells.forEach((cell)=>
  {
    cell.addEventListener('mouseover', function(e){
      changeColor(e);
    });
  })
}

function changeSize(){
  let newSize = prompt("Enter Grid Size: ");
  console.log(newSize);
  if (newSize != null){
    size = parseInt(newSize)
  }
  
  clearGrid();
}

// Default size
var size = 20;

const container = document.querySelector('.grid-container');

// Clear Button Event
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)

const changeGridSize = document.querySelector("#size");
changeGridSize.addEventListener('click', changeSize)

// Starts Grid
clearGrid();





