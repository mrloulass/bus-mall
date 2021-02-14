'use strict';

// add global variables
let totalClicks = 0;
// up to 25 clicks change after code is done
let clicksAllow = 25;
let allProducts = [];

// trying two ways to add images with an array and without
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
// console.log(imageOne, imageTwo, imageThree);

// let images = [document.querySelector('section img:first-child'), document.querySelector('section img:nth-child(2)'), document.querySelector('section img:nth-child(3)')];
// console.log(images);

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
  allProducts.shift(indexArry);
  allProducts.unshift(indexArry);

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
renderImages();
