function yournewanswer() {
  var personweight = document.getElementById("yourweight").value;
  var yourplanet = document.getElementById("planet").value;
  var youranswer = personweight * yourplanet;
  var planetsel = document.getElementById("planet") [document.getElementById("planet").selectedIndex].text;

 document.getElementById("expectedoutput").innerHTML = "The " + planetsel + " weight is " + youranswer  + "lbs!"; 

}


