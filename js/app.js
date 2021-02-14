'use strict';

// add global variables
let totalClicks = 0;
// up to 25 clicks change after code is done
let clicksAllow = 25;
let allProducts = [];

let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');

// add a event listener
let myImageBox = document.querySelector('section');


// Build a Constructor

function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('usb', 'gif');
new Products('water-can');
new Products('wine-glass');

//  Build random function for images

function getRandomImages() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderImages() {
  let firstImageIndex = getRandomImages();
  let secondImageIndex = getRandomImages();
  let thirdImageIndex = getRandomImages();
  let indexArry = [firstImageIndex,secondImageIndex,thirdImageIndex];
  if (indexArry[0] === indexArry[1]){
    allProducts.shift(indexArry);
  } else {
    allProducts.slice(indexArry);
  }

  imageOne.src = allProducts[firstImageIndex].src;
  imageOne.title = allProducts[firstImageIndex].name;
  allProducts[firstImageIndex].views++;

  imageTwo.src = allProducts[secondImageIndex].src;
  imageTwo.title = allProducts[secondImageIndex].name;
  allProducts[secondImageIndex].views++;

  imageThree.src = allProducts[thirdImageIndex].src;
  imageThree.title = allProducts[thirdImageIndex].name;
  allProducts[thirdImageIndex].views++;
}

function handleClick(event){
  totalClicks++;
  let imageClick = event.target.title;
  console.log(imageClick);
  renderImages();
  if (totalClicks === clicksAllow){
    myImageBox.removeEventListener('click', handleClick);
  }
}

renderImages();

myImageBox.addEventListener('click', handleClick);
