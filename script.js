const containerBody = document.querySelector('.container-body');
const container = document.querySelector('.container');



let divGridArray = [];
// let num = prompt('num of grids', "40")

num = parseInt(num);



for (let i = 1; i <= 16 * 16; i++) {
  const divGrid = document.createElement('div');
  container.appendChild(divGrid);
  divGrid.classList.add('divGrid');
  divGridArray.push(divGrid); // Add the divGrid reference to the array
  divGrid.style.width = `${512 / num}px`
  divGrid.style.height = `${512 / num}px`
}


// the above equation or function needs to be adjusted so that it returns a grid of new width and height with new amount of squares according to the num in the prompt.


// Add event listener to each divGrid element
divGridArray.forEach(divGrid => {
  divGrid.addEventListener('mouseover', function() {
    function getRandom255() {
      return Math.floor(Math.random() * 256); // Generates random integers between 0 and 255
    }

    let red = getRandom255();
    let green = getRandom255();
    let blue = getRandom255();

    divGrid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
});



// let divGrid;
// for (let i = 1; i <= 16*16; i++) {
//     divGrid = document.createElement('div');
//     container.appendChild(divGrid);
//     divGrid.classList.add('divGrid')

// }
// divGrid.addEventListener('mouseover', function() {        
//     function getRandom255() {
//         return Math.floor(Math.random() * 255) 
//     }
//     let red = getRandom255()
//     let green = getRandom255()
//     let blue = getRandom255()
    


//     divGrid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// })