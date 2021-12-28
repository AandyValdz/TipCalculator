
// enter no of people and total bill
var totalbill=0;
var noOfPeople=0;

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


$(".display").on("click",function () {
  bill=$("input[type=number][name=amt]").val();
  nPeople=$("input[type=number][name=peo]").val();
  cusTip=$("input[type=number][name=cus]").val();
  var tip=CalcTip(bill,nPeople,cusTip);
  var tot=CalcTot(bill,nPeople,tip);
  $(".Tipamt").html("$"+tip);
  $(".total").html("$"+tot);
})

$(".reset").on("click",function () {
  $(but).removeClass("press");
  tipper=0;
  cusTip=0;
  tip=0.00;
  tot=0.00;
  $(".Tipamt").html("$0.00");
  $(".total").html("$0.00");
})

function CalcTip(bi,np,ct) {
  var x=0;
  if (tipper==0) {
   x=ct;
  }
  else {
    x=tipper;
  }
  var ttip=(bi*x)/100;
  var timt=Math.round(ttip/np);
  return timt;
}
function CalcTot(bi,np,ti) {
  var b=parseInt(bi);
  var t=parseInt(ti);
  var ttot=b+t;
  var tomt=Math.round(ttot/np);
  return tomt;
}
