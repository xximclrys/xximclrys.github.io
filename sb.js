var CMT = 0;
var CMG = 0;
var CMV = 0;
var WCMT = 0;
var WCMG = 0;
var WCMV = 0;
var JCFT = 0;
var JCFG = 0;
var JCFV = 0;
var CFBT = 0;
var CFBG = 0;
var CFBV = 0;
var SFBBT = 0;
var SFBBG = 0;
var SFBBV = 0;
var DCCFT = 0;
var DCCFG = 0;
var DCCFV = 0;
var order1 = 0;
var order2 = 0;
var order3 = 0;
var order4 = 0;
var order5 = 0;
var order6 = 0;
var order7 = 0;
var order8 = 0;
var order9 = 0;
var order10 = 0;
var order11 = 0;
var order12 = 0;
var order13 = 0;
var order14 = 0;
var order15 = 0;
var order16 = 0;
var order17 = 0;
var order18 = 0;


function cmT() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_1242')";

  CMT = CMT + 150;
  order1 = order1 + 1;
document.getElementById("prdct-1").innerHTML = "Caramel Macchiato:" + " " + CMT + "("+ order1 +")" + " " + " Tall Drink(s)" + " " + CMG + "("+ order2 +")" + " " + " Grande Drink(s)" + " " + CMV + "("+ order3 +")" + " " + "Venti Drink(s)";
}

function cmG() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_1242')";

  CMG = CMG + 165;
  order2 = order2 + 1;
document.getElementById("prdct-1").innerHTML = "Caramel Macchiato:" + " " + CMT + "("+ order1 +")" + " " + " Tall Drink(s)" + " " + CMG + "("+ order2 +")" + " " + " Grande Drink(s)" + " " + CMV + "("+ order3 +")" + " " + "Venti Drink(s)";
}

function cmV() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_1242')";

  CMV = CMV + 175;
  order3 = order3 + 1;
document.getElementById("prdct-1").innerHTML = "Caramel Macchiato:" + " " + CMT + "("+ order1 +")" + " " + " Tall Drink(s)" + " " + CMG + "("+ order2 +")" + " " + " Grande Drink(s)" + " " + CMV + "("+ order3 +")" + " " + "Venti Drink(s)";
}

function wcmT() {
document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242')";

  WCMT = WCMT + 150;
  order4 = order4 + 1;
document.getElementById("prdct-2").innerHTML = "White Chocolate Mocha:" + " " + WCMT + "("+ order4 +")" + " " + " Tall Drink(s)" + " " + WCMG + "("+ order5 +")" + " " + " Grande Drink(s)" + " " + WCMV + "("+ order6 +")" + " " + "Venti Drink(s)";
}

function wcmG() {
 document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242')";

  WCMG = WCMG + 165;
  order5 = order5 + 1;
document.getElementById("prdct-2").innerHTML = "White Chocolate Mocha:" + " " + WCMT + "("+ order4 +")" + " " + " Tall Drink(s)" + " " + WCMG + "("+ order5 +")" + " " + " Grande Drink(s)" + " " + WCMV + "("+ order6 +")" + " " + "Venti Drink(s)";
}

function wcmV() {
 document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242')";

WCMV = WCMV + 175;
order6 = order6 + 1;
document.getElementById("prdct-2").innerHTML = "White Chocolate Mocha:" + " " + WCMT + "("+ order4 +")" + " " + " Tall Drink(s)" + " " + WCMG + "("+ order5 +")" + " " + " Grande Drink(s)" + " " + WCMV + "("+ order6 +")" + " " + "Venti Drink(s)";
}

function jcfT() {

document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/87ab7a1c8b7b492cbc1d5c5d44e1007b.jpg?impolicy=1by1_wide_1242')";

 JCFT = JCFT + 165;
 order7 = order7 + 1;
document.getElementById("prdct-3").innerHTML = "Java Chip Frappuccino:" + " " + JCFT + "("+ order7 +")" + " " + " Tall Drink(s)" + " " + JCFG + "("+ order8 +")" + " " + " Grande Drink(s)" + " " + JCFV + "("+ order9 +")" + " " + "Venti Drink(s)";
}

function jcfG() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/87ab7a1c8b7b492cbc1d5c5d44e1007b.jpg?impolicy=1by1_wide_1242')";

  JCFG = JCFG + 175;
  order8 = order8 + 1;
