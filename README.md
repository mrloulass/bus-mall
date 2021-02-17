# LAB - 11

## BusMall

A start up company called BusMall wants me to build an app to figure which products are propular with customers on a bus.

- build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

- The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

- you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

- The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

- a custom font, color palette, layout with semantic HTML

### What Do We Need?

- Global Variables
    * global click counter
    * allProducts array
    * image one (may put in array)
    * image two (may put in array)
    * image three (may put in array)

- Constructor
    * image(src)
    * name or title
    * views
    * clicks
    * push into allProducts array

- render three images to the DOM

- function for random images from allProducts array
    * Math.random get random index of the Images
    * compare three images

### Author:Louis Lassegue

### Links and Resources
* [Math Random Images](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* [Array Understanding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Help with renderImages](https://www.akashmittal.com/javascript-random-array-element-no-repeat/)
* [Google Custom Fonts](https://fonts.google.com/)

### Reflections and Comments
* I add a indexArray to the renderImage to compare the three images. 
* I add a two event listener `click` to the JS code
* I add view results after clicks


# LAB - 012

## Chart.js
I added a chart to my busmall lab with a CDN and added `<canvas>` to HTML.

### Author: Louis Lassegue

### Links and Resources
* [add a CDN](https://www.jsdelivr.com/package/npm/chart.js)
* [![](https://data.jsdelivr.com/v1/package/npm/chart.js/badge)](https://www.jsdelivr.com/package/npm/chart.js)
* [Creating a Chart](https://www.chartjs.org/docs/latest/)

### Reflections and Comments
* 