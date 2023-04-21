function cityAlert() {
    alert('Weather report loading...')
}

function acceptCookies() {
    cookiesBox = document.getElementById('cookie-policy');
    cookiesBox.style.display = 'none';
}

function changeDegrees() {
    let temperatureId = document.getElementById("temperature").value; //when we decide we want to display our temperature as either farenheit or celsius, we need to tell the computer which conversion we want to perform. this stores the id (value actually because this is an option tag) of 'farenheit' or 'celsius'
    // console.log(temperatureId)
    let displayedTemp = document.querySelectorAll('.day-temp h2, .night-temp h2') //this is targetting the numbers on the HTML where we want to display the change
    let degreeSymbol = document.querySelectorAll('.day-degrees, .night-degrees') // this is targetting the degrees symbol on the HTML where we want to display the change

    if (temperatureId == 'farenheit') { //if id returned when selecting is 'farenheit'...
        for (let i = 0; i < displayedTemp.length; i++) { //loop to get each fields new value
            let farenheitCalc = displayedTemp[i].innerHTML * 9/5 + 32; //perform conversion
            displayedTemp[i].innerHTML = Math.round(farenheitCalc); //display new numbers on the page. round the number.
        }
        for (let i = 0; i < degreeSymbol.length; i++) {
            degreeSymbol[i].innerHTML = '&#8457'; // change the symbol to farenheit.
        }
    }
    else if (temperatureId == 'celsius') { // if id returned when selecting is 'celsius'
        for (let i = 0; i < displayedTemp.length; i++) { 
            let celsiusCalc = (displayedTemp[i].innerHTML - 32) * 5/9;
            displayedTemp[i].innerHTML = Math.round(celsiusCalc);
        }
        for (let i = 0; i < degreeSymbol.length; i++) {
            degreeSymbol[i].innerHTML = '&#8451';
        }
    }
}