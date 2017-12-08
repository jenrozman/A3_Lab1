(function () {
  // calling in the html
    var theImages = document.querySelectorAll('.data-ref')
      
const httpRequest = new XMLHttpRequest(); //pass info to PHP file
        
function changeCar() {
  /*const url = '.includes/functions.php?carModel=' + this.id;
 
  fetch(url) 
  .then((resp) => resp.json())
  .then((data) => { processResult(data); })
  .catch(function(error)) {
    console.log(error);
  }*/





//console.log('halp');
    //set the ajax call - handle the errors first
  /*if (!httpRequest){
    alert('giving up, your browser sucks');
    return false;
      }
      //when the state changes, do this
      httpRequest.onreadystatechange = processRequest;
      //passes through the id of the element so you dont have to write this
      httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
      httpRequest.send();
   }
    
  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
//debugger;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
        let data = JSON.parse(httpRequest.responseText);

        proccesschangeCar(data);
      } else {
        alert('There was a problem with the request.'); //send data to function so it will play on page
      }
    }*/
  }
 	      
function proccesschangeCar(data) {
  const { modelName, pricing, modelDetails } = data;//deconstruction assignment

        let name = document.querySelector('.modelName').textContent = modelName;
        let price = document.querySelector('.priceInfo').innerHTML = pricing;
        let desc = document.querySelector('.modelDetails').textContent = modelDetails;
     //console.log('halp');

    
      //lowers img opacity
        theImages.forEach(function(car, index){
        car.classList.add('nonActive');
    });
     //when selected opacity goes back to 100
    
    document.querySelector(`#${data.model}`).classList.remove('nonActive');
 }
          //creates the listener to call in the changeCar function
  theImages.forEach(function(car, index) {
    car.addEventListener('click', changeCar, false);

 		 });
})();



