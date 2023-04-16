var payment = document.getElementById('payment')
var x =0
payment.innerHTML=x
function calculate() {
    var loan = Number(document.getElementById('mebleq').value);
    var percent = Number(document.getElementById('faiz').value);
    var month = Number(document.getElementById('ay').value);

    var result = ((loan + ((loan*percent)/100)) / month).toFixed(2)
  payment.innerHTML=result

}