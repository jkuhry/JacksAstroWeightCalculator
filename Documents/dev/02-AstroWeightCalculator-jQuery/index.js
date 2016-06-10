//jquery array section start//

var planets = [
    ['Sun', 27.9],
    ['Jupiter', 2.54],
    ['Neptune', 1.19],
    ['Saturn', 1.08],
    ['Earth', 1],
    ['Moon', 0.1655],
    ['Mars', 0.3895],
    ['Jupiter', 2.640],
    ['Saturn', 1.139],
    ['Uranus', 0.917],
    ['Neptune', 1.148],
    ['Pluto', 0.06]
];


for (var i = 0; i < planets.length; i++) {
    $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#planet");
}
//array finish//

//button function to input print answer//
$(function() {
    $("#gogetit").on("click", function() {

        var personWeight = $("#yourweight").val();

        var yourplanets = $("#planet").val();

        var thetotal = personWeight * yourplanets;

        var planetNames = $("#planet option:selected").html();

        $("#output").text("Your new Astro Weight is " + thetotal + " to the planet " + planetNames + " thats great!");

        


    })

});
