$(document).ready(function(){
  $("form#forms").submit(function(event){
    event.preventDefault();
  var input1 =  parseInt($("input#input1").val());
  var input2 =  parseInt($("input#input2").val());
  var total = 0;
  var outputs = [];

    for (var currentNumber = 0; currentNumber <= input1; currentNumber += input2) {
       total += input2 ;
       outputs.push(total);
    }
    $("p").append("Your output specified by multiples of :" + " " + outputs + ".");
  });
});
