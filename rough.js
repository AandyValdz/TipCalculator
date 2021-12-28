var tipper=0;
$(".given").on("click",function () {
  tipper=$(this).attr("id");
  console.log(tipper);
})
// $("body").keydown(function () {
//   tipper=document.getElementById('cus').value;
//   console.log(tipper);
// })
$(".reset").on("click",function () {
  var x=$("input[type=number][name=cus]" ).val();
  console.log(x);
})

// other ineygkad.dcgsiflhdil/hbrijbg';kjn
// sf[k]rghiowfhoeqjfliqehgoeg
// hweuiftiwlygpothuipreyhgietour

// enter no of people and total bill
var totalbill=$("input[type=number][name=amt]").val();


// to store the class
var but="";

// to store output
var tipamt=0;
var totamt=0;

// enter tip percent, if tip percent is not given, enter custom
var tipper=0;
var custip=0
// if tip percent is a given percent
$(".given").on("click",function () {
  tipper=$(this).attr("id");
  but="#"+tipper;
  $(but).addClass("press");
})

// if tip percent has to be customized
$("#cus").on("click",function() {
  custip=$("input[type=number][name=cus]").val();
})

$(".display").on("click",function () {
  console.log(totalbill);
  console.log(noOfPeople);
})

$(".reset").on("click",function () {
  $(but).removeClass("press");
  tipper=0;
  $("input[type=number]").val(0);
})

function CalculateTip() {
  var x=0;
  var tip=0;
  var tot=0;
  if (tipper==0) {
   x=custip;
  }
  else {
    x=tipper;
  }
  tip=(totalbill*x)/100;
  tot=(totalbill)+(tip);
  var timt=tip/noOfPeople;
  var tomt=tot/noOfPeople;
  tipamt=timt.toString();
  totamt=tomt.toString();
}