document.getElementById("prdct-3").innerHTML =   "Java Chip Frappuccino:" + " " + JCFT + "("+ order7 +")" + " " + " Tall Drink(s)" + " " + JCFG + "("+ order8 +")" + " " + " Grande Drink(s)" +   " " + JCFV + "("+ order9 +")" + " " + "Venti       Drink(s)";
}

function jcfV() {
document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/87ab7a1c8b7b492cbc1d5c5d44e1007b.jpg?impolicy=1by1_wide_1242')";

JCFV = JCFV + 185;
order9 = order9 + 1;
document.getElementById("prdct-3").innerHTML =   "Java Chip Frappuccino:" + " " + JCFT + "("+ order7 +")" + " " + " Tall Drink(s)" + " " + JCFG + "("+ order8 +")" + " " + " Grande Drink(s)" +   " " + JCFV + "("+ order9 +")" + " " + "Venti       Drink(s)";
}

function cfbT() {
 document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/6ab7d70c4fff435faf090a2f1a6f30d5.jpg?impolicy=1by1_wide_1242')";

  CFBT = CFBT + 150;
  order10 = order10 + 1;
 document.getElementById("prdct-4").innerHTML =    "Caramel Frappuccino Blanded:" + " " + CFBT + "("+  order10 +")" + " " + " Tall Drink(s)" + " " + CFBG + "("+ order11 +")" + " " + " Grande Drink(s)" +   " " + CFBV + "("+ order12 +")" + " " + "Venti Drink(s)";
}

function cfbG(){
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/6ab7d70c4fff435faf090a2f1a6f30d5.jpg?impolicy=1by1_wide_1242')";

  CFBG = CFBG + 160;
  order11 = order11 + 1;
  document.getElementById("prdct-4").innerHTML =    "Caramel Frappuccino Blanded:" + " " + CFBT + " ("+  order10 +")" + " " + " Tall Drink(s)" + " " + CFBG + "("+ order11 +")" + " " + " Grande Drink(s)" +   " " + CFBV + "("+ order12 +")" + " " + "Venti Drink(s)";
}

function cfbV() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/6ab7d70c4fff435faf090a2f1a6f30d5.jpg?impolicy=1by1_wide_1242')";

  CFBV = CFBV + 170;
  order12 = order12 + 1;
 document.getElementById("prdct-4").innerHTML =    "Caramel Frappuccino Blanded:" + " " + CFBT + " ("+  order10 +")" + " " + " Tall Drink(s)" + " " + CFBG + "("+ order11 +")" + " " + " Grande Drink(s)" +   " " + CFBV + "("+ order12 +")" + " " + "Venti Drink(s)";
}

function sfbbT() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/d878ff7923b54881a4076de8a0269546.jpg?impolicy=1by1_wide_1242')";

  SFBBT = SFBBT + 165;
  order13 = order13 + 1;
 document.getElementById("prdct-5").innerHTML =    "Strawberry Frappuccino Blended Beverage:" + " " + SFBBT + " ("+  order13 +")" + " " + " Tall Drink(s)" + " " + SFBBG + "("+ order14 +")" + " " + " Grande Drink(s)" +   " " + SFBBV + "("+ order15 +")" + " " + "Venti Drink(s)";
}

function sfbbG() {
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/d878ff7923b54881a4076de8a0269546.jpg?impolicy=1by1_wide_1242')";

  SFBBG = SFBBG + 175;
  order14 = order14 + 1;
  document.getElementById("prdct-5").innerHTML =    "Strawberry Frappuccino Blended Beverage:" + " " + SFBBT + " ("+  order13 +")" + " " + " Tall Drink(s)" + " " + SFBBG + "("+ order14 +")" + " " + " Grande Drink(s)" +   " " + SFBBV + "("+ order15 +")" + " " + "Venti Drink(s)";
}

function sfbbV(){
 document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/d878ff7923b54881a4076de8a0269546.jpg?impolicy=1by1_wide_1242')";

  SFBBV = SFBBV + 185;
 order15 = order15 + 1;
document.getElementById("prdct-5").innerHTML =   "Strawberry Frappuccino Blended Beverage:" + " " + SFBBT + " ("+  order13 +")" + " " + " Tall Drink(s)" + " " + SFBBG + "("+ order14 +")" + " " + " Grande Drink(s)" +   " " + SFBBV + "("+ order15 +")" + " " + "Venti Drink(s)";
}

