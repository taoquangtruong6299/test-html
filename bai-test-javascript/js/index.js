console.log($(".btn-total"));
var number = $("#number").val();
$(".btn-total").click(function(e){
  e.preventDefault();
  var giatri1= $("#start-up").val();
  var giatri2= $("#End-of-term").val();
  var vat = $("#VAT").val();
  var number = 0;
  var total = 0;
  if(giatri1 == 0 || giatri2 == 0) {
    alert("nhap gia tri");
  }
  if(giatri1 > giatri2){
    alert("Bn can nhap lai")
  }else {
    number = giatri2 - giatri1;
    console.log(number);
    if(number >0 && number <=50) {
      total = number*1480*(1+(vat)/100);
    }
    if(number >51 && number <=100) {
      total = number*1500*(1+(vat)/100);
    }
    if(number > 101) {
      total = number*1800*(1+(vat)/100);
    }
    $("#number").val(number);
    $("#total").val(total);
  }

})
