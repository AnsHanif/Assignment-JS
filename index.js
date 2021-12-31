let text = "I love my country Pakistan <br> I like my city Faisalabad <br> I love my Homeland"
// function LowerCase(){
//     lowerCaseText = Textbar.toLowerCase();
// }

document.getElementById("btn-1").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar")
   var User = "";
   if (Textbar.value.length == 0) {
      var result = text.toLowerCase();
      document.getElementById("Text").innerHTML = result;
   }
   if (Textbar.value.length !== 0) {
      // var Textbar = document.getElementById("Textbar");
      var Output = Textbar.value;
      // result = Textbar;
      // result.toLowerCase();
      var Output = Output.toLowerCase();
      document.getElementById("Text").innerHTML = Output;
   }
}

document.getElementById("btn-2").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar")
   // var User = "";
   if (Textbar.value.length == 0) {
      var result = text.toUpperCase();
      document.getElementById("Text").innerHTML = result;
   }
   if (Textbar.value.length !== 0) {
      // var Textbar = document.getElementById("Textbar");
      var Output = Textbar.value;
      // result = Textbar;
      // result.toLowerCase();
      var Output = Output.toUpperCase();
      document.getElementById("Text").innerHTML = Output;
   }
}
var Input = document.getElementById("Data").innerHTML;
function capitalize(){
   let capitalizeText = '<span style= "text-transform: capitalize;">' + Input + '</span>';
   document.getElementById("Text").innerHTML = capitalizeText;
}

document.getElementById("btn-4").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar")
   // var User = "";
   if (Textbar.value.length == 0) {
      var result = text.toLowerCase();
      document.getElementById("Text").innerHTML = result;
   }
   if (Textbar.value.length !== 0) {
      // var Textbar = document.getElementById("Textbar");
      var Output = Textbar.value;
      // result = Textbar;
      // result.toLowerCase();
      var Output = Output.toLowerCase();
      document.getElementById("Text").innerHTML = Output;
   }
}

var cities = ["Islamabad","Lahore","karachi","Faisalabad"]
document.getElementById("btn-5").onclick = function () {
   document.getElementById("Text").innerHTML = "";
for(i=0; i<=3; i++){
   // var result = 
   var num = i+1
document.getElementById("Text").innerHTML +=num + ")" + cities[i]+"<br>";
}
}

document.getElementById("btn-6").onclick = function(){
   var newcity = document.getElementById("Textbar").value;
   cities.push(newcity);
   
   document.getElementById("Text").innerHTML = "Your city is Added Successfully";
   document.getElementById("btn-7").onclick = function () {
      document.getElementById("Text").innerHTML = "";
   for(i=0; i<=4; i++){
      // var result = 
      var num = i+1
   document.getElementById("Text").innerHTML +=num + ")" + cities[i]+"<br>";
   }
  console.log()
}
}
document.getElementById("btn-8").onclick = function(){
   var Input = document.getElementById("Data").innerHTML;
   var Textbar = document.getElementById("Textbar").value;
   var Index = Input.indexOf(Textbar);
   if(Index===-1){
      document.getElementById("Text").innerHTML = "Word"+" "+Textbar+" "+"is not found in string";   
   }else{
   document.getElementById("Text").innerHTML = "Your Word" +" "+ Textbar +" "+"is at index" +" "+ Index;
}}

document.getElementById("btn-9").onclick = function(){
   var Input = document.getElementById("Data").innerHTML;
   var Textbar = document.getElementById("Textbar").value;
   var newInput = prompt('Enter New Value');
   var replaceWord = Input.replace(Textbar, newInput)
   document.getElementById("Text").innerHTML = replaceWord
}