function dccfT(){
  document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/41daf68bcbf84ee68b7d23e0b820127f.jpg?impolicy=1by1_wide_1242')";

  DCCFT = DCCFT + 165;
  order16 = order16 + 1;
 document.getElementById("prdct-6").innerHTML =   "Double Chocolaty Chip Crème Frappuccino:" + " " + DCCFT + " ("+  order16 +")" + " " + " Tall Drink(s)" + " " + DCCFG + "("+ order17 +")" + " " + " Grande Drink(s)" +   " " + DCCFV + "("+ order18 +")" + " " + "Venti Drink(s)";
}

function dccfG(){
 document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/41daf68bcbf84ee68b7d23e0b820127f.jpg?impolicy=1by1_wide_1242')";

  DCCFG = DCCFG + 175;
  order17 = order17 + 1;
 document.getElementById("prdct-6").innerHTML =   "Double Chocolaty Chip Crème Frappuccino:" + " " + DCCFT + " ("+  order16 +")" + " " + " Tall Drink(s)" + " " + DCCFG + "("+ order17 +")" + " " + " Grande Drink(s)" +   " " + DCCFV + "("+ order18 +")" + " " + "Venti Drink(s)";
}

function dccfV(){

document.getElementById("img").style.backgroundImage = "url('https://globalassets.starbucks.com/assets/41daf68bcbf84ee68b7d23e0b820127f.jpg?impolicy=1by1_wide_1242')";

  DCCFV = DCCFV + 185;
  order18 = order18 + 1;
 document.getElementById("prdct-6").innerHTML =   "Double Chocolaty Chip Crème Frappuccino:" + " " + DCCFT + " ("+  order16 +")" + " " + " Tall Drink(s)" + " " + DCCFG + "("+ order17 +")" + " " + " Grande Drink(s)" +   " " + DCCFV + "("+ order18 +")" + " " + "Venti Drink(s)";
}

function total(){
  var add = CMT + CMG + CMV + WCMT + WCMG + WCMV + JCFT + JCFG + JCFV + CFBT + CFBG + CFBV + SFBBT + SFBBG + SFBBV + DCCFT + DCCFG + DCCFV;

  var add2 = order1 + order2 + order3 + order4 + order5 + order6 + order7 + order8 + order9 + order10 + order11 + order12 + order13 + order14 + order15 + order16 + order17 + order18;

document.getElementById("prdct-ttl").innerHTML= "Total: P" + add + " (" + add2 + ")";
}

function cancel(){
 var cncl = confirm("Are you sure you want to cancel your order?");

  order1 = order1 * 0;

if (cncl === true){
var CMT = 0;
var CMG = 0;
var CMV = 0;
var WCMT = 0;
var WCMG = 0;
var WCMV = 0;
var JCFT = 0;
var JCFG = 0;
var JCFV = 0;
var CFBT = 0;
var CFBG = 0;
var CFBV = 0;
var SFBBT = 0;
var SFBBG = 0;
var SFBBV = 0;
var DCCFT = 0;
var DCCFG = 0;
var DCCFV = 0;
var order1 = 0;
var order2 = 0;
var order3 = 0;
var order4 = 0;
var order5 = 0;
var order6 = 0;
var order7 = 0;
var order8 = 0;
var order9 = 0;
var order10 = 0;
var order11 = 0;
var order12 = 0;
var order13 = 0;
var order14 = 0;
var order15 = 0;
var order16 = 0;
var order17 = 0;
var order18 = 0;

document.getElementById("prdct-1").innerHTML= "Caramel Macchiato:";
 var order1 = order1 * 0;

document.getElementById("prdct-2").innerHTML= "White Chocolate Mocha:";

document.getElementById("prdct-3").innerHTML= "Java Chip Frappuccino:";

document.getElementById("prdct-4").innerHTML= "Caramel Frappuccino Blended:";

document.getElementById("prdct-5").innerHTML= "Strawberry Frappuccino Blended Beverage:";

document.getElementById("prdct-6").innerHTML= "Double Chocolaty Chip Crème Frappuccino:";

document.getElementById("prdct-ttl").innerHTML= "Total:";

document.getElementById("img").style.backgroundImage = "url('https://assets.stickpng.com/images/58428cc1a6515b1e0ad75ab1.png')";
}
}
