const containerBody = document.querySelector('.container-body');
const container = document.querySelector('.container');
const input = document.querySelector('#input');
const inputText = document.querySelector('.inputText');
const clearBtn = document.querySelector('#clearBtn');
const firstBtn = document.querySelector('.firstBtn');
const secondBtn = document.querySelector('.secondBtn');
const thirdBtn = document.querySelector('.thirdBtn');
const Btns = document.querySelectorAll('.Btn');
const colorPicker = document.querySelector('#colorPicker')

console.log(colorPicker.value)


let columnDivArray = [];
let rowDivArray = [];

let num = 16

  firstBtn.addEventListener('click', () => {
    firstBtn.style.backgroundColor = "rgb(197, 196, 196)"
    secondBtn.style.backgroundColor = ""
    thirdBtn.style.backgroundColor = ""
  })

  secondBtn.addEventListener('click', () => {
    firstBtn.style.backgroundColor = ''
    secondBtn.style.backgroundColor = "rgb(197, 196, 196)"
    thirdBtn.style.backgroundColor = ""
  })

  thirdBtn.addEventListener('click', () => {
    firstBtn.style.backgroundColor = ''
    secondBtn.style.backgroundColor = ""
    thirdBtn.style.backgroundColor = "rgb(197, 196, 196)"
  })

function assignValue(clickedButton) {
  buttonText = clickedButton.textContent;
  num = parseInt(buttonText.split(" ")[0]);
  // secondBtn.style.backgroundColor = 'green'
  // thirdBtn.style.backgroundColor = 'red'

  console.log(num)
  createGrid(num);
}


function createGrid(num) {
  container.innerHTML = ''; // Clear the container to remove the previous grid
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // Adjust grid columns
  for (let i = 0; i < num; i++) {
    const columnDiv = document.createElement('div');
    container.appendChild(columnDiv);
    columnDiv.classList.add('column');
    columnDivArray.push(columnDiv); // Add the divGrid reference to the array
    columnDiv.style.width = `${512 / num}px`;
  
  
    for (let j = 0; j < num; j++) {
      const rowDiv = document.createElement('div');
      columnDiv.appendChild(rowDiv);
      rowDivArray.push(rowDiv); // Add the divGrid reference to the array
      rowDiv.classList.add('row');
      rowDiv.style.width = `${512 / num}px`;
      rowDiv.style.height = `${512 / num}px`;
    }
  }

// Add event listener to each divGrid element
rowDivArray.forEach(divGrid => {
  divGrid.addEventListener('mouseover', function() {
    // function getRandom255() {
    //   return Math.floor(Math.random() * 256); // Generates random integers between 0 and 255 which makes the grid colors random colors
    // }

    // let red = getRandom255();
    // let green = getRandom255();
    // let blue = getRandom255();
    // let trans = 0.5;
    // divGrid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    divGrid.style.backgroundColor = colorPicker.value
  });
});
}
  












clearBtn.addEventListener('click', () => { // clear button to clear space
  rowDivArray.forEach(divGrid => {
  divGrid.style.backgroundColor = "white";
})})







// function rangeSlider(value) {
//   inputText.textContent = `${value} X ${value}`;
// }

