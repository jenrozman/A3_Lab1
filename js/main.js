(function () {
  // calling in the html
    var theImages = document.querySelectorAll('.data-ref'),
 	      name = document.querySelector('.modelName'),
 		    price = document.querySelector('.priceInfo'),
		    desc = document.querySelector('.modelDetails');
 	      
function changeCar() {
//console.log('halp');
 let objectIndex = carData[this.id];
          //changes the name/price/desc
  	  name.firstChild.nodeValue = objectIndex.headline;
      price.firstChild.nodeValue = objectIndex.text;
      desc.firstChild.nodeValue = objectIndex.description;
    
          //lowers img opacity
    theImages.forEach(function(element, index){
        element.classList.add('nonActive');
    })
          //when selected opacity goes back to 100
    this.classList.remove('nonActive');
 }
          //creates the listener to call in the changeCar function
  theImages.forEach(function(element) {
    element.addEventListener('click', changeCar, false);

 		 });



})();



