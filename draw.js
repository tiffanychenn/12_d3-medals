var germany = [14, 10, 7];
var oar = [2, 6, 9];

var svg = document.getElementById("svg");
var bgermany = document.getElementById("germany");
var boar = document.getElementById("oar");

var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c1.setAttribute("cx", 50);
c1.setAttribute("cy", 50);
c1.setAttribute("r", 10);
c1.setAttribute("stroke", "#FFFFFF");
c1.setAttribute("fill", "goldenrod");
svg.appendChild(c1);

var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c2.setAttribute("cx", 200);
c2.setAttribute("cy", 50);
c2.setAttribute("r", 10);
c2.setAttribute("stroke", "#FFFFFF");
c2.setAttribute("fill", "gray");
svg.appendChild(c2);

var c3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c3.setAttribute("cx", 350);
c3.setAttribute("cy", 50);
c3.setAttribute("r", 10);
c3.setAttribute("stroke", "#FFFFFF");
c3.setAttribute("fill", "brown");
svg.appendChild(c3);


var g=function(e){
    var circ = d3.select("svg")
		.selectAll("circle")
		.data(germany)
		.attr("r",function(d) {return d*3;});
};

var r=function(e){
	var circ = d3.select("svg")
		.selectAll("circle")
		.data(oar)
		.attr("r",function(d) {return d*3;});
};

bgermany.addEventListener('click', g);
boar.addEventListener('click', r);